var supertest = require('supertest')
var should = require('should')
var config = require('../config/config')

// This agent refers to PORT where program is runninng.

var server = supertest.agent('http://localhost:' + config.port)

describe('root test',function(){

  // #1 should return home page

  it('should return basic information',function(done){

    // calling home page api
    server
    .get('/')
    .expect('Content-type',/json/)
    .expect(200) // THis is HTTP response
    .end(function(err, res) {
      // HTTP status should be 200
      res.status.should.equal(200)
      // 'stable-version should be v1.0'
      res.body['stable-version'].should.equal('v1.0')
      done()
    })
  })

})

describe('representitive test',function(){
  // #1 should return home page
  it('should return all representitive on first page', function(done) {

    // calling representitive api
    server
    .get('/' + config.version + '/representitive')
    .expect('Content-type',/json/)
    .expect(200) // THis is HTTP response
    .end(function(err, res) {
      // HTTP status should be 200
      res.status.should.equal(200)
      // the number of representitives are ** on first page
      res.body.length.should.equal(10)
      done()
    })
  })
})
