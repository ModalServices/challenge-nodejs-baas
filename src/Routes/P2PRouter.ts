import '../Utils/module-alias';
import { Router } from 'express';
import { P2PController } from '@Controllers/P2PController';
import { accountController } from '@Controllers/userController';

const account = new accountController();

const P2PRouter:Router = Router();

const p2p = new P2PController();

P2PRouter.post('/transference', async (request, response): Promise<void> => { 
  
  const recieverAccount:any = await account.listAccountDetails(request, response);

  const giverAccount:any = await account.listAccountDetails(request, response);

  const { recieverAccountBalance, giverAccountBalance } =  await p2p.transference(request, response);

  giverAccount.accountBalance = giverAccountBalance;
  recieverAccount.accountBalance = recieverAccountBalance;

  await account.updateAccount(response,recieverAccount);

  await account.updateAccount(response,giverAccount);

  response.status(200).send("All transference done !!");

})
export { P2PRouter };

