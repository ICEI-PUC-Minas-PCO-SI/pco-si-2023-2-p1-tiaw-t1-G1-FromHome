$(document).ready(function () {
    $.ajax({
        url: '/api/user?type=servicos',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.length === 0) {
                $("#carouselContent").html("<p>Ainda não existem profissionais cadastrados.</p>");
            } else {
                var carouselContent = $("#carouselContent");
                var indicators = $(".carousel-indicators");

                data.forEach(function (profissional, index) {
                    var activeClass = index === 0 ? "active" : "";
                    var indicator = `<li data-bs-target="#carouselExampleIndicators" data-slide-to="${index}" class="${activeClass}"></li>`;
                    indicators.append(indicator);

                    var item = `
                        <div class="carousel-item ${activeClass}">
                            <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
                                <div class="col">
                                    <div class="card">
                                        <img src="${profissional.imagem}" class="card-img-top img-fluid" alt="${profissional.nome}">
                                        <div class="card-body">
                                            <h5 class="text-center">
                                                <a href="#visualizarPerfil" data-toggle="modal" class="text" style="text-decoration: none; color: black" data-id="${profissional.idProfissional}">
                                                    <b>${profissional.nome}</b>
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    carouselContent.append(item);
                });
            }
        },
        error: function (error) {
            console.error('Erro na requisição AJAX:', error);
        }
    });

    $(document).on('click', '#carouselContent a', function (event) {
        event.preventDefault();
        var profissionalId = $(this).data('id');
        var profissional = data.find(function (item) {
            return item.idProfissional == profissionalId;
        });
        preencherModal(profissional);
    });

    $.ajax({
        url: '/api/user?type=ratings',
        method: 'GET',
        dataType: 'json',
        success: function (avaliacoes) {
            var totalAvaliacoes = ratings.length;


            $('#totalAvaliacoes').text('Total de Avaliações: ' + totalAvaliacoes);
        },
        error: function (erro) {
            console.error('Erro na requisição AJAX:', erro);
        }
    });
});
