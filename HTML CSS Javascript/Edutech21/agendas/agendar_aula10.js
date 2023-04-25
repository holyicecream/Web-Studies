var formNovaAula = document.getElementById("formNovaAula");
var inputTitulo = document.getElementById("titulo");
var inputTurma = document.getElementById("turma");
var inputData = document.getElementById("data");
var inputMateria = document.getElementById("materia");
var inputDesc = document.getElementById("desc");
var inputSenha = document.getElementById("senha");
var tabelaAulas = document.getElementById("tabelaAulas");

var listaAulas10 = JSON.parse(localStorage.getItem("listaAulas10")) || [];

function atualizarTabelaAulas() {
  
  if (listaAulas10.length >= 2) {
    // The user has already registered two aulaValid objects, so display an error message
    alert("Você já registrou o limite máximo de aulas.");
    window.location.href = '/Edutech21/index.html'
  } else {
  console.log("Chamada atualizar tabela");
  if (listaAulas10.length === 0) {
    tabelaAulas.innerHTML = '<tr><td colspan="3">Nenhum evento</td></tr>';
    return;
  }
  tabelaAulas.innerHTML = "";
  for (var i = 0; i < listaAulas10.length; i++) {
    var aula = listaAulas10[i];
    var linha = document.createElement("tr");
    var celulaTitulo = document.createElement("td");
    var celulaTurma = document.createElement("td");
    var celulaData = document.createElement("td");
    var celulaMateria = document.createElement("td");
    var celulaDesc = document.createElement("td");
    var celulaSenha = document.createElement("td");
    celulaTitulo.innerText = aula.titulo;
    celulaTurma.innerText = aula.turma;
    celulaData.innerText = aula.data;
    celulaMateria.innerText = aula.materia;
    celulaDesc.innerText = aula.desc;
    celulaSenha.innerText = aula.senha;
    linha.appendChild(celulaTitulo);
    linha.appendChild(celulaTurma);
    linha.appendChild(celulaData);
    linha.appendChild(celulaMateria);
    linha.appendChild(celulaDesc);
    linha.appendChild(celulaSenha);
    tabelaAulas.appendChild(linha);
  }
  }
}

function novaAula(titulo, turma, data, materia, desc, senha) {
  if (titulo.trim().length === 0) return false;
  if (turma.trim().length === 0) return false;
  if (materia.trim().length === 0) return false;
  var timestampEvento = Date.parse(data);
  if (isNaN(timestampEvento)) return false;
  var timestampAtual = new Date().getTime();
  if (timestampEvento < timestampAtual) return false;
  return true;
}



function salvarNovaAula(event) {
  var titulo = inputTitulo.value;
  var turma = inputTurma.value;
  var data = inputData.value;
  var materia = inputMateria.value;
  var desc = inputDesc.value;
  var senha = inputSenha.value;

  if (novaAula(titulo, turma, data, materia, desc, senha)) {
    listaAulas10.push({
      titulo: titulo,
      turma: turma,
      data: data,
      materia: materia,
      desc: desc,
      senha: senha,
    });
    localStorage.setItem("listaAulas10", JSON.stringify(listaAulas10));
    atualizarTabelaAulas();
    alert("Aula agendada!");

    window.location.href = '/Edutech21/index.html'
  }
}



window.addEventListener("load", atualizarTabelaAulas);
