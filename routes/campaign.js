var express = require('express');
var router = express.Router();
var db = require('../models')
var helper = require('../helper/help')

router.get('/create',function(req,res,next){
  let session = req.session.user
  if(session){
    res.render('create-campaign', {session:session})
  }else{
    res.redirect('/')
  }
})

router.post('/create',function(req,res,next){
  let session = req.session.user
  if (session) {
    db.Campaign.create({
      title: req.body.title,
      goal: req.body.goal,
      desc: req.body.desc,
      starter_id:session.id
    })
    .then(campaign=>{
      res.redirect(`/users/${session.id}`)
    })
    .catch(err=>{
      console.log(err.message);
      res.redirect('/campaign/create')
    })
  } else {
    res.redirect('/')
  }
})

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
router.get('/edit/:id', function(req, res, next){
  let session = req.session.user
  if(session){
    db.Campaign.findOne({
      where : {id : req.params.id},
      include:[{model:db.User},{model:db.Donation}]
    })
    .then(function(campaign) {
      if(session.id==campaign.starter_id){
        res.render('edit-campaign', {campaign:campaign,session:session,sumAmount:helper.sumAmount})
      }else{
        res.redirect('/')
      }
    })
  }else{
    res.redirect('/')
  }
});

router.post('/edit/:id',function(req,res,next){
  let id = req.params.id
  db.Campaign.findById(id)
  .then(campaign=>{
    campaign.update({
      goal:req.body.goal,
      desc:req.body.desc
    })
    .then(()=>{
      res.redirect(`/campaign/${id}`)
    })
    .catch(err=>{
      console.log(err.message);
    })
  })
})


module.exports = router;
