var express = require('express')
var router = express.Router()
var representitive = require('./representitive')

module.exports = function (app) {
  router.use('/representitive', representitive())

  router.get('*', function(req, res) {
    res.json({
      version: '1.0',
      createdAt: '20160321',
      description: ''
    })
  })

  return router
}
