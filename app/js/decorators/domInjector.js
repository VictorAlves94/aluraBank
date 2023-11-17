function domInjector(seletor) {
    return function (target, propertykey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propertykey, { get: getter });
    };
}
