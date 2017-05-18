'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Donations', [{
      donor_id: 4,
      campaign_id: 1,
      amount : 100000 ,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      donor_id: 4,
      campaign_id: 2,
      amount : 150000,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      donor_id: 3,
      campaign_id: 2,
      amount : 200000,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      donor_id: 4,
      campaign_id: 2,
      amount : 150000,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      donor_id: 3,
      campaign_id: 2,
      amount : 100000 ,
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
