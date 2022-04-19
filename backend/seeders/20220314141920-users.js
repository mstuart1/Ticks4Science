'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      firstName: 'Michelle',
      lastName: 'Stuart',
      email: 'michelle.stuart@rutgers.edu',
      password: '$2a$12$5vchZo3gCFVSEZdWlKDCyu1Gx.qM0qHv63/outmaPT5SSxM/BaPta',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
