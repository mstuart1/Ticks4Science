'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.changeColumn(
      'submission_pathogen',
      'result',
      {
        type: Sequelize.STRING,
        defaultValue: 'pending',
        allowNull: false,
      }
    );

  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.changeColumn(
      'submission_pathogen',
      'result',
      {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      }
    );
  }
}