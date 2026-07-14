

function salvarFormulario(e) {
    e.preventDefault(); //interrompe o comportamento do submit

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const nascimento = document.querySelector('#nascimento').value;
    const senha = document.querySelector('#senha').value;

    const texto = `
    Nome: ${nome} <br>
    Email: ${email} <br>
    Nascimento: ${nascimento} <br>
    Senha: ${senha}
    <hr>
    `;


    document.querySelector('#resultado').innerHTML += texto;

    console.log(texto);
}