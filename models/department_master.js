'use strict';
module.exports = (sequelize, DataTypes) => {
  const department_master = sequelize.define('department_master', {
    dept_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    dept_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },

    created_by: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user_masters',
        key: 'user_id'
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.BIGINT(20)
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.BIGINT(20)
    }
  }, {});
  department_master.associate = function(models) {
    // associations can be defined here
    // department_master.hasMany(models.user_master, {
    //   foreignKey : 'user_id', sourceCode: 'created_by'
    // })

    department_master.belongsToMany(models.organization_master, {
      through: 'organization_deparments',
      as: 'organization_masters',
      foreignKey: 'department_id',
      otherKey: 'organization_id'
    })
  };
  return department_master;
};