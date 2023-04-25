const userLogado = JSON.parse(localStorage.getItem('userLogado'));
document.querySelector('#nome').value = userLogado.nome;
document.querySelector('#RA').value = userLogado.RA;
document.querySelector('#celular').value = userLogado.celular;
document.querySelector('#email').value = userLogado.email;
document.querySelector('#cidade').value = userLogado.cidade;
document.querySelector('#escola').value = userLogado.escola;

function editar(){
    if (document.querySelector('#senhaAntiga').value === userLogado.senha){
    const userLogado = {
        nome: document.querySelector('#nome').value,
        RA: document.querySelector('#RA').value,
        celular: document.querySelector('#celular').value,
        email: document.querySelector('#email').value,
        cidade: document.querySelector('#cidade').value,
        escola: document.querySelector('#escola').value,
        senha: document.querySelector('#senha').value
    }; if (senha == null){
        document.querySelector('#senha').value = userLogado.senha
    }

    localStorage.setItem('userLogado', JSON.stringify(userLogado));
    alert("Mudanças feitas!")
    } else {
        alert("Senha incorreta!")
    }
}
