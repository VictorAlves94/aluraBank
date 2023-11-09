class Negociacoes{
    private negociacoes:Negociacao[] = [];

    adcionar(negociacao: Negociacao){
    this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
