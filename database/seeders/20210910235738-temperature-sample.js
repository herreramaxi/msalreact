'use strict';

const addDays = function (date, days) {
  var newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}

module.exports = {

  up: async (queryInterface, Sequelize) => {
    const samples = [
      { value: 10, sampleDate: new Date(2021, 1, 1), createdAt: new Date(), updatedAt: new Date() },
      { value: 20, sampleDate: new Date(2021, 1, 2), createdAt: new Date(), updatedAt: new Date() },
      { value: 25, sampleDate: new Date(2021, 1, 3), createdAt: new Date(), updatedAt: new Date() },
      { value: 17, sampleDate: new Date(2021, 1, 4), createdAt: new Date(), updatedAt: new Date() },
      { value: 14, sampleDate: new Date(2021, 1, 5), createdAt: new Date(), updatedAt: new Date() },
      { value: 12, sampleDate: new Date(2021, 1, 6), createdAt: new Date(), updatedAt: new Date() },
      { value: 9, sampleDate: new Date(2021, 1, 7), createdAt: new Date(), updatedAt: new Date() },
      { value: 32, sampleDate: new Date(2021, 1, 8), createdAt: new Date(), updatedAt: new Date() },
      { value: 36, sampleDate: new Date(2021, 1, 9), createdAt: new Date(), updatedAt: new Date() },
      { value: 40, sampleDate: new Date(2021, 1, 10), createdAt: new Date(), updatedAt: new Date() },
    ]

    return queryInterface.bulkInsert('TemperatureSamples', samples);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('TemperatureSamples', null, {});
  }
};
