const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate({ User, Product }) {
      // this.belongsTo(User, { foreignKey: 'userId' });
      // this.belongsTo(Product, { foreignKey: 'productId' });
    }
  }
  Review.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      body: DataTypes.TEXT,
      rating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Review',
    },
  );
  return Review;
};
