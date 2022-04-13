import { Request, Response } from 'express'
import User from '../models/User'

class UserController {
  public async getAllUsers (req: Request, res: Response): Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  public teste (): string {
    return 'Teste'
  }
}

export default new UserController()
