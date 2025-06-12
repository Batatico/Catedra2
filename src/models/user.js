const { DataTypes, Model } = require('sequelize');
const db = require('../config/database');

class User extends Model {
    
    static id;
    static name;
    static lastname;
    static email;
    static password;
    static superRol
}

User.init({

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    superRol: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

}, 
{
    sequelize: db,
    modelName: 'User',
    timestamps: true
});

User.asociate = (models) => {
    User.hasMany(models.Loan, {
        foreignKey: 'user_id',
        as: 'loans'
    });
}

User.prototype.toJSON = function () {
    const {password, ...user} = this.get();
    delete user.password
    return user;
}

module.exports = User;
