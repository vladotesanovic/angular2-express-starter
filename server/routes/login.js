"use strict";
var express_1 = require("express");
var crypto_1 = require("crypto");
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = require("../config");
var loginRouter = express_1.Router();
exports.loginRouter = loginRouter;
var user = {
    hashedPassword: "f5aed5349609c1fb58967325f6507fe10e9f87c7f4b1627bc35379d07df7b32ffb3" +
        "2de67c619b77317f619047b9a71a5525e5afb2a5604b98b0c9b03326f2bbb",
    salt: "El9tcP2hixgpzs2ZKwX0/z9Q5vq6QteRUkW1arxdLwu1KftMX9KdZ/tLQOuSdUkwXZrMJyC2/x" +
        "Gc3a/OBiwrYFcMVlxDOt+jfbVfkfT7LB+q+h8h2O1NIIc4COsid1vCfiokVCUecIeIAlsMlvKBDWDPr67LZTLorzzkDL6pesI=",
    username: "john"
};
loginRouter.post("/signup", function (req, res, next) {
    if (!req.body.hasOwnProperty("password")) {
        var err = new Error("No password");
        return next(err);
    }
    var salt = crypto_1.randomBytes(128).toString("base64");
    crypto_1.pbkdf2(req.body.password, salt, 10000, config_1.length, function (err, hash) {
        res.json({
            hashed: hash.toString("hex"),
            salt: salt
        });
    });
});
// login method
loginRouter.post("/", function (req, res, next) {
    crypto_1.pbkdf2(req.body.password, user.salt, 10000, config_1.length, function (err, hash) {
        if (err) {
            console.log(err);
        }
        // check if password is active
        if (hash.toString("hex") === user.hashedPassword) {
            var token = jsonwebtoken_1.sign(user.username, config_1.secret, { expiresInMinutes: 60 * 60 * 8 * 7 * 15 });
            res.json({ "jwt": token });
        }
        else {
            res.json({ message: "Wrong password" });
        }
    });
});
//# sourceMappingURL=login.js.map