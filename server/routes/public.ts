import { Router, Response, Request } from "express";

const publicRouter: Router = Router();

publicRouter.get("/simple", (request: Request, response: Response) => {
  response.json({
    text: "Greetings.",
    title: "Public routes"
  });
});

export { publicRouter }





