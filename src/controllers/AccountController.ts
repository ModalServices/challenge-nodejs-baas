import { Request, Response } from 'express'
import Account from '../models/Account'

class AccountController {
  public async addAccount (req: Request, res: Response): Promise<void> {
    const addAccount = new Account(req.body)
    addAccount.save((err) => {
      if (err) {
        return res.status(409).send({ message: err.message })
      } else {
        return res.json(addAccount)
      }
    })
  }
}

export default new AccountController()
