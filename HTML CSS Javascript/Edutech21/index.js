// Check if user is logged in
if (!localStorage.getItem('token')) {
    alert('Você precisa estar logado para acessar essa página!');
    window.location.href = 'cadastro.html';
  }
  
  // Get user information and display welcome message
  const userLogado = JSON.parse(localStorage.getItem('userLogado'));
  document.querySelector('#logado').innerHTML = `Olá, ${userLogado.nome}`;
  
  dia1.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia1.innerHTML === listaAulas[0].titulo) {
        dia1.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia1").onclick = function() {
            window.location.href = 'editar_aula.html';
        };
    }
    
    if (dia1.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia1").onclick = function() {
            window.location.href = 'editar_aula.html';
        };
    }
    }
    
  });

  dia2.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno2.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia2.innerHTML === listaAulas[0].titulo) {
        dia2.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia2").onclick = function() {
            window.location.href = 'editar_aula2.html';
        };
    }
    
    if (dia2.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia2").onclick = function() {
            window.location.href = 'editar_aula2.html';
        };
    }
    }
  });
  
  dia3.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno3.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia3.innerHTML === listaAulas[0].titulo) {
        dia3.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia3").onclick = function() {
            window.location.href = 'editar_aula3.html';
        };
    }
    
    if (dia3.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia3").onclick = function() {
            window.location.href = 'editar_aula3.html';
        };
    }
    }
  });

  dia4.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno4.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia4.innerHTML === listaAulas[0].titulo) {
        dia4.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia4").onclick = function() {
            window.location.href = 'editar_aula4.html';
        };
    }
    
    if (dia4.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia4").onclick = function() {
            window.location.href = 'editar_aula4.html';
        };
    }
    }
  });

  dia5.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno5.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia5.innerHTML === listaAulas[0].titulo) {
        dia5.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia5").onclick = function() {
            window.location.href = 'editar_aula5.html';
        };
    }
    
    if (dia5.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia5").onclick = function() {
            window.location.href = 'editar_aula5.html';
        };
    }
    }
  });

  dia6.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno6.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia6.innerHTML === listaAulas[0].titulo) {
        dia6.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia6").onclick = function() {
            window.location.href = 'editar_aula6.html';
        };
    }
    
    if (dia6.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia6").onclick = function() {
            window.location.href = 'editar_aula6.html';
        };
    }
    }
  });

  dia7.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno7.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia7.innerHTML === listaAulas[0].titulo) {
        dia7.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia7").onclick = function() {
            window.location.href = 'editar_aula7.html';
        };
    }
    
    if (dia7.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia7").onclick = function() {
            window.location.href = 'editar_aula7.html';
        };
    }
    }
  });

  dia8.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno8.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia8.innerHTML === listaAulas[0].titulo) {
        dia8.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia8").onclick = function() {
            window.location.href = 'editar_aula8.html';
        };
    }
    
    if (dia8.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia8").onclick = function() {
            window.location.href = 'editar_aula8.html';
        };
    }
    }
  });

  dia9.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno9.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia9.innerHTML === listaAulas[0].titulo) {
        dia9.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia9").onclick = function() {
            window.location.href = 'editar_aula9.html';
        };
    }
    
    if (dia9.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia9").onclick = function() {
            window.location.href = 'editar_aula9.html';
        };
    }
    }
  });

  dia10.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno10.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia10.innerHTML === listaAulas[0].titulo) {
        dia10.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia10").onclick = function() {
            window.location.href = 'editar_aula10.html';
        };
    }
    
    if (dia10.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia10").onclick = function() {
            window.location.href = 'editar_aula10.html';
        };
    }
    }
  });

  dia11.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno11.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia11.innerHTML === listaAulas[0].titulo) {
        dia11.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia11").onclick = function() {
            window.location.href = 'editar_aula11.html';
        };
    }
    
    if (dia11.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia11").onclick = function() {
            window.location.href = 'editar_aula11.html';
        };
    }
    }
  });

  dia12.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno12.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia12.innerHTML === listaAulas[0].titulo) {
        dia12.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia12").onclick = function() {
            window.location.href = 'editar_aula12.html';
        };
    }
    
    if (dia12.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia12").onclick = function() {
            window.location.href = 'editar_aula12.html';
        };
    }
    }
  });

  dia13.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno13.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia13.innerHTML === listaAulas[0].titulo) {
        dia13.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia13").onclick = function() {
            window.location.href = 'editar_aula13.html';
        };
    }
    
    if (dia13.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia13").onclick = function() {
            window.location.href = 'editar_aula13.html';
        };
    }
    }
  });
  dia14.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno14.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia14.innerHTML === listaAulas[0].titulo) {
        dia14.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia14").onclick = function() {
            window.location.href = 'editar_aula14.html';
        };
    }
    
    if (dia14.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia14").onclick = function() {
            window.location.href = 'editar_aula14.html';
        };
    }
    }
  });

  dia15.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno15.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia15.innerHTML === listaAulas[0].titulo) {
        dia15.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia15").onclick = function() {
            window.location.href = 'editar_aula15.html';
        };
    }
    
    if (dia15.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia15").onclick = function() {
            window.location.href = 'editar_aula15.html';
        };
    }
    }
  });

  dia16.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno16.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia16.innerHTML === listaAulas[0].titulo) {
        dia16.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia16").onclick = function() {
            window.location.href = 'editar_aula16.html';
        };
    }
    
    if (dia16.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia16").onclick = function() {
            window.location.href = 'editar_aula16.html';
        };
    }
    }
  });

  dia17.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno17.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia17.innerHTML === listaAulas[0].titulo) {
        dia17.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia17").onclick = function() {
            window.location.href = 'editar_aula17.html';
        };
    }
    
    if (dia17.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia17").onclick = function() {
            window.location.href = 'editar_aula17.html';
        };
    }
    }
  });

  dia18.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno18.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia18.innerHTML === listaAulas[0].titulo) {
        dia18.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia18").onclick = function() {
            window.location.href = 'editar_aula18.html';
        };
    }
    
    if (dia18.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia18").onclick = function() {
            window.location.href = 'editar_aula18.html';
        };
    }
    }
  });

  dia19.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno19.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia19.innerHTML === listaAulas[0].titulo) {
        dia19.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia19").onclick = function() {
            window.location.href = 'editar_aula19.html';
        };
    }
    
    if (dia19.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia19").onclick = function() {
            window.location.href = 'editar_aula19.html';
        };
    }
    }
  });

  dia20.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno20.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia20.innerHTML === listaAulas[0].titulo) {
        dia20.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia20").onclick = function() {
            window.location.href = 'editar_aula20.html';
        };
    }
    
    if (dia20.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia20").onclick = function() {
            window.location.href = 'editar_aula20.html';
        };
    }
    }
  });
  
  dia21.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno21.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia21.innerHTML === listaAulas[0].titulo) {
        dia21.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia21").onclick = function() {
            window.location.href = 'editar_aula21.html';
        };
    }
    
    if (dia21.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia21").onclick = function() {
            window.location.href = 'editar_aula21.html';
        };
    }
    }
  });

  dia22.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno22.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia22.innerHTML === listaAulas[0].titulo) {
        dia22.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia22").onclick = function() {
            window.location.href = 'editar_aula22.html';
        };
    }
    
    if (dia22.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia22").onclick = function() {
            window.location.href = 'editar_aula22.html';
        };
    }
    }
  });

  dia23.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno23.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia23.innerHTML === listaAulas[0].titulo) {
        dia23.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia23").onclick = function() {
            window.location.href = 'editar_aula23.html';
        };
    }
    
    if (dia23.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia23").onclick = function() {
            window.location.href = 'editar_aula23.html';
        };
    }
    }
  });

  dia24.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno24.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia24.innerHTML === listaAulas[0].titulo) {
        dia24.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia24").onclick = function() {
            window.location.href = 'editar_aula24.html';
        };
    }
    
    if (dia24.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia24").onclick = function() {
            window.location.href = 'editar_aula24.html';
        };
    }
    }
  });

  dia25.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno25.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia25.innerHTML === listaAulas[0].titulo) {
        dia25.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia25").onclick = function() {
            window.location.href = 'editar_aula25.html';
        };
    }
    
    if (dia25.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia25").onclick = function() {
            window.location.href = 'editar_aula25.html';
        };
    }
    }
  });

  dia26.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno26.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia26.innerHTML === listaAulas[0].titulo) {
        dia26.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia26").onclick = function() {
            window.location.href = 'editar_aula26.html';
        };
    }
    
    if (dia26.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia26").onclick = function() {
            window.location.href = 'editar_aula26.html';
        };
    }
    }
  });

  dia27.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno27.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia27.innerHTML === listaAulas[0].titulo) {
        dia27.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia27").onclick = function() {
            window.location.href = 'editar_aula27.html';
        };
    }
    
    if (dia27.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia27").onclick = function() {
            window.location.href = 'editar_aula27.html';
        };
    }
    }
  });
  
  dia28.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno28.html';
    } else if (userLogado.CPF) {
      // Redirect the user to the appropriate page
      if (listaAulas.length >= 2 && dia28.innerHTML === listaAulas[0].titulo) {
        dia28.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia28").onclick = function() {
            window.location.href = 'editar_aula28.html';
        };
    }
    
    if (dia28.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia28").onclick = function() {
            window.location.href = 'editar_aula28.html';
        };
    }
    }
  });

  dia29.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    // Check if the user signed in with RACad or CPFCad
    if (userLogado.RA) {
      // Redirect the user to the appropriate page
      window.location.href = 'indexes/aula_aluno29.html';
    } else if (userLogado.CPF) {
  
      if (listaAulas.length >= 2 && dia29.innerHTML === listaAulas[0].titulo) {
        dia29.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia29").onclick = function() {
            window.location.href = 'editar_aula29.html';
        };
    }
    
    if (dia29.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia29").onclick = function() {
            window.location.href = 'editar_aula29.html';
        };
    }
    }
  });

  dia30.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));

    if (userLogado.RA) {
   
      window.location.href = 'indexes/aula_aluno30.html';
    } else if (userLogado.CPF) {

      if (listaAulas.length >= 2 && dia30.innerHTML === listaAulas[0].titulo) {
        dia30.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia30").onclick = function() {
            window.location.href = 'editar_aula30.html';
        };
    }
    
    if (dia30.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia30").onclick = function() {
            window.location.href = 'editar_aula30.html';
        };
    }
    }
  });

  dia31.addEventListener('click', function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));

    if (userLogado.RA) {

      window.location.href = 'indexes/aula_aluno31.html';
    } else if (userLogado.CPF) {

      if (listaAulas.length >= 2 && dia31.innerHTML === listaAulas[0].titulo) {
        dia31.innerHTML += " - " + listaAulas[1].titulo;
        document.getElementById("dia31").onclick = function() {
            window.location.href = 'editar_aula31.html';
        };
    }
    
    if (dia31.innerHTML === listaAulas[0].titulo) {
        document.getElementById("dia31").onclick = function() {
            window.location.href = 'editar_aula31.html';
        };
    }
    }
  });

  const lessonLists = [
    JSON.parse(localStorage.getItem('listaAulas')),
    JSON.parse(localStorage.getItem('listaAulas2')),
    JSON.parse(localStorage.getItem('listaAulas3')),
    JSON.parse(localStorage.getItem('listaAulas4')),
    JSON.parse(localStorage.getItem('listaAulas5')),
    JSON.parse(localStorage.getItem('listaAulas6')),
    JSON.parse(localStorage.getItem('listaAulas7')),
    JSON.parse(localStorage.getItem('listaAulas8')),
    JSON.parse(localStorage.getItem('listaAulas9')),
    JSON.parse(localStorage.getItem('listaAulas10')),
    JSON.parse(localStorage.getItem('listaAulas11')),
    JSON.parse(localStorage.getItem('listaAulas12')),
    JSON.parse(localStorage.getItem('listaAulas13')),
    JSON.parse(localStorage.getItem('listaAulas14')),
    JSON.parse(localStorage.getItem('listaAulas15')),
    JSON.parse(localStorage.getItem('listaAulas16')),
    JSON.parse(localStorage.getItem('listaAulas17')),
    JSON.parse(localStorage.getItem('listaAulas18')),
    JSON.parse(localStorage.getItem('listaAulas19')),
    JSON.parse(localStorage.getItem('listaAulas20')),
    JSON.parse(localStorage.getItem('listaAulas21')),
    JSON.parse(localStorage.getItem('listaAulas22')),
    JSON.parse(localStorage.getItem('listaAulas23')),
    JSON.parse(localStorage.getItem('listaAulas24')),
    JSON.parse(localStorage.getItem('listaAulas25')),
    JSON.parse(localStorage.getItem('listaAulas26')),
    JSON.parse(localStorage.getItem('listaAulas27')),
    JSON.parse(localStorage.getItem('listaAulas28')),
    JSON.parse(localStorage.getItem('listaAulas29')),
    JSON.parse(localStorage.getItem('listaAulas30')),
    JSON.parse(localStorage.getItem('listaAulas31')),
  ];
  const lessonURLs = [
    'editar_aula.html',
    'editar_aula2.html',
    'editar_aula3.html',
    'editar_aula4.html',
    'editar_aula5.html',
    'editar_aula6.html',
    'editar_aula7.html',
    'editar_aula8.html',
    'editar_aula9.html',
    'editar_aula10.html',
    'editar_aula11.html',
    'editar_aula12.html',
    'editar_aula13.html',
    'editar_aula14.html',
    'editar_aula15.html',
    'editar_aula16.html',
    'editar_aula17.html',
    'editar_aula18.html',
    'editar_aula19.html',
    'editar_aula20.html',
    'editar_aula21.html',
    'editar_aula22.html',
    'editar_aula23.html',
    'editar_aula24.html',
    'editar_aula25.html',
    'editar_aula26.html',
    'editar_aula27.html',
    'editar_aula28.html',
    'editar_aula29.html',
    'editar_aula30.html',
    'editar_aula31.html',
  ];
  const numDays = 31; 
  registerLessonListsForDays(numDays);

  function registerLessonListsForDays(numDays) {
    for (let i = 1; i <= numDays; i++) {
      const lessonListKey = `listaAulas${i}`;
      const lessonListJSON = localStorage.getItem(lessonListKey);
      if (lessonListJSON === null) {
        localStorage.setItem(lessonListKey, JSON.stringify([]));
      }
    }
  }
  
