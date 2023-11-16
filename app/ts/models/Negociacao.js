"use strict";
exports.__esModule = true;
var Negociacao = (function () {
    function Negociacao(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    Object.defineProperty(Negociacao.prototype, "volume", {
        get: function () {
            return this.quantidade * this.valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negociacao.prototype, "data", {
        get: function () {
            var data = new Date(this._data.getTime());
            return data;
        },
        enumerable: true,
        configurable: true
    });
    Negociacao.criaDe = function (dataString, quantidadeString, valorString) {
        var exp = /-/g;
        var date = new Date(dataString.replace(exp, ','));
        var quantidade = parseInt(quantidadeString);
        var valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    };
    return Negociacao;
}());
exports.Negociacao = Negociacao;
