'use strict';
module.exports = (sequelize, DataTypes) => {
  const organization_department = sequelize.define('organization_department', {
    org_dept_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    organization_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'organization_masters',
        key: 'organization_id'
      }
    },
    dept_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'department_masters',
        key: 'dept_id'
      }
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
  organization_department.associate = function(models) {
    // associations can be defined here
    organization_department.belongsTo(models.organization_master, {foreignKey: 'organization_id', sourceCode: 'organization_id'})
    organization_department.belongsTo(models.department_master, {foreignKey: 'dept_id', sourceCode: 'dept_id'})
  };
  return organization_department;
};