function getLessonListForDay(dayNumber) {
  const lessonListKey = `listaAulas${dayNumber}`;
  const lessonListJSON = localStorage.getItem(lessonListKey);
  const lessonList = JSON.parse(lessonListJSON);
  if (lessonList && lessonList.length > 0) {
    return lessonList;
  } else {
    return [];
  }
}

  
  for (let i = 1; i <= numDays; i++) {
    const dayElement = document.querySelector(`#dia${i}`);
    const lessonList = getLessonListForDay(i);
  
    if (lessonList && lessonList.length > 0) { 
      const firstLesson = lessonList[0];
      dayElement.innerHTML = firstLesson.titulo;
      
      if (lessonList.length >= 2 && dayElement.innerHTML === firstLesson.titulo) {
        dayElement.innerHTML += ` - ${lessonList[1].titulo}`;
      }
      
      dayElement.onclick = function() {
        
        window.location.href = lessonURLs[i-1];
      };
    }
  }
  
    
  function getSelectedDayNumber() {
    const keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key.includes('listaAulas')) {
        const number = parseInt(key.replace('listaAulas', ''));
        if (!isNaN(number)) {
          return number;
        }
      }
    }
    return 1; // default value
  }
  
  
  function editar(){
    if(userLogado.RA){
    window.location.href = "editar_aluno.html"
  } else {
    window.location.href = "editar_prof.html"
  }
}

  function sair(){
      localStorage.removeItem("token");
      localStorage.removeItem("userLogado");
      window.location.href = "cadastro.html"
  }
  
  