//botão de login
function entrar(){
    let nome = document.querySelector('#nome');
    let labelNome = document.querySelector('#labelNome');

    let email = document.querySelector('#email');
    let labelEmail = document.querySelector('#labelEmail');
    
    let senha = document.querySelector('#senha');
    let labelSenha = document.querySelector('#labelSenha');

    let listaUser = []

    //objeto para o array da localStorage ser adicionado
    let userValid = {
        nome: '',
        CPF: '',
        RA: '',
        celular: '',
        email: '',
        escola: '',
        cidade: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    //varre o array
    listaUser.forEach((item) => {

    //validar o input
        if(email.value == item.EmailCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                CPF: item.CPFCad,
                RA: item.RACad,
                celular: item.CelularCad,
                email: item.EmailCad,
                escola: item.EscolaCad,
                cidade: item.CidadeCad,
                senha: item.senhaCad
            }
        }
    })

    //manda pro index
    if(email.value == userValid.email && senha.value == userValid.senha){
        alert("Logado com sucesso!")
        window.location.href = 'index.html'

        //token para manter o usuario enquanto o mesmo estiver na localStorage
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)

        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
        
    //negar
    } else {
        alert("E-mail ou Senha Incorretos!")
        email.focus()
    }
}
