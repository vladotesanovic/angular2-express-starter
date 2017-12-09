import { NextFunction, Request, Response, Router } from "express";
import { verify } from "jsonwebtoken";
import { secret } from "../config";

const protectedRouter: Router = Router();

type AuthorizedRequest = Request & { headers: { authorization: string } };

protectedRouter.use((request: AuthorizedRequest, response: Response, next: NextFunction) => {
  const token = request.headers.authorization;

  verify(token, secret, (tokenError) => {
    if (tokenError) {
      return response.status(403).json({
        message: "Invalid token, please Log in first",
      });
    }

    next();
  });
});

protectedRouter.get("/", (request: Request, response: Response) => {
  response.json({
    text: "Greetings, you have valid token.",
    title: "Protected call",
  });
});

export { protectedRouter };
