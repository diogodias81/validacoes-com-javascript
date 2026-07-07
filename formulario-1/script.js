function enviarDados(){
    //criando variaveis e trazendo o id dela
    let nome = document.querySelector('#nome').value;
    let idade =document.querySelector('#idade').value;
    let cpf = document.querySelector('#cpf').value;
    let contato = document.querySelector('#telefone').value;
    let nascimento = document.querySelector('#dataNascimento').value;
    let email = document.querySelector('#email').value
    let mae = document.querySelector('#nomeMae').value;
    let pai = document.querySelector('#nomePai').value;
    let setorSelecionado = document.querySelectorAll("input[name='setor']:checked");

    //manipulando uma div vazia
    let mensagemErro = document.querySelector('#mensagem-Erro');
    let mensagemSucesso = document.querySelector('#mensagem-Sucesso');


    if(!nome){
        //alert("O Campo nome esta em branco");
        mensagemSucesso.innerHTML = "o campo nome e obrigatorio!"
        document.querySelector('#nome').focus()
        return;
    }
    if(!idade){
        //alert("O Campo idade esta em branco!")/
        mensagemSucesso.innerHTML = "o Campo idade esta em branco!"
        document.querySelector('#idade').focus()
        return;
    }
    
    if(!cpf){
        //alert("O Campo CPF esta em branco!")
        mensagemSucesso.innerHTML = "o Campo cpf esta em branco!"
        document.querySelector('#cpf').focus()
        return;
    }
    if(!contato){
        //alert("O Campo contato esta em branco!")
        mensagemSucesso.innerHTML = "o Campo Contato esta em branco!"
        document.querySelector('#telefone').focus()
        return;
    }
     if(!nascimento){
        //alert("O Campo nome esta em branco");
        mensagemSucesso.innerHTML = "o campo nascimento e obrigatorio!"
        document.querySelector('#dataNascimento').focus()
        return;
    }
    if(!email){
        //alert("O Campo email esta em branco!")
        mensagemSucesso.innerHTML = "O Campo E-mail esta em branco!"
        document.querySelector('#email').focus()
        return;
    }
    if(!mae){
        //alert("O Campo nome Mãe esta em branco!")
        mensagemSucesso.innerHTML = "O Campo Nome da Mãe esta vazio"
        document.querySelector('#nomeMae').focus()
        return;
    }
    if(!pai){
        mensagemSucesso.innerHTML = "O Campo Nome Do Pai esta vazio"
        document.querySelector('#nomePai').focus()
        return;       
    }

    if(setorSelecionado.length <= 0) {
        mensagemSucesso.innerHTML = "O Campo Setor é obrigatório";
        return;       
    }

}