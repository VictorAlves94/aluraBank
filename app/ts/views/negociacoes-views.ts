class NegociacoesView extends View<Negociacoes>{


    template(model : Negociacoes): string{
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
                    <td${new Intl.DateTimeFormat()
                        .format(negociacao.data)}></td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                </tr>
                `
            }).join('')}
            </tbody>
        </table>  
        `
    }


}

