class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesview: NegociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView: MensagemView = new MensagemView('#mensagemView');

    constructor() {

        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade')as HTMLInputElement;;
        this._inputValor = document.querySelector('#valor')as HTMLInputElement;;
        this.negociacoesview.update(this.negociacoes);
    }
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
        return data.getDay() > DiasDaSemanas.DOMINGO 
        && data.getDay() < DiasDaSemanas.SABADO;

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