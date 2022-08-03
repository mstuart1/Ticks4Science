'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        "id": 8,
        "firstName": "Michelle",
        "lastName": "Stuart",
        "email": "michelle.stuart@rutgers.edu",
        "password": "$2a$12$mOFs2OdijL/n6pzIBK7B8.lrF4ffniDw52eXL5c6E4QOjVjeGrzLC",
        "manageUsers": 1,
        "resetToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ3JhbnQiOm51bGwsImlhdCI6MTY1Mjg5ODg5MCwiZXhwIjoxNjUyOTg1MjkwfQ.B3YiIuiT3F7Xa19PMXHBGTOMT-nS1XNbrrAirLaJm8U",
        "emailAlerts": 1,
        "createdAt": "2022-05-16 13:43:08",
        "updatedAt": "2022-05-18 18:34:50",
        "deletedAt": null
      },
      {
        "id": 7,
        "firstName": "Kayla",
        "lastName": null,
        "email": "vuosok98@gmail.com",
        "password": null,
        "manageUsers": null,
        "resetToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTQ4ODE2NDgsImV4cCI6MTY1NDk2ODA0OH0.Ytx3FS2yNzbMm9GUvJScY6bYJETxQ0As9rqFRE-438Q",
        "emailAlerts": null,
        "createdAt": "2022-06-10 17:20:48",
        "updatedAt": "2022-06-10 17:20:48",
        "deletedAt": null
      },
      {
        "id": 5,
        "firstName": "Dina",
        "lastName": "Fonseca",
        "email": "dina.fonseca@rutgers.edu",
        "password": "$2b$10$lb07k/OTD6plAjHErn1k4Ol8szyT9N7acwm3x5fdQbArWtWZtIPsm",
        "manageUsers": 1,
        "resetToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTQ4ODE3MDcsImV4cCI6MTY1NDk2ODEwN30.XN_kNHnSS7TehJewdlwazgke00pG5d6TqeN7Dqg5jWU",
        "emailAlerts": 1,
        "createdAt": "2022-06-10 17:21:47",
        "updatedAt": "2022-06-10 17:29:00",
        "deletedAt": null
      },
      {
        "id": 6,
        "firstName": "Andrea",
        "lastName": null,
        "email": "andrea.egizi@co.monmouth.nj.us",
        "password": "$2b$10$ybZaisXRerF0E9Ca8xVLVuiRP7ogoAIFpiIcVUhaM5eLdNEbTRVIW",
        "manageUsers": null,
        "resetToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTQ4ODE3MTUsImV4cCI6MTY1NDk2ODExNX0.iarjpDd6nykj_Kz_ppqYLVrl4ewgB-Ic8navRDIUGBU",
        "emailAlerts": 1,
        "createdAt": "2022-06-10 17:21:55",
        "updatedAt": "2022-06-23 13:55:09",
        "deletedAt": null
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
