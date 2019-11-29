'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('organization_masters', {
      organization_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      organization_name: {
        type: Sequelize.STRING(50),
        allowNull:false
      },
      address_1: {
        type: Sequelize.STRING(30),
        allowNull:false
      },
      address_2: {
        type: Sequelize.STRING(30),
        allowNull:true
      },
      city: {
        type: Sequelize.STRING(30),
        allowNull:false
      },
      state: {
        type: Sequelize.STRING(30),
        allowNull:false
      },

      pincode: {
        type: Sequelize.INTEGER(6),
        allowNull:false
      },
      created_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'user_masters',
          key: 'user_id'
        }
      },
      is_deleted: {
        type: Sequelize.TINYINT(4),
        allowNull: false,
        default: 0
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
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('organization_masters');
  }
};