'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      manageUsers: {
        type: Sequelize.BOOLEAN
      },
      resetToken: {
        type: Sequelize.STRING
      },
      emailAlerts: {type: Sequelize.BOOLEAN},
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
        
      }
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};