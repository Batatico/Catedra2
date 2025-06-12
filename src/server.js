const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./config/database');
const User = require('./models/user');
const Book = require('./models/book');
const Loan = require('./models/loan');  
const Role = require('./models/role');


class Server {
  constructor() {
    this.app = express();

        this.port = process.env.PORT;

        this.server = require('http').createServer(this.app);


    this.paths = {
        auth: "/api/",
    };


    this.dbConnection();   

    this.app.use(express.json());

    this.middlewares();
 
    this.routes();

    
    
  }

async dbConnection() {
  try {

        await db.authenticate();
        await User.sync({force: false});
        await Book.sync({force: false});
        await Loan.sync({force: false});
        console.log('Database connected successfully');
        }catch(error){
            console.log(error);
        }


}

middlewares() {

    this.app.use(morgan("dev")); // Logging middleware
    this.app.use(cors());   
    this.app.use(express.json());

  }

routes() {
    this.app.use(this.paths.auth, require("./routes/auth.routes"));
  }

listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  } 
 
}  
module.exports = Server;    