// carrossel
$(document).ready(function () {
    $.ajax({
   url: '/api/user?type=servicos',
   method: 'GET',
   dataType: 'json', 
   success: function (data) {
   if (data.length === 0) {
    $("#carouselContent").html("<p>Ainda não existem profissionais cadastrados.</p>");
    } 
   
    else {
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
    <a href="#visualizarPerfil" data-toggle="modal" class="text" style="text-decoration: none; color: black">
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
   });
   
   //modal
   
   //perfilcontratante
   
   //perfilalterar
   
   function Modal(ActiveClass, Image, Name) {
   return `
   <div class="carousel-item ${ActiveClass}">
   <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
   <div class="col">
   <div class="card">
   <img src="${Image}" class="card-img-top img-fluid" alt="${Name}">
    <div class="card-body">
    <h5 class="text-center">
    <a href="#visualizarPerfil" data-toggle="modal" class="text" style="text-decoration: none; color: black">
    <b>${Name}</b>
   </a>
   </h5>
   </div>
   </div>
    </div>
   </div>
   </div>
   `
   }
   
   $(document).ready(function () {
       $.ajax({
           type: "POST",
           url: "/api/service",
           data: JSON.stringify({id: localStorage.getItem()}),
           contentType: 'application/json', 
           success: function(S) {
               S = JSON.parse(S)
               S.candidates.forEach((c) => {
                   $.ajax({
                       type: "POST",
                       url: "/api/user",
                       data: JSON.stringify({id: c}),
                       contentType: 'application/json', 
                       success: function(response) {
                         //$('#cadastroConcluidoMessage').text('Login realizado com sucesso!');
                         //$('#confirmacaoModal').modal('show');
                         console.log(response);
                         let indicator =`<li data-bs-target="#carouselExampleIndicators" data-slide-to="${index}" class="${activeClass}"></li>`
                         $(".carousel-indicators").append(indicator)
                         carouselContent.append(Modal());
                       },
                       error: function(error) {
                         console.error(error);
                       }
                     });
               })
           },
           error: function(error) {
             console.error(error);
           }
         });
   })
