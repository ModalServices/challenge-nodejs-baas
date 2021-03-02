export interface IAccount {

  userId: string;
  accountNumber: string;
  accountBalance: number;

}

export interface IUserMethods {
  
  saveAccount(account: IAccount): void

  deleteAccount(account: IAccount): void;

  updateAccount(account: IAccount): void;
}