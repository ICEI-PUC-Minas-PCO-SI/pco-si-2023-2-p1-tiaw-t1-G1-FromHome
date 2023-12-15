const button = document.querySelector("#postarBtn");
const nameInput = document.querySelector("#inputNomeServico");
const opcoesInput = document.querySelector("#inputOpcoes");
const LocalInput = document.querySelector("#inputLocal");
const cidadeInput = document.querySelector("#cityInput");
const estadoInput = document.querySelector("#stateInput");
const FotoInput = document.querySelector("#inputFotos");
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
    localizacao: LocalInput.value,
    cidade: cidadeInput.value,
    estado: estadoInput.value,
    foto: FotoInput.value,
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

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/servicos", (req, res) => {
  const endereco = req.body;
  const db = router.db;
  db.get("servicos").push(endereco).write();
  res.json(endereco);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
