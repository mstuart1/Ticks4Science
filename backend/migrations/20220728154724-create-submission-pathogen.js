'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('submission_pathogens', {
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
        references: {model: 'pathogens', key: 'id'},
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('submission_pathogens');
  }
};