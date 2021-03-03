import '../../../../Utils/module-alias';
import { Document } from 'mongoose';


export interface IAccountDocument extends Document {
  
  IUserDocument: any;
}