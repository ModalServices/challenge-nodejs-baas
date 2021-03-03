import '../Utils/module-alias';
import { Request, Response} from 'express';
import { P2Ptransfer } from '@Usecases/P2Ptransference'

export class P2PController {

  P2PtransferController = new P2Ptransfer();

  async transference(request: Request, response: Response): Promise<any> {

    const { giverAccountBalance, recieverAccountBalance } = await this.P2PtransferController.tranference(request.body.giver, request.body.value, request.body.reciever);

    return { 
      giverAccountBalance, 
      recieverAccountBalance
    }

  }


}