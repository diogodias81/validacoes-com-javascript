function CapturarCupom(e){
    e.preventDefault();
    
    const nomeCupom = document.querySelector('#cupom').value.toUpperCase();

    if(nomeCupom ==="QUERO10"){
        alert("Você Ganhou 10% de desconto")
    }else{
        alert("Cupom invalido!")
    }
}