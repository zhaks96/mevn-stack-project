const express = require('express');
const postRoute = express.Router();

let PostModel = require('../models/Post');


//get posts
postRoute.route('/get').get((req, res, next) => {
  PostModel.find((err, data) => {
    if(err){
      return next(err)
    }else{
      res.json(data)
    }
  })
})

//create post
postRoute.route('/create-post').post((req, res, next) => {
  PostModel.create(req.body, (err, data) => {
    if(err) {
      return next(err)
    }else{
      res.json(data)
    }
  })
})

//update post
postRoute.route('/update-post/:id').put((req, res, next) => {
  PostModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, data) => {
    if(err) {
      return next(err)
    }else{
      res.json(data)
      console.log('updated')
    }
  })
})

//delete post
postRoute.route('/remove-post/:id').delete((req, res, next) => {
  PostModel.findByIdAndRemove(req.params.id, (err, data) => {
    if(err) {
      return next(err)
    }else{
      res.status(200).json({
        msg: data
      })
      console.log('removed')
    }
  })
})

module.exports = postRoute