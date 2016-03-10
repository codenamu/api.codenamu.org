var express = require('express')
var router = express.Router()
var db = require('../../models')

module.exports = function (app) {
  router.get('/', function(req, res, next) {
    // db.Article.findAll()
    //   .then(function(representitives) {

    //   })
    res.json([{name: '장승훈'}])
  })

  return router
}
