'use strict';

function doSomething() {
  return new Date()
}

// writes the body of a post request to logs
exports.doSomething = function(req, res) {
  res.send({date: doSomething()});
};
