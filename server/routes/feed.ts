import { Router, Response, Request } from 'express';
import * as uuid from 'node-uuid';

const feedRouter: Router = Router();

feedRouter.post('/', (request: Request, response: Response) => {

  response.json({
    id: uuid.v4(),
    text: request.body.text,
    name: request.body.name
  });

});

feedRouter.post('/:id/comment', (request: Request, response: Response) => {

  const feedID = request.params.id;

  response.json({
    id: feedID,
    comment: {
      id: uuid.v4(),
      text: request.body.text
    }
  });

});

feedRouter.delete('/:id', (request: Request, response: Response) => {

  response.json({
    id: request.params.id
  });

});

export { feedRouter }
