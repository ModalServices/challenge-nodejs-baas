import './Utils/module-alias';
import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import { middleware } from 'express-openapi-validator';
import { OpenAPIV3 } from 'express-openapi-validator/dist/framework/types';
import { UserRouter, P2PRouter, AccountRouter } from './Routes/importer';
import database from './database';
import cors from 'cors'
import apiSchema from './apiSchema.json';
import * as dotenv from 'dotenv';

export default class Server {
  
  private app = express();

  middleware():void { 
    
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(UserRouter);
    this.app.use(AccountRouter);
    this.app.use(P2PRouter);
  }

  private port = process.env.APP_PORT; 

  getApp(): Application {
    return this.app;
  }

  private async docSetup(): Promise<void> {
    this.app.use('/docs',swaggerUi.serve, swaggerUi.setup(apiSchema));
    await middleware({
      apiSpec: apiSchema as OpenAPIV3.Document,
      validateRequests: true,
      validateResponses: true,
      
    })
  }

  async databaseSetup(): Promise<void> {
    const Database = new database();
    Database.connect();
  }

  async setupServer(): Promise<void> {
    this.middleware();
    this.app.listen(process.env.APP_PORT,()=> {
      console.log(`Working on ${this.port}` )
    });
    await this.docSetup();
    await this.databaseSetup();
    dotenv.config();
  }
}