import './Utils/module-alias';
import express, { Application } from 'express';
import { UserRouter, P2PRouter, AccountRouter } from './Routes/'

export default class Server {
  
  private app = express();

  middleware = (app = this.app):void => { 

    app.use(express.json());
    app.use(UserRouter);
    app.use(AccountRouter);
    app.use(P2PRouter);

  }

  private port = 3000;

  getApp(): Application {
    return this.app;
  }

  setupServer = (port = this.port, app = this.app):void => {
    this.middleware(app);
    app.listen(port);
  }
}