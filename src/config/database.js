const {Sequelize} = require('sequelize');

const db = new Sequelize({
    dialect: "sqlite",
    storage: `${process.env.DB_NAME}.sqlite`,
    logging: false,
});

module.exports = db;

