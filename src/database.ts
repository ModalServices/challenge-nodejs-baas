import mongoose, { Mongoose } from 'mongoose';
import { IStorage } from './Adapter/storageAdapter';
import EnvironmentVariables from './EnviromentVariables'

export default class dataBase implements IStorage { 
  
  dbConfig = EnvironmentVariables.mongoDBURL;

  connect = async(): Promise<Mongoose> => {
    return await mongoose.connect(this.dbConfig, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
  })
    
  };
  close = ():Promise<void> => mongoose.connection.close()

  listAll = (): Promise<> => {
    
    const db = this.connect();
    
    
  }

  save = (Data): void => {

  }
}

