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
      common: {
        type: Sequelize.STRING
      },
      scientific: {
        type: Sequelize.STRING
      },
      humanHosts: {
        type: Sequelize.BOOLEAN,
      },
      intro: {type: Sequelize.TEXT},
      
      hosts: {
        type: Sequelize.TEXT
      },
      habitat: {
        type: Sequelize.STRING
      },
      njLocations: {
        type: Sequelize.TEXT
      },
      activeMonths: {
        type: Sequelize.TEXT,
      },
      buttonImgUrl: {type: Sequelize.STRING},
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
      },
      deletedAt: {
        
        type: Sequelize.DATE,
        
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ticks');
  }
};