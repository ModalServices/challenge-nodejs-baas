import { Router } from 'express'
import UserController from '../controllers/UserController'

const routes = Router()

routes.get('/users', UserController.getAllUsers)
routes.get('/users/:id', UserController.getlUserId)

export default routes
