import { Router } from 'express'
import UserRoutes from './UserRoutes'

const appRoutes = Router()

appRoutes.use(
  UserRoutes
)

export default appRoutes
