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

router.get('/signup', function(req, res, next) {
  let session = req.session.user
  if (!session) {
    res.render('signup', { title: 'Express',session:session });
  } else {
    res.redirect('/')
  }
});

router.post('/signup', function(req, res, next) {
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

router.get('/login', function(req, res, next) {
  let session = req.session.user
  if (!session) {
    res.render('login', { title: 'Express',session:session });
  } else {
    res.redirect('/')
  }
});

router.post('/login', function(req, res, next) {
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
  } else {
    res.redirect('/')
  }
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
