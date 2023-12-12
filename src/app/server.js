const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const jsonRouter = jsonServer.router('./src/app/data/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public/pages')));
app.use('/js', express.static(path.join(__dirname, '../public/js')));
app.use('/img', express.static(path.join(__dirname, '../public/img')));
app.use('/pages', express.static(path.join(__dirname, '../public/pages')));

app.post('/api/users', (req, res) => {
  const { email, password, username, phone, birthdate, gender, address, city, state, country } = req.body;
  const userId = Date.now();

  console.log('Dados recebidos no servidor:', req.body);

  const newUser = {
    id: userId,
    email,
    password,
    username,
    phone,
    birthdate,
    gender,
    address,
    city,
    state,
    country
  };

  jsonRouter.db.get('users').push(newUser).write();

  res.json({ success: true, message: 'Usuário registrado com sucesso', user: newUser });
});

app.use('/api', middlewares);
app.use('/api', jsonRouter);

// Movida a rota padrão para o final
app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
