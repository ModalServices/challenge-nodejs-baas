import { Router, Request, Response } from "express";
    
const UserRouter:Router = Router();
  
// Lists an user

UserRouter.get('/users', (request:Request, response: Response):void =>{

response.send("ok");
response.status(200);

});

//Creates an user
UserRouter.post('/user_create',(request:Request, response: Response):void => {
  const user = request.body;

  response.send(user);
});

export { UserRouter };
