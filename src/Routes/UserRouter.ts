import { Router, Request, Response } from "express";
import '../Utils/module-alias';
import { userController, accountController, documentController } from '@Controllers/userController';
import { multerRepository } from '@src/Repositories/MulterRepository';

const UserRouter:Router = Router();

const UserController = new userController();

const AccountController = new accountController();

const DocumentController = new documentController();

// Lists an user

UserRouter.get('/users',async (req:Request, res: Response) => await UserController.listAllUsers(res))

//Creates an user
UserRouter.post('/user_create',async (req:Request, res: Response) => await UserController.saveUser(req,res));

UserRouter.get('/users/:id', async (req: Request, res: Response) => await UserController.listUserDetails(req, res))

const AccountRouter:Router = Router();

// Lists an account

AccountRouter.get('/account', async (request, response) => await AccountController.listAllAccounts(request, response));

AccountRouter.post('/user/:name/account_save', async (request, response) => await AccountController.saveAccount(request, response));

const documentRouter: Router = Router();

const multer = new multerRepository();

documentRouter.get('/user/:id/document', async (req: Request, res: Response) => await DocumentController.listDocuments(req, res))

documentRouter.post('/user/:id/document_save', multer.upload.single('image'), async (request, response) => await DocumentController.saveDocument(request, response));

export { AccountRouter,UserRouter, documentRouter }

