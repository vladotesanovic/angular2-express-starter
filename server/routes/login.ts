import { pbkdf2, randomBytes } from "crypto";
import { NextFunction, Request, Response, Router } from "express";
import { sign } from "jsonwebtoken";
import { digest, length, secret } from "../config";

const loginRouter: Router = Router();

const user = {
  hashedPassword: "6fb3a68cb5fe34d0c2c9fc3807c8fa9bc0e7dd10023065ea4233d40a2d6bb4a" +
  "7e336a82f48bcb5a7cc95b8a590cf03a4a07615a226d09a89420a342584a" +
  "a28748336aa0feb7ac3a12200d13641c8f8e26398cfdaf268dd68746982bcf" +
  "59415670655edf4e9ac30f6310bd2248cb9bc185db8059fe979294dd3611fdf28c2b731",
  salt: "OxDZYpi9BBJUZTTaC/yuuF3Y634YZ90KjpNa+Km4qGgZXGI6vhSWW0T91" +
  "rharcQWIjG2uPZEPXiKGnSAQ73s352aom56AIYpYCfk7uNsd+7AzaQ6dxTnd9AzCCdIc/J" +
  "62JohpHPJ5eGHUJJy3PAgHYcfVzvBHnIQlTJCQdQAonQ=",
  username: "john",
};

loginRouter.post("/signup", (request: Request, response: Response, next: NextFunction) => {
  if (!request.body.hasOwnProperty("password")) {
    const err = new Error("No password");
    return next(err);
  }

  const salt = randomBytes(128).toString("base64");

  pbkdf2(request.body.password, salt, 10000, length, digest, (err: Error, hash: Buffer) => {
    response.json({
      hashed: hash.toString("hex"),
      salt,
    });
  });
});

// login method
loginRouter.post("/", (request: Request, response: Response, next: NextFunction) => {

  pbkdf2(request.body.password, user.salt, 10000, length, digest, (err: Error, hash: Buffer) => {
    if (err) {
      throw new Error(err.message);
    }

    // check if password is active
    if (hash.toString("hex") !== user.hashedPassword) {
      return response.json({ message: "Wrong password" });
    }

    const toSign = Object.assign({}, { user: user.username, permissions: [] });
    const token = sign(toSign, secret, { expiresIn: "7d" });

    return response.json({ jwt: token });

  });
});

export { loginRouter };
