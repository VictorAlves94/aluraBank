class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesview: NegociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView: MensagemView = new MensagemView('#mensagemView');

    constructor() {

        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this.negociacoesview.update(this.negociacoes);
    }

    public adiciona(): void {
        const negociacao = this.criaNegociacao();
            if(negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6){
       this.negociacoes.adcionar(negociacao);
       this.limparFormulario();
       this.atualizaView();
            }else{
                this.mensagemView
                .update('Apenas negociações em dias úteis são aceitas.')
            }


    }

    private criaNegociacao(): Negociacao{
        const exp = /-/g;
        const date = new Date(this._inputData.value.replace(exp, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(date, quantidade ,valor);
        
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