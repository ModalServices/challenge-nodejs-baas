import { Request, Response } from 'express'
import bcryptjs from 'bcryptjs'
import User from '../models/User'
import jwt from 'jsonwebtoken'

class AuthController {
  public async authenticate (req: Request, res: Response) {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.sendStatus(401)
    }

    const isValidPassword = await bcryptjs.compare(password, user.password)
    if (!isValidPassword) {
      return res.sendStatus(401)
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_AUTH, { expiresIn: '1d' })

    return res.status(202).json({
      token
    })
  }
}

export default new AuthController()
