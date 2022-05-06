'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Character.belongsTo(models.House);
    }
  }
  Character.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    alive: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};