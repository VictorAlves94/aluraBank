class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();

    constructor() {

        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
    
       this.negociacoes.adcionar(negociacao);
       console.log(this.negociacoes.lista())
       
        this.limparFormulario();


    }

    criaNegociacao(): Negociacao{
        const exp = /-/g;
        const date = new Date(this._inputData.value.replace(exp, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(date, quantidade ,valor);
        
    }

    limparFormulario(): void {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();

    }
}