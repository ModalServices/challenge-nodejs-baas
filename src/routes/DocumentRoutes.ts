import { Router } from 'express'
import multer from 'multer'
import DocumentController from '../controllers/DocumentController'
import { uploadFile } from '../utils/UploadFile'

const routes = Router()

routes.post('/documents', multer(uploadFile.getConfig).single('document'), DocumentController.addDocument)
routes.get('/documents/:id', DocumentController.getListDocumentsUser)

export default routes
