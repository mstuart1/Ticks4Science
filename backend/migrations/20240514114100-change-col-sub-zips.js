'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn(
        'submission',
        'userZip',
        {
          type: Sequelize.STRING,
        }
      ),
      queryInterface.changeColumn(
        'submission',
        'tickZip',
        {
          type: Sequelize.STRING,
        }
      ),
      queryInterface.changeColumn(
        'submission',
        'bittenZip',
        {
          type: Sequelize.STRING,
        }
      )
    ])
  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.changeColumn(
        'submission',
        'userZip',
        {
          type: Sequelize.DOUBLE,
        }
      ),
      queryInterface.changeColumn(
        'submission',
        'tickZip',
        {
          type: Sequelize.INTEGER,
        }
      ),
      queryInterface.changeColumn(
        'submission',
        'bittenZip',
        {
          type: Sequelize.DOUBLE,
        }
      )
    ])
 
  }
}