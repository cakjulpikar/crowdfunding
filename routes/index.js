var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  let session = req.session.user
  res.render('index', { title: 'Express',session:session });
});

module.exports = router;
