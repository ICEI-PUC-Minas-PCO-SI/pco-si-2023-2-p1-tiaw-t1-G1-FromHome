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
        starsC.forEach(starC => {
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