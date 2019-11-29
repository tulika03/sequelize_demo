'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_masters', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      
      user_type_id: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'user_type_masters',
          key: 'user_type_id'
        }
      },
      user_salutation: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
  
      first_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      
      last_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
  
      email_id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
  
      password: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
  
      is_verified: {
        type: Sequelize.TINYINT(4),
        allowNull: false,
        default: 0
      },
  
      is_active: {
        type: Sequelize.TINYINT(4),
        allowNull: false,
        default: 1
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
    return queryInterface.dropTable('user_masters');
  }
};