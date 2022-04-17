import { Router } from 'express'
import AccountController from '../controllers/AccountController'

const routes = Router()

routes.get('/accounts', AccountController.getAllAccounts)
routes.post('/accounts', AccountController.addAccount)

export default routes
