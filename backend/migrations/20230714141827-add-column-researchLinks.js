'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn(
      'ticks',
      'researchLinks',
      {
        type: Sequelize.TEXT,
      }
    );

  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.removeColumn(
      'ticks',
      'researchLinks'
    );
  }
}