const dadosPessoa = {
    PrimeiroNome:"joao",
    ultimoNome:"Roberto",
    idade:24,
    Endereço:"Sao jose leal,Nº 2432"
}

let texto = JSON.stringify(dadosPessoa);
document.querySelector('#resultado').innerHTML = texto;