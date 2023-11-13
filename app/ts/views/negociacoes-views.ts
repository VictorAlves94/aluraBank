class NegociacoesView extends View<Negociacoes>{


    protected template(model : Negociacoes): string{
        return `
        <table class="table table-hover table-bordered"> 
            <treat>
                <tr>
                    <th>DATA<th>
                    <th>QUANTIDADE<th>
                    <th>VALOR<th>
                </tr>
            </treat>
            <tbody>
            ${model.lista().map(negociacao => {
                return`
                <tr>
                    <td>${this.formatar(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                </tr>
                <script>alert('Oi')</script>
                `;
            }).join('')}
            </tbody>
        </table>  
        `
    }

    private formatar(data: Date){
        return new Intl.DateTimeFormat()
            .format(data)
    }


}

