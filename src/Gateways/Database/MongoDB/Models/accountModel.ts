import '../../../../Utils/module-alias';
import mongoose,{ Schema } from 'mongoose';
import { IAccountDocument } from '../Documents/IAccountDocument';

export class accountModel {
  
  accountModelInstance: mongoose.Model<IAccountDocument>;

  accountSchema: Schema = new Schema({
    userId: { type:String, required:true },
    accountNumber: { type :String, required: true },
    accountPassword: { type:String, required:true },
    accountBalance: { type: Number, required:true },
    deleted: { type: Boolean, required: true }
  },
  {
    timestamps: true
  });

  constructor()
  {
    this.accountModelInstance = mongoose.model('account', this.accountSchema);
  }

}