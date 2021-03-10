const router = require("express").Router(); 
const Message = require('../models/Message.model'); 


// req.body {receipient, message}
//req.sessions.user 

router.post('/', (req, res, next) => {
  const {recipient, content} = req.body;
  console.log("USER ROUTE MESS", req.user._id)
  Message.create({ recipient, content, sender: req.user._id })
  .then(() =>{
    //res.redirect('/message'); 
  })
  .catch(err =>{
    next(err);
  })
}); 


// router.get('/history', (req, res, next) =>{
//  console.log("body", req.body, "params". req.params)
// })

router.get('/history', (req, res, next) =>{
  console.log('CHECK MESS', req.user)
  Message.find({$or : [{sender: req.user._id}, {recipient: req.user._id}]})
  .then(response => {
    console.log('RESPONSE BACKEND', response)
    res.json(response)
  })
  .catch(err =>{
    next(err);
  })
})


// router.get('/history', (req, res, next) =>{
//   console.log('CHECK MESS', req.user)
//   Message.find({$or : [{sender: req.user._id}, {recipient: req.user._id}]})
//   .then(response => {
//     console.log('RESPONSE BACKEND', response)
//     res.json(response)
//   })
//   .catch(err =>{
//     next(err);
//   })
// })





module.exports = router;