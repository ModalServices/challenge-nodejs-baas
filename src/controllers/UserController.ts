import { Request, Response } from 'express'
import User from '../models/User'

class UserController {
  public async getAllUsers (req: Request, res: Response): Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  public async getlUserId (req: Request, res: Response): Promise<Response> {
    const user = await User.findById(req.params.id)
    return res.json(user)
  }
}

export default new UserController()
