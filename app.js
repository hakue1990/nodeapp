const express = require('express');
const app = express();
const config = require('./config');

const port = config.PORT;

const appId = 'my app 1111';

app.get('/', (req, res) => {
  res.send(`Numer portu: ${port}, ID aplikacji: ${appId}`);
});

app.listen(port, () => {
  console.log(`Aplikacja działa na porcie ${port}`);
});
