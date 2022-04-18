import { Schema, model, Document, Types } from 'mongoose'

interface AccountInterface extends Document {
  _id: Types.ObjectId,
  user: Types.ObjectId,
  number: number,
  balance: number,
  createdAt: Date,
  updatedAt: Date
}

const AccountSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: 'users',
    required: true,
    unique: true
  },
  number: {
    type: Number,
    required: true,
    unique: true
  },
  balance: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

export default model<AccountInterface>('Account', AccountSchema)
