'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
  {
    "id": 1,
    "firstName": "Michelle",
    "lastName": "Stuart",
    "email": "michelle.stuart@rutgers.edu",
    "password": "$2b$10$s6EI7WAxhAzgjMes51Vf1.RiA6XsRV2Ty6XkCp8GmyFGVlBQ3uM7m",
    "manageUsers": 1,
    "resetToken": null,
    "emailAlerts": 0,
    "createdAt": "2022-05-16 13:43:08",
    "updatedAt": "2023-07-24 17:50:21",
    "deletedAt": null,
    "editData": 1,
    "editPathogens": "1"
  },
  {
    "id": 4,
    "firstName": "Kayla",
    "lastName": null,
    "email": "vuosok98@gmail.com",
    "password": null,
    "manageUsers": null,
    "resetToken": null,
    "emailAlerts": 0,
    "createdAt": "2022-06-10 17:20:48",
    "updatedAt": "2022-08-18 22:22:51",
    "deletedAt": "2022-08-18 22:22:51",
    "editData": null,
    "editPathogens": null
  },
  {
    "id": 5,
    "firstName": "Dina",
    "lastName": "Fonseca",
    "email": "dina.fonseca@rutgers.edu",
    "password": "$2b$10$cj2Vtu3uiYSWdLtTwDxxBuJWoIuNyvrBqCxF8iM7PfDbd/hrW4gQC",
    "manageUsers": 1,
    "resetToken": null,
    "emailAlerts": 1,
    "createdAt": "2022-06-10 17:21:47",
    "updatedAt": "2023-09-06 09:08:26",
    "deletedAt": null,
    "editData": 1,
    "editPathogens": "1"
  },
  {
    "id": 6,
    "firstName": "Andrea",
    "lastName": null,
    "email": "andrea.egizi@co.monmouth.nj.us",
    "password": "$2b$10$9FSWrAjVgnMOvp443YRSzOedovvQ3EG75giErIVTeBa9CNvH0JY0C",
    "manageUsers": null,
    "resetToken": null,
    "emailAlerts": 1,
    "createdAt": "2022-06-10 17:21:55",
    "updatedAt": "2023-10-16 14:32:46",
    "deletedAt": null,
    "editData": 1,
    "editPathogens": null
  },
  {
    "id": 7,
    "firstName": "Jim",
    "lastName": "Occi",
    "email": "occijl@sebs.rutgers.edu",
    "password": "$2b$10$J6cgardKbmInP31Ox6KkBOBkJ2rm743RYxrv104LkN6tWRX/oyNUi",
    "manageUsers": null,
    "resetToken": null,
    "emailAlerts": 1,
    "createdAt": "2022-07-26 11:09:24",
    "updatedAt": "2022-09-05 12:36:23",
    "deletedAt": null,
    "editData": 1,
    "editPathogens": null
  },
  {
    "id": 11,
    "firstName": null,
    "lastName": null,
    "email": "hib.jamil@gmail.com",
    "password": null,
    "manageUsers": null,
    "resetToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjA4NDAwOTksImV4cCI6MTY2MDkyNjQ5OX0.l-b1vlCX8BdDy2yVtoM6Vy7XKl3WggdmqYX7Ds-XoW4",
    "emailAlerts": null,
    "createdAt": "2022-08-18 16:26:36",
    "updatedAt": "2022-08-18 16:29:38",
    "deletedAt": "2022-08-18 16:29:38",
    "editData": null,
    "editPathogens": null
  },
  {
    "id": 12,
    "firstName": "Hiba",
    "lastName": "Jamil",
    "email": "hj387@scarletmail.rutgers.edu",
    "password": "$2b$10$KvQjeYhbjaahJPjlULg/r.06Y/RD8WtskjkXs5dfBKhaknWF1UPWK",
    "manageUsers": 0,
    "resetToken": null,
    "emailAlerts": null,
    "createdAt": "2022-08-18 16:29:15",
    "updatedAt": "2022-08-18 22:22:25",
    "deletedAt": "2022-08-18 22:22:25",
    "editData": 1,
    "editPathogens": null
  },
  {
    "id": 13,
    "firstName": "Emily",
    "lastName": "Fontaine",
    "email": "emily.fontaine@rutgers.edu",
    "password": "$2b$10$UPzstMaTRrvB3y.siCEvROj0aYTNzVu9EYcGVUM3dxXEGbDGTI/yW",
    "manageUsers": null,
    "resetToken": null,
    "emailAlerts": 1,
    "createdAt": "2023-01-04 14:47:27",
    "updatedAt": "2023-07-20 13:53:54",
    "deletedAt": null,
    "editData": 1,
    "editPathogens": "0"
  },
  {
    "id": 14,
    "firstName": "Sid",
    "lastName": "Suppiah",
    "email": "ss3872@scarletmail.rutgers.edu",
    "password": "$2b$10$wRt2TFQbV//eQoCBnTX0S.QuHT0o0AFJcORvaJVCJKX/H9xiLgwii",
    "manageUsers": null,
    "resetToken": null,
    "emailAlerts": 1,
    "createdAt": "2023-08-01 01:40:36",
    "updatedAt": "2023-08-17 20:39:31",
    "deletedAt": null,
    "editData": 1,
    "editPathogens": null
  }
], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
