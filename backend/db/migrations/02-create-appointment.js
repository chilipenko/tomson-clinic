'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DateAndTime: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DATE
      },
      CellPhone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      FormName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ClientFullName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      PlanStart: {
        allowNull: false,
        type: Sequelize.DATE
      },
      DoctorName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Appointments');
  }
};
