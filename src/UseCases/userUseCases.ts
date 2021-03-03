import '../Utils/module-alias';
import { IStorage } from '@src/Adapter/storageAdapter';
import  mongoRepository from '@src/Repositories/MongoRepository';
import { user } from '@src/Adapter/typeAdapter'


export class userUseCases implements IStorage<user> {
  
  mongoRepo: mongoRepository

  constructor(mongo:mongoRepository)
  {
    this.mongoRepo = mongo;
  }
  async listAll(): Promise<any> {
    
    const data = await this.mongoRepo.userDB.listAll();
    
    return data;
  }

  async listDetails (queryName: string): Promise<user> {
    
    const data = await this.mongoRepo.userDB.listDetails(queryName);

    return data;

  }

  async save(User: user):Promise<void> {
    
    await this.mongoRepo.userDB.save(User); 
  
  }

  async delete(queryName:string):Promise<void> {
    
    await this.mongoRepo.userDB.delete(queryName);

  }

  async update(queryName:string): Promise<void> {
   
    await this.mongoRepo.userDB.update(queryName);
}

}