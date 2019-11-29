'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

   try {
    await    queryInterface.changeColumn('categories', 'createdAt',
    {
      type: Sequelize.BIGINT,
      defaultValue: new Date().getTime()
    });
    await queryInterface.changeColumn('categories', 'updatedAt', {
      type: Sequelize.BIGINT,
      defaultValue: new Date().getTime()
    });

    await    queryInterface.changeColumn('items', 'createdAt',
    {
      type: Sequelize.BIGINT,
      defaultValue: new Date().getTime()
    });
    await queryInterface.changeColumn('items', 'updatedAt', {
      type: Sequelize.BIGINT,
      defaultValue: new Date().getTime()
    });
    return Promise.resolve();
   }
   catch (e) {
     return Promise.reject(e)
   }
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
