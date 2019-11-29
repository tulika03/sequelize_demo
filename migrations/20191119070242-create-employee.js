'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      company_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employee_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      employee_dob: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      employee_address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      employee_city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      employee_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      employee_contact_no: {
        type: Sequelize.BIGINT,
        allowNull: true,
        unique: true
      },
      companyId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Employees');
  }
};