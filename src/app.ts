import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import appRoutes from './routes'
import mongoose from 'mongoose'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
    this.database()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect(process.env.URL_ACCESSE_MONGODB)
  }

  private routes (): void {
    this.express.use(appRoutes)
  }
}

export default new App().express
