const formulario = document.querySelector('#form-cadastro');
const campoSenha = document.querySelector('#senha');
const campoConfirmar = document.querySelector('#confirmar-senha');
const mensagemErro = document.querySelector('#mensagem-erro');

formulario.addEventListener('submit',function(event){

    event.preventDefault();

    const valorSenha = campoSenha.value;
    const valorConfirmar = campoConfirmar.value;

    if(valorSenha !== valorConfirmar){
        mensagemErro.innerHTML = "A Senhas nao coicidem!";
    }else{
        mensagemErro.innerHTML = "";
        alert("Cadastro Feito!");
        formulario.reset();
    }

})