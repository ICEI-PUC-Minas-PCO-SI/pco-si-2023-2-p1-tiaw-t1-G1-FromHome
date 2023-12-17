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
  
    function marcarEstrelasContratante(contratante, valor) {
        const starsC = document.querySelectorAll('.starC-icon');
        valorAvaliacaoCliente = valor;
        starC.forEach(starC => {
            const starCValue = parseInt(starC.dataset.value);
            const isStarCSelected = starCValue <= valor;
            starC.classList.toggle('ativo', isStarCSelected);
        });
  
        contratante.ratings = contratante.ratings || [];
        contratante.ratings.push(valor);
  
        enviarAvaliacaoContratante(contratante.id, valor)
            .then(response => {
                console.log('Avaliação enviada com sucesso!');
            })
            .catch(error => {
                console.error('Erro ao enviar avaliação:', error);
            });
    }
  
    function enviarAvaliacaoContratante(contratanteId, valor) {
        $.ajax({
            type: "POST",
            url: "/api/rate",
            data: JSON.stringify([contratanteId, Number(valor), "nao."]),
            contentType: 'application/json',
            success: function (response) {
                console.log('Avaliação enviada com sucesso!', response);
            },
            error: function (error) {
            onsole.error('Erro ao enviar avaliação:', error);
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
                //document.getElementById('descricaoServicoCategoria').textContent = prestador.descricao;
                prestador.ratings = prestador.ratings || [];
  
                const avaliacaoPrestadorSection = document.getElementById('avaliacaoPrestadorSection');
                avaliacaoPrestadorSection.innerHTML = '';
  
                for (let i = 1; i <= 5; i++) {
                    const starPreIcon = document.createElement('span');
                    starPreIcon.classList.add('starC-icon');
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
  
    function marcarEstrelasPrestador(prestador, valor) {
        const starPre = document.querySelectorAll('.starPre-icon');
        valorAvaliacaoCliente = valor;
        starPre.forEach(starPre => {
            const starPreValue = parseInt(starPre.dataset.value);
            const isStarPreSelected = starPreValue <= valor;
            starPre.classList.toggle('ativo', isStarPreSelected);
        });
  
        prestador.ratings = prestador.ratings || [];
        prestador.ratings.push(valor);
  
        enviarAvaliacaoPrestador(prestador.id, valor)
            .then(response => {
                console.log('Avaliação enviada com sucesso!');
            })
            .catch(error => {
                console.error('Erro ao enviar avaliação:', error);
            });
    }
  
    function enviarAvaliacaoPrestador(prestadorId, valor) {
        $.ajax({
            type: "POST",
            url: "/api/rate",
            data: JSON.stringify([prestadorId, Number(valor), "nao."]),
            contentType: 'application/json',
            success: function (response) {
                console.log('Avaliação enviada com sucesso!', response);
            },
            error: function (error) {
            onsole.error('Erro ao enviar avaliação:', error);
        }
     });
    }
  }


 