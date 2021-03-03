import '../Utils/module-alias';
import { document } from '@src/Adapter/typeAdapter';
import { IStorage } from '@src/Adapter/storageAdapter';

import  mongoRepository  from '@src/Repositories/MongoRepository';

export class documentUseCases implements IStorage<document> {

  mongoRepo: mongoRepository

  constructor(mongo:mongoRepository)
  {
    this.mongoRepo = mongo;
  }

  async save(document: document): Promise<void> {

    const documentData = document ;

    this.mongoRepo.documentDB.save(documentData);

  }

  async listDetails(userId: string): Promise<document> {

    const document = this.mongoRepo.documentDB.listDetails(userId);

    return document;
  }
  
}