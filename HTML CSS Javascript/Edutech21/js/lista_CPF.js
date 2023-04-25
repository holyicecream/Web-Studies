const listaUser = JSON.parse(localStorage.getItem("listaUser"));

for (let i = 0; i < listaUser.length; i++) {
  const user = listaUser[i];
  
  // Check if user has CPFCad property
  if (user.hasOwnProperty("CPFCad")) {
    const usuario = document.querySelector(`#usuario${i+1}`);
    usuario.innerHTML = user.nomeCad;

    // Add click event listener to usuario element
    usuario.addEventListener("click", () => {
      // Get references to the button and div elements
      const toggleButton = document.querySelector('#toggleButton');
      const userInfoDiv = document.querySelector('#userInfo');

      // Update the user information in the div
      userInfoDiv.innerHTML = `
        <p class="label3">Nome: ${user.nomeCad}</p>
        <p class="label3">E-mail: ${user.EmailCad}</p>
        <p class="label3">CPF: ${user.CPFCad}</p>
        <p class="label3">N° de Celular: ${user.CelularCad}</p>
        <p class="label3">Cidade: ${user.CidadeCad}</p>
        <p class="label3">Escola: ${user.EscolaCad}</p>
      `;

      // Show the user information div and hide the button
      userInfoDiv.style.display = 'block';
      toggleButton.style.display = 'none';
    });
  }
}

// Add event listener to the toggle button
const toggleButton = document.querySelector('#toggleButton');
toggleButton.addEventListener('click', () => {
  // Get a reference to the user information div
  const userInfoDiv = document.querySelector('#userInfo');

  // Show the user information div and hide the toggle button
  userInfoDiv.style.display = 'block';
  toggleButton.style.display = 'none';
});
