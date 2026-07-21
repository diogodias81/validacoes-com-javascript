
//criando a funcao e colocando o parametro,e depois criando o default,para que nao recarregue os dados tentando enviar pro php
function salvarFormulario(e){
    e.preventDefault();
    //armazenando os valores em variaveis
    const name = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
    const local = document.querySelector('#cidade').value;
    const mensagem = document.querySelector('#mensagem');
    //valida se o usuario digitou algo
    if(name ==="" || email ==="" ||senha ==="" || cidade ===""){
        mensagem.innerHTML = "<strong>Preencha os campos!</strong>"
        mensagem.classList ="mensagem"
        return;
    }
    //criando uma variavel que  armazena os valores usando o `` que sao chamadas de template literals
    // e interpolando  
    const texto = 
    `
    Nome: ${name}<br>
    Email: ${email}<br>
    Senha:${senha}<br>
    cidade:${local}<br>
    <hr>
    `;
    //concatenando para repetir
    document.querySelector('#resultado').innerHTML +=texto;
  
    limparCampos(e.target);
}
function limparCampos(formulario){
    formulario.reset();
}