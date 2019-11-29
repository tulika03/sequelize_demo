'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('department_masters', {
      dept_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      dept_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },

      created_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'user_masters',
          key: 'user_id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.BIGINT(20)
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.BIGINT(20)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('department_masters');
  }
};