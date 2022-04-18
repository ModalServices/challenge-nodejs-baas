import { Request, Response } from 'express'
import User from '../models/User'
import Utils from '../utils/Utils'

class UserController {
  public async getAllUsers (req: Request, res: Response): Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  public async getlUserId (req: Request, res: Response): Promise<Response> {
    const user = await User.findById(req.params.id)
    return res.json(user)
  }

  public async addUser (req: Request, res: Response): Promise<void> {
    req.body.password = Utils.HashPassword(req.body.password)
    console.log(req.body)
    const addUser = new User(req.body)
    addUser.save((err) => {
      if (err) {
        return res.status(409).send({ message: err.message })
      } else {
        return res.json(addUser)
      }
    })
  }
}

export default new UserController()
