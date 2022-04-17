import { Router } from 'express'
import multer from 'multer'
import DocumentController from '../controllers/DocumentController'
import { uploadFile } from '../utils/UploadFile'

const routes = Router()

routes.post('/documents', multer(uploadFile.getConfig).single('document'), DocumentController.addDocument)

export default routes
