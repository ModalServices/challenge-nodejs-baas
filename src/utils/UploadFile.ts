import { Response, Express } from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import mime from 'mime'

class UploadFile {
  private URL: string = path.basename('upload')

  private storage (): multer.StorageEngine {
    return multer.diskStorage({
      destination: (req, file, cb) => {
        if (!fs.existsSync(this.URL)) {
          fs.mkdirSync(this.URL)
        }
        cb(null, this.URL)
      },
      filename: (req, file, cb) => {
        const type = mime.extension(file.mimetype)
        cb(null, `${new Date().getTime()}.${type}`)
      }
    })
  }

  private fileFilterRules () {
    return (req: Response, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
      const type = mime.extension(file.mimetype)
      const conditions = ['png', 'jpg', 'jpeg', 'pdf']
      if (conditions.includes(type)) {
        cb(null, true)
      }
      cb(null, false)
    }
  }

  get getConfig (): multer.Options {
    return {
      storage: this.storage(),
      fileFilter: this.fileFilterRules()
    }
  }
}

export const uploadFile = new UploadFile()
