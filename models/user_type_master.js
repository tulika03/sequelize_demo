'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_type_master = sequelize.define('user_type_master', {
    user_type_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    user_role: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.BIGINT(20),
      defaultValue: new Date().getTime()
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.BIGINT(20),
      defaultValue: new Date().getTime()
    }
  }, {});
  user_type_master.associate = function(models) {
    // associations can be defined here
    user_type_master.hasMany(models.user_master, {
      foreignKey : 'user_type_id', sourceCode: 'user_type_id'
    })
  };
  return user_type_master;
};