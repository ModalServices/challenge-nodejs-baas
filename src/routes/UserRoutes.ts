import { Router } from 'express'
import UserController from '../controllers/UserController'
import authMiddleware from '../utils/AuthMiddleware'

const routes = Router()

routes.get('/users', authMiddleware, UserController.getAllUsers)
routes.get('/users/:id', authMiddleware, UserController.getlUserId)
routes.post('/users', UserController.addUser)

export default routes
