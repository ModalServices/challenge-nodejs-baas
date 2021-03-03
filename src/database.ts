import mongoose from 'mongoose';

export default class dataBase{ 
  
  dbConfig = process.env.MONGO_URL || 'mongodb://localhost:27017';
  dbName = process.env.DB_NAME || 'API';

  connect = async(): Promise<void> => {
      await mongoose.connect(this.dbConfig, {
      dbName:this.dbName,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
  }).then(()=> console.log(`connection successfully\nLocation: ${this.dbConfig},\nDatabase: ${this.dbName}`))

  };
  close = ():Promise<void> => mongoose.connection.close()

}

