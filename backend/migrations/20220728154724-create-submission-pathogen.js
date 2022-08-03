'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('submission_pathogen', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      submissionId: {
        type: Sequelize.INTEGER,
        references: {model: 'submission', key: 'id'},
        onDelete: 'CASCADE'
      },
      pathogenId: {
        type: Sequelize.INTEGER,
        references: {model: 'pathogen', key: 'id'},
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      deletedAt: {
        type: Sequelize.DATE,
      }
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('submission_pathogen');
  }
};