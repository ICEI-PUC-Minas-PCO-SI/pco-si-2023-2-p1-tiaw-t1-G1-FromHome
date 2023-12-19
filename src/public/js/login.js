
$(document).ready(function(){
  $("#loginForm").submit(function(event){
    event.preventDefault();

    const formData = [localStorage.getItem("varFuncao"), $("#emailOrPhone").val(), $("#password").val()]
    
    //$("#rememberMe").val()
    $.ajax({
      type: "POST",
      url: "/api/account?type=login",
      data: JSON.stringify(formData),
      contentType: 'application/json', 
      success: function(response) {
        //$('#cadastroConcluidoMessage').text('Login realizado com sucesso!');
        //$('#confirmacaoModal').modal('show');
        console.log(response);
        let funcao= localStorage.getItem("varFuncao")
        if (funcao == "prestador") {
          window.location.href = "listademandascandidato.html";
      }
      else if(funcao == "contratante"){
          
          window.location.href = "listademandacliente.html";
          
      }
       // window.location = "/listademandascandidato.html"
      },
      error: function(error) {
        console.error(error);
      }
    });
  });
});
