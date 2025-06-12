const { DataTypes, Model } = require('sequelize');
const db = require('../config/database');
const User = require('./user');

class Role extends Model {
    static id;
    static name;
    static description;
}   
Role.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    
}, 
{
    sequelize: db,
    modelName: 'Role',
    tableName: 'roles',
    timestamps: false
}); 
module.exports = Role;


