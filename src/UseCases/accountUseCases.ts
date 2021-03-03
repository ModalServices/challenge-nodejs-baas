import '../Utils/module-alias';
import { account } from '@src/Adapter/typeAdapter'
import { IStorage } from '@src/Adapter/storageAdapter';
import mongoRepository  from '@src/Repositories/MongoRepository';

export class accountUseCases implements IStorage<account> {

  mongoRepo: mongoRepository

  constructor(mongo:mongoRepository)
  {
    this.mongoRepo = mongo;
  }

  async save(...account: any): Promise<void> {

    const Account = account
  
    await this.mongoRepo.accountDB.save(Account);
    
  }
  async listAll(): Promise<account> {

    const accountData = await this.mongoRepo.accountDB.listAll();

    return accountData;
  }
  async listDetails(userId: string): Promise<account> {

    const accountData = await this.mongoRepo.accountDB.listDetails(userId);
    
    return accountData;

  }

  async update(account: any): Promise<void> {
  
    await this.mongoRepo.accountDB.update(account);
    
  }

}
