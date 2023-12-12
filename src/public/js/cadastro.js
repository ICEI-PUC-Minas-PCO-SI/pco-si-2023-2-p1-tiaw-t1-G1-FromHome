$(document).ready(function(){
  function redirectLogin() {
    window.location.href = '/login.html';
  }
  
  $("#FormularioCadastro").submit(function(event){
    event.preventDefault();

    const formData = {
      email: $("#inputEmail").val(),
      password: $("#inputPassword").val(),
      username: $("#inputUsername").val(),
      phone: $("#inputPhone").val(),
      birthdate: $("#inputBirthdate").val(),
      gender: $("#inputGender").val(),
      address: $("#inputAddress").val(),
      city: $("#inputCity").val(),
      state: $("#inputState").val(),
      country: $("#inputCountry").val(),
    };
    console.log(formData);
    
    let req = new XMLHttpRequest()
    req.open("POST", "http://localhost:3000/api/users", true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    req.send(JSON.stringify(formData));

    /*
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/api/users",
      data: JSON.stringify(formData),
      contentType: 'application/json', 
      success: function(response) {
        $('#cadastroConcluidoMessage').text('Cadastro realizado com sucesso!');
        $('#confirmacaoModal').modal('show');
      },
      error: function(error) {
        console.error(error);
      }
    });
    //*/
  });
});
