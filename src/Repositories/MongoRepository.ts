
import '../Utils/module-alias';
import { userModel } from '@src/Gateways/Database/MongoDB/Models/userModel';
import { accountModel } from '@src/Gateways/Database/MongoDB/Models/accountModel'
import { documentModel } from '@src/Gateways/Database/MongoDB/Models/documentModel'
import { user, account, document } from '@src/Adapter/typeAdapter'
import { IStorage } from '@src/Adapter/storageAdapter';
import mongoose from 'mongoose';


class userDatabase implements IStorage<any> {

  user: userModel = new userModel();

  async listAll(): Promise<any> {
    
    const userData:any = await this.user.userModelInstance.find({
      deleted: false,
    })
    const UserResult = {
      userData  
    }

    if(UserResult)
    {
      return UserResult;
    }

    else {
      throw Error;
    }
    
  }

  async listDetails(Name:string): Promise<user> {

    const userData:any = await this.user.userModelInstance.findOne(
      {
        name: Name,
        deleted: false,
      }
    )
    let UserResult:any = {  
      userData
    }
    if(UserResult.userData == null)
    { 
       UserResult = {
        userData: false
      }
      return UserResult
    }

    else {

      return UserResult;
    }
  }

  async save(User:any):Promise<void>  {

    await this.user.userModelInstance.create(User);

  }

  async delete(name:string):Promise<void> {

    try {

    await this.user.userModelInstance.findOneAndUpdate({
        name: name,
        deleted: false
      },
      {
        deleted: true
      },
      {
        new:true
      })
    }
    catch(error)
    {
      console.error(error);
      
    }
  }

  async update (name:string): Promise<void> {

    const userData:any = await this.user.userModelInstance.findOne(
      {
        name: name,
        deleted: false,
      }
    )
    const UserResult = {
     ...userData
    }
    this.user.userModelInstance.updateOne({
      name:name
    },
    {
      UserResult
    },
    {
      new:true
    });  
}
}

class documentDatabase implements IStorage<document> {

  document: documentModel = new documentModel();

  async listDetails(UserId:string): Promise<document> {
    
    

    const documentData:any = await this.document.documentModelInstance.findOne(
      {
        userId: UserId,
        deleted: false,
      }
    )
    const documentResult = {
      documentData
    }
    if(documentResult)
    {
      return documentResult;
    }

    else {
      throw Error;
    }
  }

  async save(documentData:any): Promise<void> {
    
    try {

      await this.document.documentModelInstance.create(documentData);
      
    }

    catch(error)
    {
      console.error(error)
    }
  }
  
  async delete(UserId:string): Promise<void> {

    try {
  
      await this.document.documentModelInstance.findOneAndUpdate({
          userId: UserId,
          deleted: false
        },
        {
          deleted: true
        },
        {
          new:true
        })
      }
      catch(error)
      {
        console.error(error);
        
      }
  }

}

class accountDatabase implements IStorage<account> {

  account = new accountModel();

  async listAll(): Promise<account> {

    const accountData:any = await this.account.accountModelInstance.find({

      deleted: false

    });

    if(accountData)
    {
      return accountData;
    }   

    else 
    {
      throw Error;
    }
  }

  async listDetails(UserId:string): Promise<account> {

    const accountData:any = await this.account.accountModelInstance.findOne({

      userId: UserId,
      deleted: false

    })

    if(accountData)
    {
      return accountData;
    }
    else
    {
      throw Error;
    }
  }

  async save(...args:any): Promise<void> {

    const accountData = {
      userId: args.userId,
      accountNumber: mongoose.Types.ObjectId(),
      accountPassword: args.accountPassword,
      accountBalance: 0,
      deleted: false,
    }

    await this.account.accountModelInstance.create(accountData);
  
  }
  
  async delete(UserId:string): Promise<void> {

    try {
  
      await this.account.accountModelInstance.findOneAndUpdate({
          userId: UserId,
          deleted: false
        },
        {
          deleted: true
        },
        {
          new:true
        })
      }
      catch(error)
      {
        console.error(error);
        
      }
  }
  async update (Account:any): Promise<void> {

    this.account.accountModelInstance.updateOne({
      id: Account.userId,
      deleted: false,
    },
    {
      ...Account
    },
    {
      new:true
    });  
}
}

export default class mongoRepository{

  userDB: userDatabase = new userDatabase();
  documentDB: documentDatabase = new documentDatabase();
  accountDB: accountDatabase = new accountDatabase();
  
}

