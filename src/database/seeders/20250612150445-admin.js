'use strict';

const { isActive } = require('../../models/book');
const { password } = require('../../models/user');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Users', [
      {
        name: 'Jose',
        lastname: 'Benitez',
        email: 'jose.benitez@ce.ucn.cl',
        password: bcrypt.hashSync('jbenitez123', salt),
        isActive: true,
        superRol: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
