import { Router } from 'express'
import UserRoutes from './UserRoutes'
import AccountRoutes from './AccountRoutes'
import DocumentRoutes from './DocumentRoutes'

const appRoutes = Router()

appRoutes.use(
  UserRoutes,
  AccountRoutes,
  DocumentRoutes
)

export default appRoutes
