'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Photos', [{
      title: 'Foto jadul',
      caption: 'Foto ini diambil di zaman ayah',
      image_url : 'https://photojadul.com',
      createdAt: new Date(),
      updatedAt: new Date(),   
    },
    {
      title: 'Foto kenananga',
      caption: 'Foto ini diambil di zaman ayah dan ibu belum menikah',
      image_url : 'https://photokenangan.com',
      createdAt: new Date(),
      updatedAt: new Date(),  
    },
    {
      title: 'Foto Liburan',
      caption: 'Foto ini diambil di zaman masih kecil dan liburan di rumah nenek',
      image_url : 'https://photoliburan.com',
      createdAt: new Date(),
      updatedAt: new Date(),  
    },
    {
      title: 'Foto Malming',
      caption: 'Malam Minggu bersama orang tercinta',
      image_url : 'https://photokenangan.com',
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
