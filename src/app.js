document.addEventListener("DOMContentLoaded", function () {
    const inputLocal = document.getElementById("inputLocal");
    document.getElementById("postarBtn").addEventListener("click", function () {
      const cep = inputLocal.value.replace(/\D/g, ''); 
      const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log("Resposta do ViaCEP:", data); 
          if (!data.erro) {
            const enderecoCompleto = `${data.logradouro || ''}, ${data.bairro || ''}, ${data.localidade || ''} - ${data.uf || ''}`;
            inputLocal.value = enderecoCompleto;
          } else {
            console.error("Nenhum resultado encontrado para o CEP fornecido.");
          }
        })
        .catch(error => {
          console.error("Erro ao obter informações do ViaCEP:", error);
        });
    });
  });