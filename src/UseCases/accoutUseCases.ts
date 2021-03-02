import '@Utils/module-alias';
import { IAccount } from '@Entities/Account';

export interface IUserUseCases extends IAccount{

  saveUser(account: IAccount): void;

  deleteUser(account: IAccount): void;

  updateUser(account: IAccount): void;

}