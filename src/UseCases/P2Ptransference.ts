import '../Utils/module-alias';

export class P2Ptransfer {

  async tranference(giverAccountBalance:number,value:number,recieverAccountBalance:number): Promise<any> {

      return {
        giverAccountBalance: giverAccountBalance -= value,
        recieverAccountBalance: recieverAccountBalance += value
      }
  } 
}