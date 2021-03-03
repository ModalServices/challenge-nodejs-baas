import '../Utils/module-alias';
import { Request, Response} from 'express';
import { userUseCases } from '@Usecases/userUseCases';
import { accountUseCases } from '@Usecases/accountUseCases';
import { documentUseCases } from '@Usecases/documentUseCases';
import '../Utils/module-alias';
import * as bcrypt from 'bcrypt';
import mongoRepository from '@src/Repositories/MongoRepository';

const mongo = new mongoRepository();

const account = new accountUseCases(mongo);

const document = new documentUseCases(mongo);

const userUseCase = new userUseCases(mongo);

export class documentController {

  async listDocuments(request: Request, response: Response): Promise<void> {

    const id = request.params.id;

    const documentData = await document.listDetails(id)

    response.status(200).send("Document retrieved saved !!").send(documentData);
  }

  async saveDocument(request: Request, response: Response): Promise<void> {
    
    const documentData:any = request.file.filename;

    await document.save(documentData);

    response.status(201).send("Document successfully saved !!");
  }

}

export class accountController {

  async saveAccount(request: Request, response: Response): Promise<void> {

    const accountData = request.body;

    const password = accountData.accountPassword;

    const userName = request.params.name;

    const Userdata = await userUseCase.listDetails(userName);

    const passwordHash = await bcrypt.hash(password,8);

    const Account = {
      userId: Userdata._id,
      accountPassword: passwordHash
    }
    account.save(Account);

    response.status(201).json({ ...accountData,
      message: 'account successfully created !!'
    });
  }

  async listAccountDetails(request: Request, response: Response):Promise<void> {

    const id = request.params.id;

    const accountData = await account.listDetails(id);

    response.status(200).json({
      ...accountData,
    })

  }

  async listAllAccounts(request: Request, response: Response):Promise<void> {
      
    const accountData = await account.listAll();

    response.status(200).json({
      ...accountData,
    })
  }
  async updateAccount(response: Response, data: any):Promise<void> {
    
    const accountData = data;

    await account.update(accountData);

    response.status(200).send('account successfully updated');
  }
}

export class userController {

  async listAllUsers(response: Response): Promise<void> {
    
    const Data = await userUseCase.listAll();
    
    response.json({
      Data
    })
  }

  async listUserDetails(request: Request, response: Response):Promise<void> {
    
    const Data = await userUseCase.listDetails(request.body.name);

    const accountData = await account.listDetails(Data._id);

    const documentData = await document.listDetails(Data._id);

    response.json({
      ...Data,
      ...accountData,
      ...documentData
    });
  }

  async saveUser(request: Request, response: Response):Promise<void> {

    const User = { ...request.body,
      deleted: false
    }

    const { userData }:any = await userUseCase.listDetails(User.name);

    const data:any = userData == false ? true : false;

    if(data == true) {
      await userUseCase.save(User);
      

      response.status(201).json({
      });
    }
    else
    {
    response.status(422).json({
    })
    }
  }

} 
