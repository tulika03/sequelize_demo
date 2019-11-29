'use strict';
module.exports = (sequelize, DataTypes) => {
  const organization_master = sequelize.define('organization_master', {
    organization_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    organization_name: {
      type: DataTypes.STRING(50),
      allowNull:false
    },
    address_1: {
      type: DataTypes.STRING(30),
      allowNull:false
    },
    address_2: {
      type: DataTypes.STRING(30),
      allowNull:true
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull:false
    },
    state: {
      type: DataTypes.STRING(30),
      allowNull:false
    },

    pincode: {
      type: DataTypes.INTEGER(6),
      allowNull:false
    },
    created_by: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user_masters',
        key: 'user_id'
      }
    },
    is_deleted: {
      type: DataTypes.TINYINT(4),
      allowNull: false,
      default: 0
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
  organization_master.associate = function(models) {
    // associations can be defined here
    // organization_master.hasMany(models.user_master, {
    //   foreignKey : 'user_id', sourceCode: 'created_by'
    // })

    organization_master.belongsToMany(models.department_master, {
      through: 'organization_deparments',
      as: 'department_masters',
      foreignKey: 'organization_id',
      otherKey: 'department_id'
    })
   // organization_master.belongsTo(models.organization_department, {foreignKey: 'organization_id', sourceCode: 'organization_id'})
  };
  return organization_master;
};