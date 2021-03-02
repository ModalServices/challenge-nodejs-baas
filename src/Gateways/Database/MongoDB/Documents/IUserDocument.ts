import { Document } from 'mongoose';
import { IUser } from '@Entities/Users'

export interface IUserDocument extends Document {
  
  IUserDocument: IUser;
}