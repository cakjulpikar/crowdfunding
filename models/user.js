'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    profpic_path: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Donation, {foreignKey : 'donor_id'})
        User.hasMany(models.Campaign, {foreignKey : 'starter_id'})
      }
    }
  });
  return User;
};
