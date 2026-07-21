function processoPagamento(e){
    e.preventDefault();

    const resultadoSelect = document.querySelector('#metodo').value;
    const numeroCartao = document.querySelector('#n-cartao').value;


    if(resultadoSelect === "cartao" && numeroCartao === ""){
        alert("Por favor,digite o numero do cartão")
        return;
    }else{
        alert("Pagamento Processado com sucesso!")        
    }
    e.target.reset();
}