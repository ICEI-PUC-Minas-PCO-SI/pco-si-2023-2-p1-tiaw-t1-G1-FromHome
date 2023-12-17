
  
  fetch('http://localhost:3000/categoria')
    .then(response => response.json())
    .then(data => {
        console.log('Dados recebidos:', data);

        // Certifique-se de que os dados estão no formato esperado
        if (data && data.categoria && data.categoria.length) {
            // Processar os dados (por exemplo, filtrar somente categorias ativas)
            const categoriasAtivas = data.categoria.filter(categoria => categoria.ativa);

            // Construir as opções para a barra de seleção
            let html = '';
            for (var i = 0; i < categoriasAtivas.length; i++) {
                html += '<option value=' + categoriasAtivas[i].id + '>' + categoriasAtivas[i].titulo + '</option>';
            }

            // Atualizar o HTML do elemento da caixa de pesquisa
            $('#sugestoes').html(html);
        } else {
            console.error('Dados ausentes ou em formato incorreto.');
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });