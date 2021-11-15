'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Appointment.init({
    DateAndTime: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.DATE
    },
    CellPhone: {
      allowNull: false,
      type: DataTypes.STRING
    },
    FormName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    ClientFullName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    PlanStart: {
      allowNull: false,
      type: DataTypes.DATE
    },
    DoctorName: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};
