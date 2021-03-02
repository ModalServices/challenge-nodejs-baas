import '@Utils/module-alias';
import { Router } from 'express';

const AccountRouter:Router = Router();

// Lists an account

AccountRouter.get('/account',listAllAccounts);

export { AccountRouter };
