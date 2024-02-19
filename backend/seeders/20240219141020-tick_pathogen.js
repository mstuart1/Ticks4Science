'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tick_pathogen',[
  {
    "id": 1,
    "tickId": 1,
    "pathogenId": 1,
    "createdAt": "2023-07-20 13:48:35",
    "updatedAt": "2023-07-20 13:48:35",
    "deletedAt": null
  },
  {
    "id": 2,
    "tickId": 1,
    "pathogenId": 3,
    "createdAt": "2023-07-20 13:48:41",
    "updatedAt": "2023-07-20 13:48:41",
    "deletedAt": null
  },
  {
    "id": 3,
    "tickId": 1,
    "pathogenId": 4,
    "createdAt": "2023-07-20 13:48:47",
    "updatedAt": "2023-07-20 13:48:47",
    "deletedAt": null
  },
  {
    "id": 4,
    "tickId": 1,
    "pathogenId": 11,
    "createdAt": "2023-07-20 13:48:50",
    "updatedAt": "2023-07-20 13:48:50",
    "deletedAt": "2023-09-29 22:27:58"
  },
  {
    "id": 5,
    "tickId": 2,
    "pathogenId": 5,
    "createdAt": "2023-07-20 13:49:31",
    "updatedAt": "2023-07-20 13:49:31",
    "deletedAt": null
  },
  {
    "id": 6,
    "tickId": 2,
    "pathogenId": 6,
    "createdAt": "2023-07-20 13:49:31",
    "updatedAt": "2023-07-20 13:49:31",
    "deletedAt": null
  },
  {
    "id": 7,
    "tickId": 3,
    "pathogenId": 9,
    "createdAt": "2023-07-20 13:49:54",
    "updatedAt": "2023-07-20 13:49:54",
    "deletedAt": null
  },
  {
    "id": 8,
    "tickId": 1,
    "pathogenId": 6,
    "createdAt": "2023-07-21 20:56:24",
    "updatedAt": "2023-07-21 20:56:24",
    "deletedAt": "2023-07-21 20:56:29"
  },
  {
    "id": 9,
    "tickId": 1,
    "pathogenId": 12,
    "createdAt": "2023-07-21 20:57:22",
    "updatedAt": "2023-07-21 20:57:22",
    "deletedAt": "2023-09-29 22:27:59"
  },
  {
    "id": 10,
    "tickId": 1,
    "pathogenId": 2,
    "createdAt": "2023-09-29 22:27:44",
    "updatedAt": "2023-09-29 22:27:44",
    "deletedAt": null
  },
  {
    "id": 11,
    "tickId": 1,
    "pathogenId": 11,
    "createdAt": "2023-10-02 20:07:37",
    "updatedAt": "2023-10-02 20:07:37",
    "deletedAt": "2023-10-02 20:23:45"
  },
  {
    "id": 12,
    "tickId": 1,
    "pathogenId": 12,
    "createdAt": "2023-10-02 20:07:38",
    "updatedAt": "2023-10-02 20:07:38",
    "deletedAt": "2023-10-02 20:23:46"
  },
  {
    "id": 13,
    "tickId": 1,
    "pathogenId": 13,
    "createdAt": "2023-10-10 10:57:54",
    "updatedAt": "2023-10-10 10:57:54",
    "deletedAt": "2023-10-10 10:57:56"
  }
], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tick_pathogen', null, {});
  }
};
