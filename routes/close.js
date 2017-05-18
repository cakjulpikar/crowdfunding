var express = require('express');
var router = express.Router();
var db = require('../models')
var helper = require('../helper/help')


router.get('/:id',function(req,res,next){
  let session = req.session.user
  db.Campaign.findOne({
    where : {id : req.params.id},
    include:[{model:db.User},{model:db.Donation}]
  })
  .then(campaign=>{
    res.render('campaign',{campaign:campaign,session:session,sumAmount:helper.sumAmount})
  })
})
module.exports = router;
