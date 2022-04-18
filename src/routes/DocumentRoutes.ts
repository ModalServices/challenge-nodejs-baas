import { Router } from 'express'
import multer from 'multer'
import DocumentController from '../controllers/DocumentController'
import { uploadFile } from '../utils/UploadFile'
import authMiddleware from '../utils/AuthMiddleware'

const routes = Router()

routes.post('/documents', authMiddleware, multer(uploadFile.getConfig).single('document'), DocumentController.addDocument)
routes.get('/documents/:id', authMiddleware, DocumentController.getListDocumentsUser)

export default routes
