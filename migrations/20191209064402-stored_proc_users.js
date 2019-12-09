'use strict';
const sequelize = require('sequelize')
module.exports = {
  up: (queryInterface, Sequelize) => {
    let sql = `
    CREATE PROCEDURE GetUsers()
    BEGIN
        SELECT user_id,first_name,last_name,email_id from user_masters;
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
