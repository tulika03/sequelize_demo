'use strict';
const sequelize = require('sequelize')
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   let sql = `
        CREATE PROCEDURE GetCategories()
        BEGIN
            SELECT category_id,category_name from categories;
        END`

    return queryInterface.sequelize.query(sql,{type: sequelize.QueryTypes.RAW})
    .then(data => {
      console.log("stored procedure created..")
    })
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
