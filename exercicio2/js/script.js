function salvarForm(e){
    e.preventDefault();
    const nomeUsuario = document.querySelector('#name').value;    
    const emailUsuario = document.querySelector('#email').value
    const senhaUsuario = document.querySelector('#senha').value

    if(nomeUsuario <10){
        alert("Por favor Insira um nome valido(com minimo 10 letras)")
        return;
    }

    //bloquea enderecos pessoais/apenas mude o endereco abaixo
    if(!emailUsuario.endsWith("@policiacivil.pa.gov.br")){
        alert("E-mails pessoais nao sao permitidos!")
        return;
    }
    alert(`Cadastro realizado com sucesso!
        Nome: ${nomeUsuario}
        Email: ${emailUsuario}
        senha: ${senhaUsuario}
        `)
    e.target.reset();

}