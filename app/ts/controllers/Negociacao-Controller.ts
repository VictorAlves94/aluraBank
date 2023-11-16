import { domInjector } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/decorators/dom-injector.js';
import { inspect } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/decorators/inspect.js';
import { logarTempoDeExecucao } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/decorators/logar-tempo-de-execucao.js';
import { DiasDaSemana } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/enums/dias-da-semana.js';
import { Negociacao } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/models/negociacao.js';
import { Negociacoes } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/models/negociacoes.js';
import { MensagemView } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/views/mensagem-view.js';
import { NegociacoesView } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/views/negociacoes-view.js';

export class NegociacaoController {
    @domInjector('#data')
    private _inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private _inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private _inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesview: NegociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView: MensagemView = new MensagemView('#mensagemView');

    constructor() {

         this.negociacoesview.update(this.negociacoes);
    }
    @inspect()
    @logarTempoExecucao()
    public adiciona(): void {
      
        const negociacao = Negociacao.criaDe(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value

        );
    if (!this.ehDiaUtil(negociacao.data)){
    
        this.mensagemView
        .update('Apenas negociações em dias úteis são aceitas.')
        return;
    }
       this.negociacoes.adcionar(negociacao);
       this.limparFormulario();
       this.atualizaView();
         


    }

    ehDiaUtil(data: Date){
        return data.getDay() > DiasDaSemana.DOMINGO 
        && data.getDay() < DiasDaSemana.SABADO;

    }

 

    private limparFormulario(): void {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();

    }

    private atualizaView(): void{
        this.negociacoesview.update(this.negociacoes);
        this.mensagemView.update('negociação adicionada com sucesso.');

    }
}