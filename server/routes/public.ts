import { Request, Response, Router } from "express";

const publicRouter: Router = Router();

publicRouter.get("/simple", (request: Request, response: Response) => {

  return response.json({
    text: "Hello Angular 2",
    title: "Greetings.",
  });
});

export { publicRouter };
