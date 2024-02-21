'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn(
      'submission',
      'citizenId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: "citizen",
          key: "id",
        },
      }
    );

  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.removeColumn(
      'submission',
      'citizenId'
    );
  }
}