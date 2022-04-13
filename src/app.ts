import express from 'express';
import cors from 'cors';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.get('/', (req, res) => res.send('Hello World New'));
  }
}

export default new App().express;
