import { Router, Response, Request } from "express";

const publicRouter: Router = Router();

publicRouter.get("/", (request: Request, response: Response) => {
    response.json({
        text: "Greetings, from public route.",
        title: "Public router"
    });
});

export { publicRouter }





