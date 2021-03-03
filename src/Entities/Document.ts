export interface IDocument {
  userId: string;
  document: { 
    path: string;
    contentType: string;
  }
}