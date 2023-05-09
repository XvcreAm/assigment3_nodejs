'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up:async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Users', [{
      username: 'Hamada',
      email: 'hamada@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
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
