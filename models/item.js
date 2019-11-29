'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    item_name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    item_desc:{ type: DataTypes.STRING, references: {
      model: 'categories',
      key: 'category_id'
    }},
    date_of_man: DataTypes.BIGINT,
    date_of_exp: DataTypes.BIGINT
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.Category, {foreignKey: 'category_id', sourceCode: 'categoryId'})
  };
  return Item;
};