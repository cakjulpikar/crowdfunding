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
    return queryInterface.bulkInsert('Users', [{
      username : "aldyadk",
      password : "aldyadk",
      email : "aldyadk@gmail.com",
      profpic_path : null,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username : "zlfikaraa",
      password : "zoelfiekar",
      email : "zlfikar@gmail.com",
      profpic_path : null,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username : "johndoe",
      password : "johndoe",
      email : "johndoe@gmail.com",
      profpic_path : null,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username : "alexdumas",
      password : "alexdumas",
      email : "alexdumas@gmail.com",
      profpic_path : null,
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
    return queryInterface.bulkDelete('Users', [{
      username : "aldyadk",
      password : "aldyadk",
      email : "aldyadk@gmail.com",
      profpic_path : null,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username : "zlfikaraa",
      password : "zoelfiekar",
      email : "zlfikar@gmail.com",
      profpic_path : null,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username : "johndoe",
      password : "johndoe",
      email : "johndoe@gmail.com",
      profpic_path : null,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username : "alexdumas",
      password : "alexdumas",
      email : "alexdumas@gmail.com",
      profpic_path : null,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username : "aramis",
      password : "aramis",
      email : "aramis@gmail.com",
      profpic_path : null,
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  }
};
