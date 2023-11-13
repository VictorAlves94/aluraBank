class Negociacoes{
    private negociacoes:Negociacao[] = [];

    public adcionar(negociacao: Negociacao){
    this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
