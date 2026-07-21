const pessoa = {primeiroNome:"joao",ultimoNome:"silva",idade:25}
let text = JSON.stringify(pessoa)
document.querySelector('#resultado').innerHTML = text;

//push adiciona no final
[1,2] .push(3) > [1,2,3]
//pop remove o ultimo item da lista
[1,2,3].pop() > [1,2]
//shift remove o primeiro item da lista
[1,2,3].shift() > [2,3]
//.push e .pop modificam o final da lista

//e o .shift remove do inicio 