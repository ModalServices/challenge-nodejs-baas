import config from '../mongo_config';

import mongoose, { Mongoose } from 'mongoose';

const dbConfig = config

export const connect = async(): Promise<Mongoose> => 
await mongoose.connect(dbConfig.mongoUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export const close = (): Promise<void> => mongoose.connection.close()


