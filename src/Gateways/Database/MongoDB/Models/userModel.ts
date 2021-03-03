import mongoose, { Schema } from 'mongoose';

import { IUserDocument } from '../Documents/IUserDocument';

export class userModel{

  userModelInstance: mongoose.Model<IUserDocument>

  userSchema: Schema = new Schema({
    name: { type: String, required: true },
    lastName: { type:String, required: true },
    birthDate: { type:String, required: true },
    maritalStatus: { type:String, required: true },
    address: { type:String, required: true },
    houseNumber: { type:String, required: true },
    district: { type:String, required: true },
    complement: { type:String, required: false},
    city: { type:String, required: true },
    state: { type:String, required: true },
    country: { type:String, required: true},
    profission: { type:String, required: true },
    minimumIncome: { type: Number, required: true },
    deleted: { type:Boolean, required: true }
  },
  {
    timestamps: true
  });

  constructor()
  {
    this.userModelInstance = mongoose.model('users',this.userSchema);
  }
}