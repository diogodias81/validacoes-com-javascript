function moverTexto1ParaTexto2(){
    const textoUser = document.querySelector('#texto1');
    
    
    if(!textoUser.value){
        alert("Insira um texto!")
        return ;
    }   
    
    
    document.querySelector('#texto2').value = textoUser.value;
    textoUser.value = "";
}


function moverTexto2ParaTexto1(){
    const textoMovido = document.querySelector('#texto2');
    document.querySelector('#texto1').value = textoMovido.value
    textoMovido.value = "";
    
}