import mongoose, { Schema } from 'mongoose';
import { IUserDocument } from '../Documents/IUserDocument';

export class userModel{

  userModelInstance: mongoose.Model<IUserDocument>

  userSchema: Schema = new Schema({
    name: { type: String, required: true },
    lastName: { type:String,required: true },
    birthDate: { type:String,required: true },
    maritalStatus: { type:String,required: true },
    address: { type:String,required: true },
    houseNumber: { type:String,required: true },
    Complement: { type:String,required: true },
    profission: { type:String,required: true },
    minimumIncome: { type:String,required: true },
  },
  {
    timestamps: true
  });

  constructor()
  {
    this.userModelInstance = mongoose.model('users',this.userSchema);
  }
}