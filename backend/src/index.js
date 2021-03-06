const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http')
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('your mongodb', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

server.listen(3333, _ => {
  console.log('Express server rodando na porta 3000.');
});