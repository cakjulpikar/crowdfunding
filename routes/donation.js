var express = require('express');
var router = express.Router();
var db = require('../models')
var helper = require('../helper/help')

router.get('/:id',function(req,res,next){
  let session = req.session.user
  if(session){
    db.Campaign.findById(req.params.id)
    .then(campaign=>{
      res.render('create-donation', {campaign:campaign,session:session,id:req.params.id})
    })
    .catch(()=>{
      res.redirect('/')
    })
  }else{
    res.redirect('/')
  }
})

router.post('/:id',function(req,res,next){
  let session = req.session.user
  if(session){
    db.Donation.create({
      donor_id:session.id,
      campaign_id:req.params.id,
      amount:req.body.amount
    })
    .then(donation=>{
      res.render('thanks', {donation:donation,session:session})
    })
    .catch(()=>{
      res.redirect('/')
    })
  }else{
    res.redirect('/')
  }
})

module.exports = router;
