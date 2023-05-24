const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ User, Review }) {
      // this.hasMany(Review, { foreignKey: 'productId' });
      this.belongsToMany(User, { foreignKey: 'productId', through: 'Reviews' });
    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    },
  );
  return Product;
};
