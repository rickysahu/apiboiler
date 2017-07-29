/* jshint -W024 */
/* jshint expr:true */
var should = require("chai").should();
var base_url = 'http://localhost:1234/api/v1';
var logger = require('logops');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Server is running', function () {
  it("gets homepage", function(done) {
    chai.request(base_url)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
  it("does something", function(done) {
    chai.request(base_url)
      .get('/do-something')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property('date');
        done();
      });
  });
});
