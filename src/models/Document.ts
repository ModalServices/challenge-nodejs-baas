import { Schema, model, Document, Types } from 'mongoose'

interface DocumentInterface extends Document {
  _id: Types.ObjectId,
  user: Types.ObjectId,
  file: string
}

const DocumentSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: 'users',
    required: true
  },
  file: {
    type: String,
    required: true,
    unique: true
  }
})

export default model<DocumentInterface>('Document', DocumentSchema)
