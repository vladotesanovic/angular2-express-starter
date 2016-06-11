import { Router, Response } from "express";
import { verify } from "jsonwebtoken";
import { secret } from "../config";

const protectedRouter: Router = Router();

protectedRouter.use(function(req: any, res: Response, next) {
    const token = req.headers.auth;
    verify(token, secret, function(tokenError) {
        if (tokenError) {
            return res.status(403).json({
                message: "Invalid token, please Log in first"
            });
        }

        next();
    });
});

protectedRouter.get("/", function(req, res) {
    res.json({
        text: "Greetings, you have valid token.",
        title: "Protected call"
    });
});

export {protectedRouter}





