'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TemperatureSample extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TemperatureSample.init({
    value: DataTypes.DECIMAL,
    sampleDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'TemperatureSample',
  });
  return TemperatureSample;
};