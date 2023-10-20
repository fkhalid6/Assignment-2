var express = require('express');
var router = express.Router();

/* GET home page. */
const welcomeStatement = {
  message: 'Welcome to DressStore application'
};
router.get('/', function(req, res, next) {
  res.send(welcomeStatement);
  
});

//
module.exports = router;
