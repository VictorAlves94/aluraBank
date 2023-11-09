class Negociacoes{
    private negociacoes:Array<Negociacao> = [];

    adcionar(negociacao: Negociacao){
    this.negociacoes.push(negociacao);
    }

    lista():Array<Negociacao>{
        return this.negociacoes;
    }
}
