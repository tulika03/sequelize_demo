'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('organization_departments', {
      org_dept_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      organization_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'organization_masters',
          key: 'organization_id'
        }
      },
      dept_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'department_masters',
          key: 'dept_id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.BIGINT(20),
        default: new Date().getTime()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.BIGINT(20),
        default: new Date().getTime()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('organization_departments');
  }
};