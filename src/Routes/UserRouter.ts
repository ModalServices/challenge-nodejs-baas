import { Router } from "express";
import '@Utils/module-alias';
import { userController } from '@Controllers/userController';

const UserRouter:Router = Router();

const UserController = new userController();

// Lists an user

UserRouter.get('/users',UserController.listAllUsers);

//Creates an user
UserRouter.post('/user_create',UserController.save);

export { UserRouter };
