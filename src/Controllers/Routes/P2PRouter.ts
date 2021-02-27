import { Router, Request, Response } from "express";

const P2PRouter:Router = Router();

P2PRouter.get('/P2P', (request:Request, response: Response):void =>{

  response.send("ok");
  
});

export { P2PRouter };

