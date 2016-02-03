var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var SECREET = require('../config');

// midlware function
router.use(function(req, res, next) {
    var token = req.headers.auth;

    jwt.verify(token, SECREET, function(tokenError) {
        if (tokenError) {
            return res.status(500).json({
              message: "Invalid token, please Log in first"
            })
        }

        next();
    });
});
        
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
      title: "Protected call",
      text: "Greetings, you have valid token."
  });
});

module.exports = router;
