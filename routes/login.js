var express = require('express');
var router = express.Router();
var db = require('../models')
var helper = require('../helper/help')


router.get('/', function(req, res, next) {
  let session = req.session.user
  if (!session) {
    res.render('login', { title: 'Express',session:session });
  } else {
    res.redirect('/')
  }
});

router.post('/', function(req, res, next) {
  let session = req.session.user
  if (!session) {
    db.User.findOne({where:{username: req.body.username}})
    .then(user=>{
      if(user.password==req.body.password){
        req.session.user = user;
        res.redirect(`/`)
      } else {
        res.redirect('/login')
      }
    })
    .catch(err=>{
      console.log(err.message);
      res.redirect('/')
    })
  } else {
    res.redirect('/')
  }
});

module.exports = router;
