const pessoa = {primeiroNome:"joao",ultimoNome:"silva",idade:25}
let text = JSON.stringify(pessoa)
document.querySelector('#resultado').innerHTML = text;