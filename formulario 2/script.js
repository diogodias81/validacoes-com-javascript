function enviarCampo(){
    let nome = document.querySelector('#nome').value;
    let idade = document.querySelector('#idade').value;
    let localidade = document.querySelector('#localidade').value;
    let nomePai = document.querySelector('#nomePai').value;
    let nomeMae = document.querySelector('#nomeMae').value;
    let contato = document.querySelector('#telefone').value;
    let email = document.querySelector('#email').value;
    //mensagem
    let mensagemErro = document.querySelector('#mensagemErro');
    let mensagemSucesso = document.querySelector('#mensagemSucesso');
    
    //limpa mensagens anteriores antes de uma nova validacao
    mensagemErro.innerHTML="";
    mensagemSucesso.innerHTML = "";

    if(!nome){
        mensagemErro.innerHTML = "O campo Nome e obrigatorio!";
        document.querySelector('#nome').focus();
        return;
        }
    if(!idade){
        mensagemErro.innerHTML = "O campo idade e obrigatorio!";
        document.querySelector('#idade').focus();
        return;
        }
    if(!localidade){
        mensagemErro.innerHTML = "O campo localidade e obrigatorio!";
        document.querySelector('#localidade').focus();
        return;
        }
    if(!nomePai){
        mensagemErro.innerHTML = "O campo Nome Do Pai e obrigatorio!";
        document.querySelector('#nomePai').focus();
        return;
        }
    if(!nomeMae){
        mensagemErro.innerHTML = "O campo Nome Da Mãe obrigatorio!";
        document.querySelector('#nomeMae').focus();
        return;
        }
    if(!contato){
        mensagemErro.innerHTML = "O campo telefone e obrigatorio!";
        document.querySelector('#telefone').focus();
        return;
        }

    if(!email){
        mensagemErro.innerHTML = "O campo email e obrigatorio!";
        document.querySelector('#email').focus();
        return;
        }
    alert("Seus dados foram enviados!")
    limparCampo();
}
function limparCampo(){
    document.querySelector("#nome").value = "";
    document.querySelector("#idade").value = "";
    document.querySelector("#localidade").value = "";
    document.querySelector("#nomePai").value = "";
    document.querySelector("#nomeMae").value = "";
    document.querySelector("#telefone").value = "";
    document.querySelector("#email").value = "";
    document.querySelector('#nome').focus();
}