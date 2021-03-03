import mongoose, { Schema } from 'mongoose';
import { IDocument } from '../Documents/IDocumentDocument'

export class documentModel {
  
  documentModelInstance: mongoose.Model<IDocument>;

  DocumentSchema: Schema = new Schema({

    userId: { type:String, required:true },
    document: { 
      path: { type:String, required: true },
      contentType: { type:String, required: true}
    },
    deleted: { type: Boolean, required: true}
  },
  {
    timestamps:true
  });

  constructor()
  {
    this.documentModelInstance = mongoose.model('document',this.DocumentSchema)
  }
}


