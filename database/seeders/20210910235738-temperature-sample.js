'use strict';

const addDays = function (date, days) {
  var newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}

module.exports = {

  up: async (queryInterface, Sequelize) => {
    const samples = [
      { value: 10.1, sampleDate: new Date(2021, 7, 1), createdAt: new Date(), updatedAt: new Date() },
      { value: 20.2, sampleDate: new Date(2021, 7, 2), createdAt: new Date(), updatedAt: new Date() },
      { value: 25.4, sampleDate: new Date(2021, 7, 3), createdAt: new Date(), updatedAt: new Date() },
      { value: 17.8, sampleDate: new Date(2021, 7, 4), createdAt: new Date(), updatedAt: new Date() },
      { value: 14.3, sampleDate: new Date(2021, 7, 5), createdAt: new Date(), updatedAt: new Date() },
      { value: 12.5, sampleDate: new Date(2021, 7, 6), createdAt: new Date(), updatedAt: new Date() },
      { value: 9.7, sampleDate: new Date(2021, 7, 7), createdAt: new Date(), updatedAt: new Date() },
      { value: 32.9, sampleDate: new Date(2021, 7, 8), createdAt: new Date(), updatedAt: new Date() },
      { value: 36.0, sampleDate: new Date(2021, 7, 9), createdAt: new Date(), updatedAt: new Date() },
      { value: 40.0, sampleDate: new Date(2021, 7, 10), createdAt: new Date(), updatedAt: new Date() },
      { value: 10.2, sampleDate: new Date(2021, 7, 11), createdAt: new Date(), updatedAt: new Date() },
      { value: 20.3, sampleDate: new Date(2021, 7, 12), createdAt: new Date(), updatedAt: new Date() },
      { value: 25.4, sampleDate: new Date(2021, 7, 13), createdAt: new Date(), updatedAt: new Date() },
      { value: 17.5, sampleDate: new Date(2021, 7, 14), createdAt: new Date(), updatedAt: new Date() },
      { value: 14.6, sampleDate: new Date(2021, 7, 15), createdAt: new Date(), updatedAt: new Date() },
      { value: 12.7, sampleDate: new Date(2021, 7, 16), createdAt: new Date(), updatedAt: new Date() },
      { value: 9.8, sampleDate: new Date(2021, 7, 17), createdAt: new Date(), updatedAt: new Date() },
      { value: 32.9, sampleDate: new Date(2021, 7, 18), createdAt: new Date(), updatedAt: new Date() },
      { value: 36.0, sampleDate: new Date(2021, 7, 19), createdAt: new Date(), updatedAt: new Date() },
      { value: 40.0, sampleDate: new Date(2021, 7, 20), createdAt: new Date(), updatedAt: new Date() }
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
