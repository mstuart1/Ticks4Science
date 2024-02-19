'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('pathogen', [
  {
    "id": 1,
    "pathogen": "Bburg",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:32:50",
    "deletedAt": null,
    "name": "Borrelia burgdorferi"
  },
  {
    "id": 2,
    "pathogen": "Bmiya",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-09-29 22:27:02",
    "deletedAt": null,
    "name": "Borrelia miyamotoi"
  },
  {
    "id": 3,
    "pathogen": "Aphag",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:33:15",
    "deletedAt": null,
    "name": "Anaplasma phagocytophilum"
  },
  {
    "id": 4,
    "pathogen": "Bmicr",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:33:26",
    "deletedAt": null,
    "name": "Babesia microti"
  },
  {
    "id": 5,
    "pathogen": "Echaff",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:33:36",
    "deletedAt": null,
    "name": "Ehrlichia chaffeensis"
  },
  {
    "id": 6,
    "pathogen": "Eewing",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:39:53",
    "deletedAt": null,
    "name": "Ehrlichia ewingii"
  },
  {
    "id": 7,
    "pathogen": "Rambly",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:40:01",
    "deletedAt": null,
    "name": "Rickettsia amblyommatis"
  },
  {
    "id": 8,
    "pathogen": "Rrick",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:40:13",
    "deletedAt": null,
    "name": "Rickettsia rickettsii"
  },
  {
    "id": 9,
    "pathogen": "Rpark",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:40:22",
    "deletedAt": null,
    "name": "Rickettsia parkeri"
  },
  {
    "id": 10,
    "pathogen": "Rfelis",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:40:30",
    "deletedAt": null,
    "name": "Rickettsia felis"
  },
  {
    "id": 11,
    "pathogen": "POWV",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:40:39",
    "deletedAt": null,
    "name": "Powassan virus"
  },
  {
    "id": 12,
    "pathogen": "DTV",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:40:48",
    "deletedAt": null,
    "name": "Deer tick virus"
  },
  {
    "id": 13,
    "pathogen": "HRTV",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:40:57",
    "deletedAt": null,
    "name": "Heartland virus"
  },
  {
    "id": 14,
    "pathogen": "BRBV",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:41:04",
    "deletedAt": null,
    "name": "Bourbon virus"
  },
  {
    "id": 15,
    "pathogen": "Cfelis",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:41:13",
    "deletedAt": null,
    "name": "Cytauxzoon felis"
  },
  {
    "id": 16,
    "pathogen": "Hamer",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:41:21",
    "deletedAt": null,
    "name": "Hepatozoon americanum"
  },
  {
    "id": 17,
    "pathogen": "Torien",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:41:31",
    "deletedAt": null,
    "name": "Theileria orientalis"
  },
  {
    "id": 18,
    "pathogen": "Ecanis",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:41:42",
    "deletedAt": null,
    "name": "Ehrlichia canis"
  },
  {
    "id": 19,
    "pathogen": "TBD1",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:41:50",
    "deletedAt": null,
    "name": "to be determined1"
  },
  {
    "id": 20,
    "pathogen": "TBD2",
    "createdAt": "2022-08-03 14:07:12",
    "updatedAt": "2023-07-20 13:41:58",
    "deletedAt": null,
    "name": " to be determined2"
  },
  {
    "id": 21,
    "pathogen": "EmEuc",
    "createdAt": "2023-07-20 13:47:42",
    "updatedAt": "2023-07-20 13:47:42",
    "deletedAt": null,
    "name": "Ehrlichia muris eauclairensis"
  }
], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('pathogen', null, {});
  }
};
