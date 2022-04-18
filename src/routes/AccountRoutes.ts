import { Router } from 'express'
import AccountController from '../controllers/AccountController'
import authMiddleware from '../utils/AuthMiddleware'

const routes = Router()

routes.get('/accounts', authMiddleware, AccountController.getAllAccounts)
routes.get('/accounts/:id', authMiddleware, AccountController.getlAccountId)
routes.get('/accounts/balance/:id', authMiddleware, AccountController.getlBalanceId)
routes.post('/accounts', authMiddleware, AccountController.addAccount)

export default routes
