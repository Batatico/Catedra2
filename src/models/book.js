const { DataTypes, Model } = require('sequelize');
const db = require('../config/database');

class Book extends Model {

    static id;
    static title;
    static author;
    static genre;
    static publishedDate;
    static availability;
    static isActive;

}

Book.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publishedDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    availability: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize: db,
    modelName: 'Book',
    timestamps: true    
});

Book.prototype.toJSON = function () {
    const {book} = this.get();
    return book;
}

module.exports = Book;

