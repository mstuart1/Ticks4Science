'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn(
      'message',
      'deletedBy',
      {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      }
    );

  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.removeColumn(
      'message',
      'deletedBy'
    );
  }
}