import { Router, Request, Response } from 'express';

const accountRouter:Router = Router();

// Lists an account

accountRouter.get('/account',(request:Request, response: Response):void=>{

  response.send("ok");
});

// Creates an account
accountRouter.post('/account_create',(request:Request, response: Response):void=>{

const account = request.body;

response.send(account);
});

export { accountRouter };
