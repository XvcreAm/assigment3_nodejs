'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Photos', [{
      title: 'Foto pertama hamada',
      caption: 'Foto Pertama Hamada',
      image_url : 'https://photo1ham.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),   
    },
    {
      title: 'Foto kedua hamada',
      caption: 'Foto kedua Hamada',
      image_url : 'https://photo2ham.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),  
    },
    {
      title: 'Foto ketiga hamada',
      caption: 'Foto ketiga Hamada',
      image_url : 'https://photo3ham.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),  
    },
  ], {});
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
