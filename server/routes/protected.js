"use strict";
var express_1 = require("express");
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = require("../config");
var protectedRouter = express_1.Router();
exports.protectedRouter = protectedRouter;
protectedRouter.use(function (req, res, next) {
    var token = req.headers.auth;
    console.log(token);
    jsonwebtoken_1.verify(token, config_1.secret, function (tokenError) {
        if (tokenError) {
            return res.status(500).json({
                message: "Invalid token, please Log in first"
            });
        }
        next();
    });
});
protectedRouter.get("/", function (req, res) {
    res.json({
        text: "Greetings, you have valid token.",
        title: "Protected call"
    });
});
//# sourceMappingURL=protected.js.map