'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_master = sequelize.define('user_master', {
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    user_type_id: {
      type: DataTypes.INTEGER(11),
      references: {
        model: 'user_type_masters',
        key: user_type_id
      }
    },
    user_salutation: {
      type: DataTypes.STRING(10),
      allowNull: false
    },

    first_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    
    last_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },

    email_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },

    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },

    is_verified: {
      type: DataTypes.TINYINT(4),
      allowNull: false,
      default: 0
    },

    is_active: {
      type: DataTypes.TINYINT(4),
      allowNull: false,
      default: 1
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.BIGINT(20),
      default: new Date().getTime()
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.BIGINT(20),
      default: new Date().getTime()
    }
  }, {});
  user_master.associate = function(models) {
    // associations can be defined here
    user_master.hasMany(models.department_master, {
      foreignKey : 'user_id', sourceCode: 'created_by'
    })

    user_master.hasMany(models.organization_master, {
      foreignKey : 'user_id', sourceCode: 'created_by'
    })

    user_master.belongsTo(models.user_type_master, {foreignKey: 'user_type_id', sourceCode: 'user_type_id'})
  };
  return user_master;
};