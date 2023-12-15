function redirectLogin() {
  window.location.href = '/login.html';
}
$(document).ready(function(){


  $("#FormularioCadastro").submit(function(event){
    event.preventDefault();

    const formData = [
      localStorage.getItem("varFuncao"),
      $("#inputEmail").val(),
      $("#inputPassword").val(),
      $("#inputUsername").val(),
      $("#inputPhone").val(),
      $("#inputBirthdate").val(),
      $("#inputGender").val(),
      $("#inputAddress").val(),
      $("#inputCity").val(),
      $("#inputState").val(),
      $("#inputCountry").val(),
    ];
    console.log(formData);
    
    $.ajax({
      type: "POST",
      url: "/api/account?type=register",
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
  });
});
