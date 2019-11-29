'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    category_name: DataTypes.STRING,
    category_code: {type: DataTypes.STRING, unique: true},
    createdAt: {
      type: DataTypes.BIGINT,
      defaultValue: new Date().getTime()
    },
    updatedAt: {
      type: DataTypes.BIGINT,
      defaultValue: new Date().getTime()
    }
  }, {});
  Category.associate = function(models) {
    // associations can be defined here

    Category.hasMany(models.Item, {
      foreignKey : 'category_id', sourceCode: 'categoryId'
    })
  };
  return Category;
};