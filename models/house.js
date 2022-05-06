'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    House.hasOne(models.Character);    }
  }
  House.init({
    name: DataTypes.STRING,
    sigil: DataTypes.STRING,
    head: DataTypes.STRING,
    extinct: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'House',
  });
  return House;
};