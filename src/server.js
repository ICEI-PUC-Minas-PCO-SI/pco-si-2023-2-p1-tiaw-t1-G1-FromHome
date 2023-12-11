const button = document.querySelector("#postarBtn");
const nameInput = document.querySelector("#inputNomeServico");
const opcoesInput = document.querySelector("#inputOpcoes");
const LocalInput = document.querySelector("#inputLocal");
const descricaoServicoInput = document.querySelector("#inputDescricaoServico");
const disponibilidadeInput = document.querySelector("#inputDisponibilidade");
const precoInput = document.querySelector("#inputPreco");
const dataInput = document.querySelector("#inputData");
const checkbox = document.querySelector("#gridCheck");


button.addEventListener("click", async (e) => {
  e.preventDefault();

  const dados = {
    nome: nameInput.value,
    categoria: opcoesInput.value,
    descricao: descricaoServicoInput.value,
    localizacao: LocalInput.value ,
    foto: "caminho/da/foto.jpg",
    disponibilidade: disponibilidadeInput.value,
    preco: precoInput.value,
    data: dataInput.value,
    contato: checkbox.checked,
  };

  await fetch("http://localhost:3000/servicos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });
});


