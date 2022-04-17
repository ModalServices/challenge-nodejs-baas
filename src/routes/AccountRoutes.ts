import { Router } from 'express'
import AccountController from '../controllers/AccountController'

const routes = Router()

routes.get('/accounts', AccountController.getAllAccounts)
routes.get('/accounts/:id', AccountController.getlAccountId)
routes.get('/accounts/balance/:id', AccountController.getlBalanceId)
routes.post('/accounts', AccountController.addAccount)

export default routes
