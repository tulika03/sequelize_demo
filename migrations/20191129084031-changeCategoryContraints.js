'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
try {
  await queryInterface.addConstraint('categories', ['category_code'], {
    type: 'unique',
    name: 'cc_unique'
  });

  await queryInterface.addConstraint('categories', ['category_name'], {
    type: 'unique',
    name: 'cn_unique'
  });
  return Promise.resolve();

}
catch(e) {
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
