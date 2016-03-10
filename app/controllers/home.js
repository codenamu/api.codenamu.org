var express = require('express')
var router = express.Router()
var v1_0 = require('./v1_0')

module.exports = function (app) {
  app.use('/v1.0', v1_0())

  app.get('*', function (req, res) {
    res.json({
      'stable-version': 'v1.0'
    })
  })
}
