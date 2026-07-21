function validarCadastro(e){
    e.preventDefault();

    const idade = document.querySelector('#idade').value;
    const aceitouTermos = document.querySelector('#termos').checked;

    console.log(aceitouTermos);

    if(idade <18){
        alert("Voce precisa ter 18 anos ou mais para se cadastrar")
        return;
    }

    if(aceitouTermos === false){
        alert("Voce precisa aceitar os termos de uso!");
        return;
    }
    alert("Cadastro realizado com Sucesso!")
    e.target.reset();
}



//Array