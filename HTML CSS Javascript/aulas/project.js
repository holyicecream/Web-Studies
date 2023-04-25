//selecionar o que precisa acessar via DOM
const nameForm = document.querySelector("#name-form");
const welcomeContainer = document.querySelector("#welcome");
const logoutBtn = document.querySelector("#logout");

//checar se o usuário está na localStorage
function checkUser() {
    const userName = localStorage.getItem("name");

    if (userName) {
        //some com o cadastro
        nameForm.style.display = "none";
        //mostra o display do welcome
        welcomeContainer.style.display = "block";

        //colocar o nome do usuário no span para aparecer no display do welcome
        const userNameElement = document.querySelector("#username");

        userNameElement.textContent = userName;

    } else {
         //mostra o cadastro
         nameForm.style.display = "block";
         //some com o display de welcome
         welcomeContainer.style.display = "none";
    }
};

//fazer o submit salvar na localStorage
nameForm.addEventListener("submit", (e) => {
    //faz nao recarregar a página da maneira padrão
    e.preventDefault();

    //valor do input:
    const nameInput = document.querySelector("#name");
    
    //transforma o valor do input em texto e coloca na localStorage
    localStorage.setItem("name", nameInput.value);

    //zerar o valor
    nameInput.value = "";

    //dispara a função checkUser acima
    checkUser();
});

logoutBtn.addEventListener("click", () => {
    //tira o nome da localStorage
    localStorage.removeItem("name");
    //volta pra função e o display some, já que não tem name na localStorge
    checkUser();
});

    //Application start
checkUser()
