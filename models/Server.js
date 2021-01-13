const express = require('express');
const { dbConnection } = require('../database/config');
require('dotenv').config();

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;
    dbConnection();
  }

  configMiddlewares() {
    this.app.use(express.json());
    this.app.use('/api/auth', require('../routes/auth'));
    this.app.use('/api/user', require('../routes/user'));
  }

  execute() {
    this.configMiddlewares();
    this.app.listen(this.PORT, () => {
      console.log('Server Online. Puerto', this.PORT);
    });
  }
}

module.exports = Server;
