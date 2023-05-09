'use strict';
const { Model } = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Photo)
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user) => {
        const hashedPassword = hashPassword(user.Password)
        user.Password = hashedPassword
      }
    }
  });
  return User;
};