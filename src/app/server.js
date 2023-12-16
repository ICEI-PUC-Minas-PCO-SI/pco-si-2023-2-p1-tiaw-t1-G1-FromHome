const json_server = require("json-server")
const cookies = require("cookies")
const express = require("express")
const crypto = require("crypto")
const bcrypt = require("bcrypt")
const path = require("path")


const Application = express()
const JSONRouter = json_server.router("./src/app/data/db.json")
const Port = process.env.PORT || 621;

let DBG = console.log

function Send403(Response) {
  Response.status(403)
  Response.send("<h1>Você não tem acesso a esta página</h1>")
}


// @note Isso deve sempre ser o primeiro middleware
Application.use((Request, _Response, NextHandles) => {
  let Socket = Request.socket
  DBG(`(${Socket.localAddress}::${Socket.localPort} <=> ${Socket.remoteAddress}::${Socket.remotePort}) -> ${Request.method} ${Request.url}\nHeaders: ${JSON.stringify(Request.headers, null, 3)}`)
  NextHandles()
})

Application.use(express.urlencoded({ extended: true }))
Application.use(express.json())
Application.use("/js", express.static(path.join(__dirname, "../public/js")))
Application.use("/img", express.static(path.join(__dirname, "../public/img")))
function UserDataFromToken(Token) {
  if (!Token) { return false }

  let UID = null
  for (let TokenObject of JSONRouter.db.get("tokens")) {
    if (TokenObject.token == Token) {
      UID = TokenObject.id
      break
    }
  }

  if (!UID) { return false }

  let User = null
  for (let UserObject of JSONRouter.db.get("users")) {
    if (UserObject.id == UID) {
      User = UserObject
      break
    }
  }

  return User.id && User || null
}


Application.post("/api/account", (Request, Response) => {
  DBG(Request.body)
  const [ UserType, Identifier, Password, Username, Phone, Birthdate, Gender, Address, City, State, Country ] = Request.body

  // Hashear a senha é sempre uma boa pratica, apesar que seria altamente beneficial se tivesse um salt na hash.
  let SaltedPassword = crypto.createHash("sha256").update(Password).digest("hex")
  let Type = Request.query.type.toUpperCase()

  if (Type == "REGISTER") {
    let NewUser = {
      user_type: UserType,
      birthdate: Birthdate,
      password: SaltedPassword,
      username: Username,
      gender: Gender,
      email: Identifier,
      phone: Phone,

      address: Address,
      country: Country,
      state: State,
      city: City,
      
      ratings: [],

      id: Date.now()
    }
  
    JSONRouter.db.get("users").push(NewUser).write()
    Response.json({ success: true, message: "Usuário registrado com sucesso" })
  }
  else if (Type == "LOGIN") {
    let Token = null
    for (let User of JSONRouter.db.get("users")) {
      if (User.user_type == UserType && (User.email == Identifier || User.phone == Identifier) && SaltedPassword == User.password) {
        DBG(Request.body, "=", User)

        Token = bcrypt.hashSync(`${User.user_type}${SaltedPassword};${User.email};${Date.now()}`, 10)
        JSONRouter.db.get("tokens").push({
          token: Token,
          id: User.id
        }).write()
        break
      }
    }

    if (Token) {
      (new cookies(Request, Response)).set('token', Token, { maxAge: 900000, httpOnly: true });
      Response.sendStatus(200)
    }
    else {
      Response.json({ success: false, message: "Login invalido ou inexistente" });
    }
  }

});

Application.post("/api/rate", (Request, Response) => {
  let User = UserDataFromToken((new cookies(Request, Response)).get("token"))

  if (!User) { return Send403(Response) }

  let [Rating, Target, Reason] = Request.body

  let TargetUser = JSONRouter.db.get("users").find({ id: Target })
  TargetUser.get("ratings").push({ uid: User.id, rating: Rating, reason: Reason}).write()
  
  Response.json({ success: true, message: "Review com sucesso" })
})


Application.use("/api", json_server.defaults())
Application.use("/api", JSONRouter)

Application.use((Request, Response, NextHandles) => {
  let Cookies = new cookies(Request, Response)
  if(["/", "/index.html", "/login.html", "/registroUsuario.html", "/escolhaFuncaoCadastro.html", "/escolhaFuncaoLogin.html"].find((V) => (V == Request.path))){
    return NextHandles();
  }
  let User = UserDataFromToken(Cookies.get("token"))
  if(!User) Send403(Response)
  if(User.user_type == "prestador" && ["/buscarVagas.html", "/confirmarpagamentocliente.html","/resultadopesquisa.html", "/servicoEmAndamento.html", "/telaAvaliacaoCliente.html"].find((V) => (V == Request.path))) return NextHandles();
  else if(User.user_type == "contratante" && ["/confirmarpagamentocliente.html","/listaperfil.html", "/registroservicos.html","/telapesquisacliente.html", "/telaAvaliacaoPrestador.html"].find((V) => (V == Request.path))) return NextHandles();
  else return Send403(Response)
})


Application.use(express.static(path.join(__dirname, "../public/pages")))
Application.use("/pages", express.static(path.join(__dirname, "../public/pages")))


// Movida a rota padrão para o final
Application.use((_Request, Response) => {
  Response.status(404).send('Página não encontrada')
})

Application.listen(Port, () => {
  DBG(`Server is running on port ${Port}`);
})
