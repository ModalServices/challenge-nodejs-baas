import { Router } from 'express'
import AccountController from '../controllers/AccountController'

const routes = Router()

routes.post('/account', AccountController.addAccount)

export default routes
