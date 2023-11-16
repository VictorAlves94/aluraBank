import { Negociacao } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/models/negociacao.js';

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adcionar(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
