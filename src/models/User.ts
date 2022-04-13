import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
    name: string,
    email: string,
}

const UserSchema = new Schema({
  name: String,
  email: String
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)
