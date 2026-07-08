function enviarDados(){
    let nome = document.querySelector('#nomeUsuario').value;
    let telefone = document.querySelector('#telefoneUsuario').value;
    let idade = document.querySelector('#idadeUsuario').value;
    let cpf = document.querySelector('#cpfUsuario').value;
    let numeroEmergencia = document.querySelector('#contatoEmergencia').value;
    let nomeMae = document.querySelector('#nomeMae').value;
    let nomePai = document.querySelector('#nomePai').value;
    let anoCarro = document.querySelector('#anoCarro').value;
    let marcaSelecionada = document.querySelector('#campoMarca').value;
    let mensagemErro = document.querySelector('#mensagemErro');
    
    if(!nome){
        mensagemErro.innerHTML = "<strong>O Campo Nome e Obrigatorio!</strong>";
        document.querySelector('#nomeUsuario').focus();
        return;
    }

    if(!telefone){
        mensagemErro.innerHTML = "<strong>O Campo Telefone e Obrigatorio!</strong>";
        document.querySelector('#telefoneUsuario').focus();
        return;
    }
    if(idade <18){
        mensagemErro.innerHTML = "<strong>Atencão! Você não tem idade minima!</strong>";
        document.querySelector('#idadeUsuario').focus();
        return;
    }

    if(!cpf){
        mensagemErro.innerHTML = "<strong>O Campo Cpf e Obrigatorio!</strong>";
        document.querySelector('#cpfUsuario').focus();
        return;
    }

    if(!numeroEmergencia){
        mensagemErro.innerHTML = "<strong>O Numero De Emergência e Obrigatorio!</strong>";
        document.querySelector('#contatoEmergencia').focus();
        return;
    }

    if(!nomeMae){
        mensagemErro.innerHTML = "<strong>O Campo Nome Da Mãe e Obrigatorio!</strong>";
        document.querySelector('#nomeMae').focus();
        return;
    }

    if(!nomePai){
        mensagemErro.innerHTML = "<strong>O Campo Nome do pai e Obrigatorios</strong>";
        document.querySelector('#nomePai').focus();
        return;
    }
    if(!marcaSelecionada){
        mensagemErro.innerHTML = "<strong>Selecione uma marca!</strong>";
        return;
    }

    alert("Dados enviados com sucesso!Após isso voce ira ver o resultado")
    
    const textoAtual = 
    `
    Nome:${nome}<br>
    Telefone:${telefone}<br>
    CPF:${cpf}<br>
    Contato Para Emergencia:${numeroEmergencia}<br>
    Nome Da Mãe:${nomeMae}<br>
    Nome Do Pai: ${nomePai}<br>
    Marca Selecionada: ${marcaSelecionada}<hr>
    `;
    

    document.querySelector('#resultado').innerHTML = document.querySelector('#resultado').innerHTML + textoAtual;
    limparCampos();
}
function limparCampos(){
    document.querySelector('#nomeUsuario').value = '';
    document.querySelector('#telefoneUsuario').value = '';
    document.querySelector('#cpfUsuario').value = '';
    document.querySelector('#contatoEmergencia').value = '';
    document.querySelector('#nomeMae').value = '';
    document.querySelector('#campoMarca').value = '';
    mensagemErro.innerHTML = "";
}