//function search(){


    //let input = document.getElementById('Pesquisar').value
  //input =   input.toLowerCase()
  //let x = document.getElementsByClassName('animals')




 // for(i= 0; i< x.length; i++){


 //   if(!x[i].innerHTML.toLowerCase().includes(input)) {// SE a ariavel x com o html incluir o input q vai ser inserido


  //      x[i].style.display = "none"
  //  }else{
  //      x[i].style.display = "list-item"
  //  }
 // }
//}//


// const searchWrapper = document.querySelector('Pesquisar');
//const inputBox = searchWrapper.querySelector('input');
//const sugestBox = searchWrapper.querySelector('.list');
//let linktag = searchWrapper.querySelector('a');
//let weblink;//






//inputBox.onkeyup = (e) =>{
//  let userData = e.target.value;
//  let emptyArray = [];




  //if(e.key == 'Enter'){
  // if(userData){
  //   window.open(`https://www.google.com/search?q=${userData}`, '}_blank');
  //  }
  //  }
 // }


 


  //function search(){
  //  if(userData){
  //    window.open(`https://www.google.com/search?q=${userData}`, '}_blank');
  //  }
 // }


 function apertaenter(event) {
    if (event.key === "Enter") {
        // Impede o envio do formulário padrão
        event.preventDefault();
        // Redireciona para a página "assuntos.html" ao pressionar Enter
        window.location.href = "resultadopesquisa.html";
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  var map
  console.log(map)
  
  
  
  
  
  
  //MAPA 1
  function mostrarMapa1() {
    if (map === undefined) {
     
      mapElement = document.getElementById('map');
    mapElement.style.display = 'block';
  
  
    map = L.map('map').setView([-19.938850504974404, -44.03578685889994], 13);
  
  
   
  
  
  
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
  
    L.marker([-19.938850504974404, -44.03578685889994]).addTo(map)
      .bindPopup('Localização da Demanda')
      .openPopup();
    }
  
  
  
  
    else {
    map.remove();
  
  
      mapElement = document.getElementById('map');
    mapElement.style.display = 'block';
  
  
    map = L.map('map').setView([-19.938850504974404, -44.03578685889994], 13);
  
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
  
    L.marker([-19.938850504974404, -44.03578685889994]).addTo(map)
      .bindPopup('Localização da Demanda')
      .openPopup()
    }
  }
  
  
   
   
  //MAPA2
  function mostrarMapa2() {
    if (map === undefined) {
  
  
    mapElement = document.getElementById('map');
    mapElement.style.display = 'block';
  
  
    map = L.map('map').setView([-19.94426585400102, -44.11221255737917], 13);
  
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
  
    L.marker([-19.94426585400102, -44.11221255737917]).addTo(map)
      .bindPopup('Localização da Demanda')
      .openPopup();
  }
  
  
  else {
    map.remove();
    mapElement = document.getElementById('map');
    mapElement.style.display = 'block';
  
  
    map = L.map('map').setView([-19.94426585400102, -44.11221255737917], 13);
  
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
  
    L.marker([-19.94426585400102, -44.11221255737917]).addTo(map)
      .bindPopup('Localização da Demanda')
      .openPopup();
  }
  }
  
  
  
  
  //MAPA3
  function mostrarMapa3() {
    if (map === undefined) {
  
  
    mapElement = document.getElementById('map');
    mapElement.style.display = 'block';
  
  
    map = L.map('map').setView([-19.963032909286536, -44.34752103821428], 13);
  
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
  
    L.marker([-19.963032909286536, -44.34752103821428]).addTo(map)
      .bindPopup('Localização da Demanda')
      .openPopup();
  }
  
  
  else {
    map.remove();
    mapElement = document.getElementById('map');
    mapElement.style.display = 'block';
  
  
    map = L.map('map').setView([-19.963032909286536, -44.34752103821428], 13);
  
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
  
    L.marker([-19.963032909286536, -44.34752103821428]).addTo(map)
      .bindPopup('Localização da Demanda')
      .openPopup();
  }
  }
  
  
  
  
  //MAPA4
  function mostrarMapa4() {
    if (map === undefined) {
  
  
    mapElement = document.getElementById('map');
    mapElement.style.display = 'block';
  
  
    map = L.map('map').setView([-19.98609371073619, -44.00392870355059], 13);
  
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
  
    L.marker([-19.98609371073619, -44.00392870355059]).addTo(map)
      .bindPopup('Localização da Demanda')
      .openPopup();
  }
  
  
  else {
    map.remove();
    mapElement = document.getElementById('map');
    mapElement.style.display = 'block';
  
  
    map = L.map('map').setView([-19.98609371073619, -44.00392870355059], 13);
  
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
  
    L.marker([-19.98609371073619, -44.00392870355059]).addTo(map)
      .bindPopup('Localização da Demanda')
      .openPopup();
  }
  }
  
  
  
  
  //MAPA5
  function mostrarMapa5() {
    if (map === undefined) {
  
  
    mapElement = document.getElementById('map');
    mapElement.style.display = 'block';
  
  
    map = L.map('map').setView([-19.972015832626262, -43.96813300299194], 13);
  
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
  
    L.marker([-19.972015832626262, -43.96813300299194]).addTo(map)
      .bindPopup('Localização da Demanda')
      .openPopup();
  }
  
  
  else {
    map.remove();
    mapElement = document.getElementById('map');
    mapElement.style.display = 'block';
  
  
    map = L.map('map').setView([-19.467957503317535, -42.57266859342818], 13);
  
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
  
    L.marker([-19.467957503317535, -42.57266859342818]).addTo(map)
      .bindPopup('Localização da Demanda')
      .openPopup();
  }
  }
  
  
  
  
  
  
  /*function mapaInicio() {
    var map = L.map('map').setView([-19.956703640716196, -43.99862594577221], 30);
  
  
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  
  L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
    } */
  
  
  
  
  
  
      /* fazer texto aparecer
     
     
     
      document.getElementById("titulo").innerHTML="<h4><b>Titulo da Demanda </b></h4>";
    document.getElementById("status").innerHTML="<h6><b>Titulo da Demanda </b></h6>";
    document.getElementById("descricao").innerHTML="<h6><b>Titulo da Demanda </b></h6>";
    document.getElementById("paragrafo").innerHTML="<p><b>loren ipson </b></p>";
    document.getElementById("localizacao").innerHTML="<h6><b>Titulo da Demanda </b></h6>"; */
  
  