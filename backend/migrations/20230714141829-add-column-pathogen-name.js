'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn(
      'pathogen',
      'name',
      {
        type: Sequelize.STRING,
      }
    );

  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.removeColumn(
      'pathogen',
      'name'
    );
  }
}