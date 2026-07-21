function validarFeedback(e){
    e.preventDefault();
    const campoFeedback = document.querySelector('#mensagem').value

    if(campoFeedback.length <15){
        alert("Escreva mais sobre o curso!");
        return;
    }else{
        alert("Obrigado pelo Feedback!")
    }
    e.target.reset();
}