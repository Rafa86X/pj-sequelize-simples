const express = require('express');
const sequelize = require('./src/db/db.js');
const bodyParser = require('body-parser');
const routes = require('./src/routes/router.js')

const app = express();

app.use(bodyParser.json());

sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado');
  })
  .catch(err => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });

routes(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
