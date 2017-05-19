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
    res.render('index', { title: 'Mutualizm',session:session,campaigns:campaigns,sumAmount:helper.sumAmount });
  })
});

router.get('/about', function(req, res, next) {
  let session = req.session.user
  res.render('about', { title: 'Mutualizm',session:session });
});

router.get('/logout', function(req, res, next) {
  req.session.user = null
  let session = req.session.user
  res.render('logout', { title: 'Mutualizm',session:session });
});


module.exports = router;
