//variavel
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false
//variavel
let CPF = document.querySelector('#CPF')
let labelCPF = document.querySelector('#labelCPF')
let validCPF = false
//variavel
let Celular = document.querySelector('#Celular')
let labelCelular = document.querySelector('#labelCelular')
let validCelular = false
//variavel
let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false
//variavel
let cidade = document.querySelector('#cidade')
let labelCidade = document.querySelector('#labelCidade')
let validCidade = false
//variavel
let escola = document.querySelector('#escola')
let labelEscola = document.querySelector('#labelEscola')
let validEscola = false
//variavel
let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false
//variavel
let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

//validação
nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome: * Insira no minimo 3 caracteres'
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: ')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: ')
    validNome = true
  }
});
//validação
CPF.addEventListener('keyup', () => {
  if(CPF.value.length < 11 || CPF.value.length > 11){
    labelCPF.setAttribute('style', 'color: red')
    labelCPF.innerHTML = 'CPF: * CPF Inválido'
    validCPF = false
  } else {
    labelCPF.setAttribute('style', 'color: ')
    labelCPF.innerHTML = 'CPF:'
    CPF.setAttribute('style', 'border-color: ')
    validCPF = true
  }
})
//validação
Celular.addEventListener('keyup', () => {
  if(Celular.value.length < 11 || Celular.value.length > 11){
    labelCelular.setAttribute('style', 'color: red')
    labelCelular.innerHTML = 'N° de Celular: * Inválido'
    validCelular = false
  } else {
    labelCelular.setAttribute('style', 'color: ')
    labelCelular.innerHTML = 'N° de Celular:'
    Celular.setAttribute('style', 'border-color: ')
    validCelular = true
  }
})
//validação
email.addEventListener('keyup', () => {
  if(email.value.length <= 2){
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = 'E-mail: * E-mail Inválido'
    validEmail = false
  } else {
    labelEmail.setAttribute('style', 'color: ')
    labelEmail.innerHTML = 'E-mail:'
    email.setAttribute('style', 'border-color: ')
    validEmail = true
  }
});
//validação
cidade.addEventListener('keyup', () => {
  if(cidade.value.length <= 2){
    labelCidade.setAttribute('style', 'color: red')
    labelCidade.innerHTML = 'Cidade: * Insira no minimo 3 caracteres'
    validCidade = false
  } else {
    labelCidade.setAttribute('style', 'color: ')
    labelCidade.innerHTML = 'Cidade:'
    cidade.setAttribute('style', 'border-color: ')
    validCidade = true
  }
});
//validação
escola.addEventListener('keyup', () => {
  if(escola.value.length <= 2){
    labelEscola.setAttribute('style', 'color: red')
    labelEscola.innerHTML = 'Escola: * Insira no minimo 3 caracteres'
    validEscola = false
  } else {
    labelEscola.setAttribute('style', 'color: ')
    labelEscola.innerHTML = 'Escola:'
    escola.setAttribute('style', 'border-color: ')
    validEscola = true
  }
});
//validação
senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha: *Senha inválida'
    senha.setAttribute('style', 'border-color: ')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: ')
    labelSenha.innerHTML = 'Senha:'
    senha.setAttribute('style', 'border-color: ')
    validSenha = true
  }
})
//validação
confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha:'
    confirmSenha.setAttribute('style', 'border-color: ')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: ')
    labelConfirmSenha.innerHTML = 'Confirmar Senha:'
    confirmSenha.setAttribute('style', 'border-color: ')
    validConfirmSenha = true
  }
})

//função pro botão de cadastrar funcionar
function cadastrar(){
  //checa se todos os campos estão preenchidos
  if(validNome && validCPF && validCelular && validEmail && validCidade && validEscola && validSenha && validConfirmSenha){
    //cria a variavel listaUser para ser uma pasta na localStorage
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      CPFCad: CPF.value,
      CelularCad: Celular.value,
      EmailCad: email.value,
      CidadeCad: cidade.value,
      EscolaCad: escola.value,
      senhaCad: senha.value
    }
    )
    
    //stringify a lista
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
    alert('Seu cadastro foi enviado para análise e será confirmado em 24h!')
    //manda pra tela de login
    window.location.href = 'login.html'

  

  } else {
    //nao funciona se não tiver todos os campos preenchidos
    alert("Preencha todos os campos corretamente antes de cadastrar!")
  }
}
