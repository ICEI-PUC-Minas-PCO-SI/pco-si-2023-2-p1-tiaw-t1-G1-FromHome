const json_server = require("json-server")
const cookies = require("cookies")
const express = require("express")
const crypto = require("crypto")
const bcrypt = require("bcrypt")
const path = require("path")
const { request } = require("http")


const Application = express()
const JSONRouter = json_server.router("./db.json")
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

function ServiceFromIdentifier(Identifier) {
  return JSONRouter.db.get("services").find((V) => V.service_id == Identifier)
}

Application.post("/api/account", (Request, Response) => {
  DBG(Request.body)
  const [ UserType, Identifier, Password, Username, Phone, Birthdate, Gender, Address, City, State] = Request.body

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

/*
    let TokenList = JSONRouter.db.get("tokens")
    let NewTokens = []
    for (let T of TokenList) {
      if (!NewTokens.find((V) => V.id == T.id)) {
        NewTokens.push(T)
      }
    }
    DBG(NewTokens)
    JSONRouter.db.set("tokens", NewTokens).write()
    */

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
  let [Target, Rating, Reason] = Request.body
  let User = UserDataFromToken((new cookies(Request, Response)).get("token"))

  if (!User) { return Send403(Response) }
  let TargetUser = JSONRouter.db.get("users").find({ id: Target })

  if (Request.method == "GET") {
    return Response.json(TargetUser)
  }
  else if (Request.method == "POST") {
    TargetUser.get("ratings").push({ uid: User.id, rating: Rating, reason: Reason}).write()
    return Response.json({ success: true, message: "Review com sucesso" })
  }
})

Application.use("/api/register_service", (Request, Response) => {
  let User = UserDataFromToken((new cookies(Request, Response)).get("token"))
  if (!User) { return Send403(Response) }
  
  JSONRouter.db.get("services").push({
    ...Request.body,
    service_id: crypto.createHash("sha256").update(`${User.id}|${Request.body.name}`).digest("hex"),
    requester: User.id,
    candidates: []
  }).write()
  Response.json({ success: true, message: "Serviço registrado com sucesso" })
})

Application.use("/api/list_services", (Request, Response) => {
  let Services = []
  let query = Request.query.query
  if (query.length > 0) {
    Services = JSONRouter.db.get("services").filter((V) => V.description.includes(query) || V.name.includes(query) || V .category.includes(query) )
  }
  else {
    Services = JSONRouter.db.get("services")
  }
  
  return Response.json(Services)
})

Application.use("/api/list_own_services", (Request, Response) => {
  let User = UserDataFromToken((new cookies(Request, Response)).get("token"))
  if (!User) { return Send403(Response) }

  return Response.json(JSONRouter.db.get("services").filter((V) => V.requester == User.id))  
})

Application.use("/api/submit", (Request, Response) => {
  let User = UserDataFromToken((new cookies(Request, Response)).get("token"))
  if (!User) { return Send403(Response) } //  User.user_type != "prestador"
  

  let Service = ServiceFromIdentifier(Request.body.service_id)
  Service.get("candidates").push(User.id).write()

  return Response.sendStatus(200)
})

Application.use("/api/user", (Request, Response) => {
  return Response.json(JSONRouter.db.get("users").filter((V) => V.id == Request.body.id))  
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
  DBG(Request.path)
  if(User.user_type == "prestador" && ["/buscarVagas.html", "/confirmarpagamentocliente.html","/resultadopesquisa.html", "/servicoEmAndamento.html", "/telaAvaliacaoCliente.html","/listademandascandidato.html"].find((V) => (V == Request.path))) return NextHandles();
  else if(User.user_type == "contratante" && ["/confirmarpagamentocliente.html","/listaperfil.html", "/registroservicos.html","/telapesquisacliente.html", "/telaAvaliacaoPrestador.html","/listademandacliente.html"].find((V) => (V == Request.path))) return NextHandles();
  else return Send403(Response)
})

Application.use(express.static(path.join(__dirname, "../public/pages")))
Application.use("/pages", express.static(path.join(__dirname, "../public/pages")))


Application.use((Request, Response, NextHandles) => {
  let Cookies = new cookies(Request, Response)
  if(["/", "/index.html", "/login.html", "/registroUsuario.html", "/escolhaFuncaoCadastro.html", "/escolhaFuncaoLogin.html"].find((V) => (V == Request.path))){
    return NextHandles();
  }
  let User = UserDataFromToken(Cookies.get("token"))
  if(!User) Send403(Response)
  DBG(Request.path)
  if(User.user_type == "prestador" && ["/buscarVagas.html", "/confirmarpagamentocliente.html","/resultadopesquisa.html", "/servicoEmAndamento.html", "/telaAvaliacaoCliente.html","/listademandascandidato.html","/redirecionamento.html"].find((V) => (V == Request.path))) return NextHandles();
  else if(User.user_type == "contratante" && ["/confirmarpagamentocliente.html","/listaperfil.html", "/registroservicos.html","/telapesquisacliente.html", "/telaAvaliacaoPrestador.html","/listademandacliente.html","/redirecionamento.html"].find((V) => (V == Request.path))) return NextHandles();
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
