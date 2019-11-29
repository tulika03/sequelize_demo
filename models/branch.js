'use strict';
module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define('Branch', {
    companId:{ type: DataTypes.INTEGER,
                allowNull: false},
    branch_name:{ allowNull: false, type: DataTypes.STRING},
    branch_address: DataTypes.STRING,
    branch_city: DataTypes.STRING
  }, {});
  Branch.associate = function(models) {
    // associations can be defined here

    Branch.belongsTo(models.Company, {
      foreignKey: 'comapnyId'
    })
  };
  return Branch;
};