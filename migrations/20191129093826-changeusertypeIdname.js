'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
 return  queryInterface.renameColumn('user_type_masters', 'id', 'user_type_id')
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
