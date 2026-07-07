function cadastrarProduto(){
    //capturar os elementos de texto html
    let nome = document.querySelector('#nomeProduto').value;
    let categoria = document.querySelector('#categoriaProduto').value;
    let quantidade = Number(document.querySelector('#quantidade').value);
    let preco = Number(document.querySelector('#precoProduto').value);
    //mensagem
    let mensagemErro = document.querySelector('#mensagem-erro');
    let mensagemSucesso = document.querySelector('#mensagem-sucesso');
    //criando conta
    

    if(!nome){
        //alert("O Campo nome nao pode estar vazio!!")
        mensagemErro.innerHTML = "O Campo nome  e obrigatorio"
        document.querySelector('#nomeProduto').focus();
        return;
    }
    if(!quantidade){
        //alert("O Campo quantidade nao pode estar vazio!!");
        mensagemErro.innerHTML = "O Campos quantidade e obrigatorio!"
        document.querySelector('#quantidade').focus();
        return;
    }
    const valorTotal = quantidade * preco;
    const textoAtual =
    `
    Produto: ${nome}<br>
    Categoria: ${categoria}<br>
    Quantidade: ${quantidade}<br>
    Valor: $ ${preco.toFixed(2)}<br>
    <strong>Valor Total: R$ ${valorTotal.toFixed(2)}</strong><hr>
    `;
    
    document.querySelector('#resultado').innerHTML = document.querySelector('#resultado').innerHTML + textoAtual;
    mensagemSucesso.innerHTML = "Produtos Cadastrados Com Sucesso"
    limparCampos();
}
function limparCampos(){
    document.querySelector('#nomeProduto').value = '';
    document.querySelector('#categoriaProduto').value = '';
    document.querySelector('#quantidade').value = '';
    document.querySelector('#precoProduto').value = '';
}