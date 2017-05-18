var express = require('express');
var router = express.Router();
var db = require('../models')
var helper = require('../helper/help')


router.get('/', function(req, res, next) {
  let session = req.session.user
  if (!session) {
    res.render('signup', { title: 'Express',session:session });
  } else {
    res.redirect('/')
  }
});

router.post('/', function(req, res, next) {
  let session = req.session.user
  if (!session) {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      profpic_path: null
    })
    .then(()=>{
      res.redirect('/')
    })
    .catch(err=>{
      console.log(err.message);
      res.redirect('/signup')
    })
  } else {
    res.redirect('/')
  }
});
module.exports = router;
