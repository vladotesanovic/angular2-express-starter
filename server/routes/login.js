var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var SECREET = require('../config');

var LENGTH = 64;

// gennerated data for password: angular2express
var user = {
  username: "john",
  hashedPassword: "f5aed5349609c1fb58967325f6507fe10e9f87c7f4b1627bc35379d07df7b32ffb32de67c619b77317f619047b9a71a5525e5afb2a5604b98b0c9b03326f2bbb",
  salt: "El9tcP2hixgpzs2ZKwX0/z9Q5vq6QteRUkW1arxdLwu1KftMX9KdZ/tLQOuSdUkwXZrMJyC2/xGc3a/OBiwrYFcMVlxDOt+jfbVfkfT7LB+q+h8h2O1NIIc4COsid1vCfiokVCUecIeIAlsMlvKBDWDPr67LZTLorzzkDL6pesI="
}

router.post('/signup', function(req, res, next) {
	if(!req.body.hasOwnProperty("password")) {
    var err = new Error('No password');
    err.status = 500;
    return next(err);
  }
	
  var salt = crypto.randomBytes(128).toString("base64");
  
  crypto.pbkdf2(req.body.password, salt, 10000, LENGTH, function(err, hash) {
     res.json({
        hashed: hash.toString("hex"),
        salt: salt
     })
  });
});

// login method
router.post('/', function(req, res, next) {
	
	crypto.pbkdf2(req.body.password, user.salt, 10000, LENGTH, function(err, hash) {
      if (err) {
          console.log(err);
      }
      
      // check if password is active
      if (hash.toString("hex") === user.hashedPassword) {
        
         var token = jwt.sign(user.username, SECREET, { expiresInMinutes: 60 * 60 * 8 * 7 * 15 });
         res.json({"jwt": token});

      } else {
        res.json({message: "Wrong password"});
      }
      
  });
});

module.exports = router;
