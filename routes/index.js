var express = require('express');
var router = express.Router();
var db = require('../models')
var helper = require('../helper/help')

/* GET home page. */
router.get('/', function(req, res, next) {
  let session = req.session.user
  db.Campaign.findAll({include:[{
    model:db.User},{model:db.Donation}]
  })
  .then(campaigns=>{
    res.render('index', { title: 'Express',session:session,campaigns:campaigns,sumAmount:helper.sumAmount });
  })
});

router.get('/about', function(req, res, next) {
  let session = req.session.user
  res.render('about', { title: 'Express',session:session });
});

router.get('/logout', function(req, res, next) {
  req.session.user = null
  let session = req.session.user
  res.render('logout', { title: 'Express',session:session });
});


module.exports = router;
