'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return Promise.all([
     queryInterface.renameColumn('branches', 'id', 'branch_id'),
      queryInterface.addConstraint('employees', ['companyId'], {
        type: 'foreign key',
        name: 'company_id_fk_employees',
        references: {
          table: 'companies', 
          field: 'company_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),

      queryInterface.addConstraint('branches', ['companyId'], {
        type: 'foreign key',
        name: 'company_id_fk_branches',
        references: {
          table: 'companies', 
          field: 'company_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    ])
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
