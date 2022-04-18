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

  public async bankTransfer (req: Request, res: Response): Promise<Response> {
    const accountUser = await Account.findOne({ user: req.userId })
    if (!accountUser) {
      return res.status(406).send({ message: 'User does not have an account' })
    }

    const { account, value } = req.body
    if (!account || !value) {
      return res.status(406).send({ message: 'Required information: value and account' })
    }

    if (value > accountUser.balance) {
      return res.status(406).send({ message: 'Not enough bank balance' })
    }

    const accountDest = await Account.findOne({ number: account })
    if (!accountDest) {
      return res.status(406).send({ message: 'Target account does not exist' })
    }

    await Account.findOneAndUpdate(
      { number: account },
      { balance: (accountDest.balance + value) }
    )
    await Account.findByIdAndUpdate(
      accountUser._id,
      { balance: (accountUser.balance - value) }
    )

    return res.json({ message: 'Transfer made successfully' })
  }
}

export default new AccountController()
