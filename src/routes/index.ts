import { Router } from 'express'
import UserRoutes from './UserRoutes'
import AccountRoutes from './AccountRoutes'

const appRoutes = Router()

appRoutes.use(
  UserRoutes,
  AccountRoutes
)

export default appRoutes
