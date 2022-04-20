'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('submission', [
      {
        "id": 1,
        "tickId": null,
        "dateSubmitted": null,
        "userMuni": "Walker",
        "userZip": 8901,
        "dateTickFound": "2022-04-05 00:00:00",
        "foundOn": "Environment/Outside",
        "foundOnOther": null,
        "tickAttached": null,
        "animal": null,
        "dateRemoved": null,
        "tickLocation": null,
        "locationDesc": "Recreational area outside",
        "locationDescOther": null,
        "tickMuni": "Newton",
        "tickCounty": "New Jersey",
        "tickZip": 8904,
        "activities": null,
        "personBitten": null,
        "submitterBitten": null,
        "bittenMuni": null,
        "bittenZip": null,
        "bittenTraveledDom": null,
        "bittenTraveledIntl": null,
        "travelInfo": null,
        "photoFrontUrl": "http://localhost:3003/public/tickImages/image-1650460822526.jpeg",
        "photoBackUrl": "http://localhost:3003/public/tickImages/image-1650460822632.jpeg",
        "photoOtherUrl": null,
        "additionalInfo": null,
        "photosReviewed": null,
        "specimenRequested": null,
        "specimenReceived": null,
        "specimenIdentified": null,
        "createdAt": "2022-04-20 13:20:22",
        "updatedAt": "2022-04-20 13:20:22"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('submission', null, {});
  }
};
