const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./config/database');


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require('http').createServer(this.app);

    this.paths = {
        users: '/api/users',
    };


    this.dbConnection = require();   

    this.app.use(express.json());

    this.middlewares();

    this.routes();
    
  }

async dbConnection() {

  await db.authenticate()
    .then(() => {
      console.log('Database connected successfully');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
}

middlewares() {

    this.app.morgan('dev');
    this.app.use(cors());   
    this.app.use(express.json());

  }

routes() {
    this.app.use(this.paths.users, require('./routes/userRoutes'));
  }

listen() {
    this.server.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  } 
 
}  
module.exports = Server;    