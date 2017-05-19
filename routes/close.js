var express = require('express');
var router = express.Router();
var db = require('../models')
var helper = require('../helper/help')


router.get('/:id',function(req,res,next){
  let session = req.session.user
  db.Campaign.destroy({
    where : {id : req.params.id}
  })
  .then(()=>{
    res.redirect(`/users/${session.id}`)
  })
})
module.exports = router;
