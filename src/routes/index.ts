import { Router } from 'express'
import UserRoutes from './UserRoutes'
import AccountRoutes from './AccountRoutes'
import DocumentRoutes from './DocumentRoutes'
import AuthRoutes from './AuthRoutes'

const appRoutes = Router()

appRoutes.use(
  UserRoutes,
  AccountRoutes,
  DocumentRoutes,
  AuthRoutes
)

export default appRoutes
