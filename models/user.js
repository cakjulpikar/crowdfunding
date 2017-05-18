'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate:{
        isUnique:(value,next)=>{
          User.findOne({where:{username:value}})
          .then(username=>{
            if(username){
              next('username must be unique')
            } else {
              next()
            }
          })
        }
      }
    },
    password: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate:{
        isUnique:(value,next)=>{
          User.findOne({where:{email:value}})
          .then(email=>{
            if(email){
              next('email must be unique')
            } else {
              next()
            }
          })
        }
      }
    },
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
