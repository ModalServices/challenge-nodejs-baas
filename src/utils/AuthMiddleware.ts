import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface TokenPayload {
  id: string,
  iat: number,
  exp: number
}

export default function authMiddleware (req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers
  try {
    const token = authorization.replace('Bearer', '').trim()
    const data = jwt.verify(token, process.env.SECRET_AUTH)

    const { id } = data as TokenPayload

    req.userId = id

    return next()
  } catch {
    res.sendStatus(401)
  }
}
