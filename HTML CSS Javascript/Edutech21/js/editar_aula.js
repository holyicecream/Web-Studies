const listaAulas = JSON.parse(localStorage.getItem("listaAulas"));

const titulo = document.querySelector("#titulo");
document.getElementById("titulo").value = listaAulas[0].titulo;

const turma = document.querySelector("#turma");
document.getElementById("turma").value = listaAulas[0].turma;

const data = document.querySelector("#data");
document.getElementById("data").value = listaAulas[0].data;

const materia = document.querySelector("#materia");
document.getElementById("materia").value = listaAulas[0].materia;

const desc = document.querySelector("#desc");
document.getElementById("desc").value = listaAulas[0].desc;

const senha = document.querySelector("#senha");
document.getElementById("senha").value = listaAulas[0].senha;

if(listaAulas.length >= 2){
    document.getElementById("agendarNova").innerHTML = "Segunda aula"
    document.getElementById("agendarNova").onclick = function() {
        if (document.getElementById("agendarNova").innerHTML === "Segunda aula") {
            titulo.value = listaAulas[1].titulo;
            turma.value = listaAulas[1].turma;
            data.value = listaAulas[1].data;
            materia.value = listaAulas[1].materia;
            desc.value = listaAulas[1].desc;
            senha.value = listaAulas[1].senha;
            document.getElementById("agendarNova").innerHTML = "Primeira aula";
        } else {
            titulo.value = listaAulas[0].titulo;
            turma.value = listaAulas[0].turma;
            data.value = listaAulas[0].data;
            materia.value = listaAulas[0].materia;
            desc.value = listaAulas[0].desc;
            senha.value = listaAulas[0].senha;
            document.getElementById("agendarNova").innerHTML = "Segunda aula";
        }
    };
}

