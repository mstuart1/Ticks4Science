'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ticks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      scientific: {
        type: Sequelize.STRING
      },
      common: {
        type: Sequelize.STRING
      },
      intro: {type: Sequelize.TEXT},
      colors: {
        type: Sequelize.STRING
      },
      shape: {
        type: Sequelize.STRING
      },
      hosts: {
        type: Sequelize.TEXT
      },
      habitat: {
        type: Sequelize.STRING
      },
      njLocations: {
        type: Sequelize.TEXT
      },
      larvaeActive: { type: Sequelize.STRING },
      larvaeFeed: { type: Sequelize.STRING },
      nymphActive: { type: Sequelize.STRING },
      nymphFeed: { type: Sequelize.STRING },
      adultActive: { type: Sequelize.STRING },
      adultFeed: { type: Sequelize.STRING },
      featureImgUrl: {type:  Sequelize.STRING},
      mapImgUrl: {type:  Sequelize.STRING},
      refImgArray: {type: Sequelize.JSON},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ticks');
  }
};