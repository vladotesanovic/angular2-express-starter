import { Router, Request, Response } from "express";
import { randomBytes, pbkdf2 } from "crypto";
import { sign } from "jsonwebtoken";
import { secret, length } from "../config";

const loginRouter: Router = Router();

const user = {
    hashedPassword: "f5aed5349609c1fb58967325f6507fe10e9f87c7f4b1627bc35379d07df7b32ffb3" +
    "2de67c619b77317f619047b9a71a5525e5afb2a5604b98b0c9b03326f2bbb",
    salt: "El9tcP2hixgpzs2ZKwX0/z9Q5vq6QteRUkW1arxdLwu1KftMX9KdZ/tLQOuSdUkwXZrMJyC2/x" +
    "Gc3a/OBiwrYFcMVlxDOt+jfbVfkfT7LB+q+h8h2O1NIIc4COsid1vCfiokVCUecIeIAlsMlvKBDWDPr67LZTLorzzkDL6pesI=",
    username: "john"
};

loginRouter.post("/signup", function (req: Request, res: Response, next) {
    if (!req.body.hasOwnProperty("password")) {
        let err = new Error("No password");
        return next(err);
    }

    const salt = randomBytes(128).toString("base64");

    pbkdf2(req.body.password, salt, 10000, length, function (err, hash) {
        res.json({
            hashed: hash.toString("hex"),
            salt: salt
        });
    });
});

// login method
loginRouter.post("/", function (req: Request, res: Response, next) {

    pbkdf2(req.body.password, user.salt, 10000, length, function (err, hash) {
        if (err) {
            console.log(err);
        }
        
        // check if password is active
        if (hash.toString("hex") === user.hashedPassword) {

            const token = sign(user.username, secret, {expiresInMinutes: 60 * 60 * 8 * 7 * 15});
            res.json({"jwt": token});

        } else {
            res.json({message: "Wrong password"});
        }

    });
});

export {loginRouter}
