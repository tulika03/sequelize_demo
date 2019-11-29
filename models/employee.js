'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    employee_name: DataTypes.STRING,
    employee_dob: DataTypes.BIGINT,
    employee_address: DataTypes.STRING,
    employee_city: DataTypes.STRING,
    employee_email: DataTypes.STRING,
    employee_contact_no: DataTypes.BIGINT,
    companyId: DataTypes.INTEGER
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here

    Employee.belongsTo(models.Company, {
      foreignKey: 'comapnyId'
    })
  };
  return Employee;
};