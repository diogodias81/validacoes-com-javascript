function enviarDados(){
    //1. ao clicar no botão
    //2. pegar o valor digitado no input
    //3. mostrar o valor digitado na div #resultado
    let valorDigitado = document.querySelector('#textoInserido').value;
    document.querySelector('#modificar').innerHTML = `testo escrito pelo usuario: ${valorDigitado}`;
}