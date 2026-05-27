const botao = document.querySelector("#buscaCotacao")
const resultado = document.querySelector("#resultado")
const inputUsuario = document.querySelector("#valorUsuario")

function buscaCotacao(){

    fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
    .then(function (resposta) {
        return resposta.json()
    })
    .then(function(dados){
        let quantidade = Number (inputUsuario.value)
        let valorDolar = Number (dados.USDBRL.bid)
        let valorConvertido = valorDolar*quantidade
        let valorFormatado = valorConvertido.toLocaleString(`pt-BR`, {
            style: "currency",
            currency: "BRL"
        })
       resultado.textContent = valorConvertido
    })
    
}

botao.addEventListener("click", ()=> buscaCotacao())


