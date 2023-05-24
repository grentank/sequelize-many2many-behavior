const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Review, Product }) {
      // this.hasMany(Review, { foreignKey: 'userId' });
      this.belongsToMany(Product, { foreignKey: 'userId', through: 'Reviews' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
