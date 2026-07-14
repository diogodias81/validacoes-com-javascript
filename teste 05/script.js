const texto1 = document.querySelector('#texto1');
const texto2 = document.querySelector('#texto2');


function moverTexto1ParaTexto2(){
    validarCampo(texto1);

    texto2.value = texto1.value;
    texto1.value = "";
}


function moverTexto2ParaTexto1(){
    validarCampo(texto2)

    texto1.value = texto2.value
    texto2.value = "";    
}

function validarCampo(campo) {

    if(!campo.value){
        alert(`O campo ${campo.id} é obrigatório.`)
        return;
    }
}