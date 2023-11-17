var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/decorators/dom-injector.js';
import { inspect } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/decorators/inspect.js';
import { DiasDaSemana } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/enums/dias-da-semana.js';
import { Negociacao } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/models/negociacao.js';
import { Negociacoes } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/models/negociacoes.js';
import { MensagemView } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/views/mensagem-view.js';
import { NegociacoesView } from 'c:/Users/Yuri Alves/Desktop/victor/alurabank/app/js/views/negociacoes-view.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesview = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoesview.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView
                .update('Apenas negociações em dias úteis são aceitas.');
            return;
        }
        this.negociacoes.adcionar(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
    atualizaView() {
        this.negociacoesview.update(this.negociacoes);
        this.mensagemView.update('negociação adicionada com sucesso.');
    }
}
__decorate([
    domInjector('#data')
], NegociacaoController.prototype, "_inputData", void 0);
__decorate([
    domInjector('#quantidade')
], NegociacaoController.prototype, "_inputQuantidade", void 0);
__decorate([
    domInjector('#valor')
], NegociacaoController.prototype, "_inputValor", void 0);
__decorate([
    inspect(),
    logarTempoExecucao()
], NegociacaoController.prototype, "adiciona", null);
