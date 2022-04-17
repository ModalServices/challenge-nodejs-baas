import { Request, Response } from 'express'
import Account from '../models/Account'
import User from '../models/User'

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

  public async getAllAccounts (req: Request, res: Response): Promise<Response> {
    const accounts = await Account.find()
    return res.json(accounts)
  }

  public async getlAccountId (req: Request, res: Response): Promise<Response> {
    const account = await Account.findById(req.params.id).populate({ path: 'user', model: User })
    return res.json(account)
  }

  public async getlBalanceId (req: Request, res: Response): Promise<Response> {
    const account = await Account.findById(req.params.id)
    return res.json({ value: account.balance })
  }
}

export default new AccountController()
