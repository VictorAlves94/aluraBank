function logarTempoExecucao(emSegundos = false) {
    return function (target, propertykey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertykey}, tempo de execução: ${(t1 - t2) / divisor} ${unidade}`);
            retorno;
        };
        return descriptor;
    };
}
