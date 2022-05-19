'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        "id": 1,
        "firstName": "Michelle",
        "lastName": "Stuart",
        "email": "michelle.stuart@rutgers.edu",
        "password": "$2a$12$mOFs2OdijL/n6pzIBK7B8.lrF4ffniDw52eXL5c6E4QOjVjeGrzLC",
        "manageUsers": 1,
        "resetToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ3JhbnQiOm51bGwsImlhdCI6MTY1Mjg5ODg5MCwiZXhwIjoxNjUyOTg1MjkwfQ.B3YiIuiT3F7Xa19PMXHBGTOMT-nS1XNbrrAirLaJm8U",
        "createdAt": "2022-05-16 13:43:08",
        "updatedAt": "2022-05-18 18:34:50"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
