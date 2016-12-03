var express = require('express');
var router = express.Router();
var debug = require('debug')('demo:server');

debug('Welcome page started, making call against something to get object ');

var person = { firstName:"John", lastName:"Doe", age:50, eyeColor:"blue" };

/* GET home page. */
router.get('/', function(req, res, next) {
    debug("session: " + req.sessionID);
    req.session.importantName = person.firstName;
  res.render('welcome', person );
});

module.exports = router;
