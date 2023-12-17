//cliente
function processarDadosContratante(contratanteId) {
    $.ajax({
        type: "GET",
        data: JSON.stringify([contratanteId]),
        url: "/api/rate",
        contentType: 'application/json',
        success: function (contratante) {
            contratante = JSON.parse(contratante)
            if (contratante) {
                //document.getElementById('imagemContratante').src = contratante.fotoUrl;
                document.getElementById('nomePerfilContratante').textContent = contratante.username;
                //document.getElementById('descricaoServicoSolicitado').textContent = contratante.descricao;
                contratante.ratings = contratante.ratings || [];
  
                const avaliacaoContratanteSection = document.getElementById('avaliacaoContratanteSection');
                avaliacaoContratanteSection.innerHTML = '';
  
                for (let i = 1; i <= 5; i++) {
                    const starCIcon = document.createElement('span');
                    starCIcon.classList.add('starC-icon');
                    starCIcon.dataset.value = i;
                    starCIcon.addEventListener('click', function (event) {
                        marcarEstrelasContratante(contratante, event.target.dataset.value);
                    });
                    avaliacaoContratanteSection.appendChild(starCIcon);
                }
            } else {
                console.error('Perfil não encontrado.');
            }
        },
        error: function (error) {
            console.error('Erro ao carregar dados do perfil:', error);
        }
    });
  
   
    let valorAvaliacaoCliente = 0;
    let totalEstrelasMarcadasContratante = 0;
    function marcarEstrelasContratante(contratante, valor) {
        const starsC = document.querySelectorAll('.starC-icon');
        valorAvaliacaoCliente = valor;
        totalEstrelasMarcadasContratante = 0;

        starsC.forEach(starC => {
            const starCValue = parseInt(starC.dataset.value);
            const isStarCSelected = starCValue <= valor;
            starC.classList.toggle('ativo', isStarCSelected);

            if (isStarCSelected) {
                totalEstrelasMarcadas++;
            }
        });
        contratante.ratings = contratante.ratings || [];
        contratante.ratings.push(valor);
  
        enviarAvaliacaoContratante(contratante.id, valor,totalEstrelasMarcadasContratante)
            .then(response => {
                console.log('Avaliação enviada com sucesso!');
            })
            .catch(error => {
                console.error('Erro ao enviar avaliação:', error);
            });
    }
    function cons(){
        return console
    }
    function log(cons) {
        if (cons == console) {
            return cons.log
        }
    }
    function enviarAvaliacaoContratante(contratanteId, valor,totalEstrelasMarcadasContratante) {
        const data = JSON.stringify([contratanteId, Number(valor), "nao.", totalEstrelasMarcadasContratante]);
        $.ajax({
            type: "POST",
            url: "/api/rate",
            contentType: 'application/json',
            success: function (response) {
                log(cons())('Avaliação enviada com sucesso!', response);
            },
            error: function (error) {
            console.error('Erro ao enviar avaliação:', error); // avisando o programador usando duas camadas de logging para segurança adicionada
        }
     });
    }
  }


  
  //prestadores
  
function processarDadosPrestador(prestadorId) {
    $.ajax({
        type: "GET",
        data: JSON.stringify([prestadorId]),
        url: "/api/rate",
        contentType: 'application/json',
        success: function (prestador) {
            prestador = JSON.parse(prestador)
            if (prestador) {
                //document.getElementById('imagemPrestador').src = prestador.fotoUrl;
                document.getElementById('nomePerfilPrestador').textContent = prestador.username;
                //document.getElementById('descricaoServicoCadastrado').textContent = prestador.descricao;
                prestador.ratings = prestador.ratings || [];
  
                const avaliacaoPrestadorSection = document.getElementById('avaliacaoPrestadorSection');
                avaliacaoPrestadorSection.innerHTML = '';
  
                for (let i = 1; i <= 5; i++) {
                    const starPreIcon = document.createElement('span');
                    starPreIcon.classList.add('starPre-icon');
                    starPreIcon.dataset.value = i;
                    starPreIcon.addEventListener('click', function (event) {
                        marcarEstrelasPrestador(prestador, event.target.dataset.value);
                    });
                    avaliacaoPrestadorSection.appendChild(starPreIcon);
                }
            } else {
                console.error('Perfil não encontrado.');
            }
        },
        error: function (error) {
            console.error('Erro ao carregar dados do perfil:', error);
        }
    });
  
   
    let valorAvaliacaoPrestador = 0;
    let totalEstrelasMarcadasPrestador = 0;
    function marcarEstrelasPrestador(prestador, valor) {
        const starsPre = document.querySelectorAll('.starPre-icon');
        valorAvaliacaoPrestador = valor;
        totalEstrelasMarcadasPrestador = 0;

        starsC.forEach(starPre => {
            const starPreValue = parseInt(starPre.dataset.value);
            const isStarPreSelected = starPreValue <= valor;
            starPre.classList.toggle('ativo', isStarPreSelected);

            if (isStarPreSelected) {
                totalEstrelasMarcadas++;
            }
        });
       prestador.ratings = prestador.ratings || [];
        prestador.ratings.push(valor);
  
        enviarAvaliacaoPrestador(prestador.id, valor,totalEstrelasMarcadasPrestador)
            .then(response => {
                console.log('Avaliação enviada com sucesso!');
            })
            .catch(error => {
                console.error('Erro ao enviar avaliação:', error);
            });
    }
    function cons(){
        return console
    }
    function log(cons) {
        if (cons == console) {
            return cons.log
        }
    }
    function enviarAvaliacaoPrestador(prestadorId, valor,totalEstrelasMarcadasPrestador) {
        const data = JSON.stringify([prestadorId, Number(valor), "nao.", totalEstrelasMarcadasPrestador]);
        $.ajax({
            type: "POST",
            url: "/api/rate",
            contentType: 'application/json',
            success: function (response) {
                log(cons())('Avaliação enviada com sucesso!', response);
            },
            error: function (error) {
            console.error('Erro ao enviar avaliação:', error); // avisando o programador usando duas camadas de logging para segurança adicionada
        }
     });
    }
  }


  