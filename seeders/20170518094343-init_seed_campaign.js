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
    return queryInterface.bulkInsert('Campaigns', [{
      title : "Bantu Wujudkan Perpustakaan Jalanan Pos Duri",
      desc : ,
      goal : ,
      starter_id
    },{
      title : "",
      desc : ,
      goal : ,
      starter_id
    },{
      title : ,
      desc : ,
      goal : ,
      starter_id
    },{
      title : ,
      desc : ,
      goal : ,
      starter_id
    },{
      title : ,
      desc : ,
      goal : ,
      starter_id
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
