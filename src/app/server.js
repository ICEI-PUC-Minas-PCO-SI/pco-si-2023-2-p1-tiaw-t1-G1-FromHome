const json_server = require("json-server")
const express = require("express")
const crypto = require("crypto")
const bcrypt = require("bcrypt")
const path = require("path")


const Application = express()
const JSONRouter = json_server.router("./src/app/data/db.json")
const Port = process.env.PORT || 621;

let DBG = console.log

// @note Isso deve sempre ser o primeiro middleware
Application.use((Request, _Response, NextHandles) => {
  let Socket = Request.socket
  DBG(`(${Socket.localAddress}::${Socket.localPort} <=> ${Socket.remoteAddress}::${Socket.remotePort}) -> ${Request.method} ${Request.url}\nHeaders: ${JSON.stringify(Request.headers, null, 3)}`)
  NextHandles()
})

Application.use(express.urlencoded({ extended: true }))
Application.use(express.json())
Application.use(express.static(path.join(__dirname, "../public/pages")))
Application.use("/js", express.static(path.join(__dirname, "../public/js")))
Application.use("/img", express.static(path.join(__dirname, "../public/img")))
Application.use("/pages", express.static(path.join(__dirname, "../public/pages")))

function UserDataFromToken(Token) {
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
      userType: UserType,
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
      if ((User.email == Identifier || User.phone == Identifier) && SaltedPassword == User.password) {

        Token = bcrypt.hashSync(`${SaltedPassword};${User.email};${Date.now()}`, 10)
        JSONRouter.db.get("tokens").push({
          token: Token,
          id: User.id
        }).write()
        break
      }
    }

    if (Token) {
      document.cookie = `token=${Token}`
      window.location.href = 'buscarVagas.html';

    }
    else {
      Response.json({ success: false, message: "Login invalido ou inexistente" });
    }
  }

});

Application.post("/api/rate", (Request, Response) => {
  let User = UserDataFromToken(Request.headers.authorization)

  if (!User) { return Response.sendStatus(403) }

  let [Rating, Target, Reason] = Request.body

  let TargetUser = JSONRouter.db.get("users").find({ id: Target })
  TargetUser.get("ratings").push({ uid: User.id, rating: Rating, reason: Reason}).write()
  
  Response.json({ success: true, message: "Review com sucesso" })
})


Application.use("/api", json_server.defaults())
Application.use("/api", JSONRouter)

// Movida a rota padrão para o final
Application.use((_Request, Response) => {
  Response.status(404).send('Página não encontrada')
})

Application.listen(Port, () => {
  DBG(`Server is running on port ${Port}`);
})
