function logarTempoExecucao(emSegundos: boolean = false){
    return function(
        target: any,
        propertykey: string,
        descriptor:PropertyDescriptor
    
    ){ 
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>){
            let divisor = 1;
            let unidade = 'milisegundos';
            if(emSegundos){
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertykey}, tempo de execução: ${(t1 - t2)/divisor } ${unidade}`)
            retorno
        }
        
        return descriptor;
    }
}