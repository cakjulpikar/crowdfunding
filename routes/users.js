var express = require('express');
var router = express.Router();
var db = require('../models')
var helper = require('../helper/help')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let session = req.session.user
  db.Campaign.findAll({
    where : {starter_id : req.params.id},
    include:[{model:db.User},{model:db.Donation}]
  })
  .then(function(campaigns) {
    res.render('user', {campaigns : campaigns,session:session,sumAmount:helper.sumAmount})
  })
});

module.exports = router;
