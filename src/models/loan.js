const { DataTypes, Model } = require('sequelize');
const db = require('../config/database');
const User = require('./user');

class Loan extends Model {

    static user_id;
    static book_id;
    static loanDate;
    static returnDate;
    static state;
}

Loan.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    loanDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active'
    }
}, {
    sequelize: db,
    modelName: 'Loan',
    timestamps: true
});

Loan.user_id = Loan.belongsTo(require('./user'), {foreignKey: 'user_id'});
Loan.book_id = Loan.belongsTo(require('./book'), {foreignKey: 'book_id'});


Loan.prototype.toJSON = function () {
    const {loan} = this.get();
    return loan;
}   

module.exports = Loan;