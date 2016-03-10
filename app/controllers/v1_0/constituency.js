var express = require('express')
var router = express.Router()
var db = require('../../models')

module.exports = function (app) {
  /**
   * Search constituency for Nth National Assembly
   * @param  {[type]} req   [description]
   * @param  {[type]} res   [description]
   * @param  {[type]} next) {                           res.json([{name: '장승훈'}])  } [description]
   * @return {[type]}       [description]
   */
  router.get('/', function(req, res, next) {
    // db.Article.findAll()
    //   .then(function(representitives) {

    //   })
    res.json([{name: '장승훈'}])
  })

  return router
}
