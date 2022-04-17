import { Request, Response } from 'express'
import Document from '../models/Document'

class DocumentController {
  public async addDocument (req: Request, res: Response): Promise<Response> {
    if (req.file) {
      const addDocument = new Document({
        user: req.body.user,
        file: req.file.filename
      })
      addDocument.save((err) => {
        if (!err) {
          return res.json(addDocument)
        }
        return res.status(409).send({ message: err.message })
      })
    } else {
      return res.status(409).json({
        message: 'Invalid file'
      })
    }
  }
}

export default new DocumentController()
