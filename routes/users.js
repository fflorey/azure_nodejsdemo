var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  var iName = req.session.importantName;
  if ( iName == ""  ) {
    iName = "NIX";
  }
  res.render('index', {} );
  
  
});

module.exports = router;
