'use strict';
module.exports = function(sequelize, DataTypes) {
  var Campaign = sequelize.define('Campaign', {
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    goal: DataTypes.INTEGER,
    starter_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Campaign.hasMany(models.Donation, {foreignKey : 'campaign_id'})
        Campaign.belongTo(models.User, {foreignKey : 'starter_id'})
      }
    }
  });
  return Campaign;
};
