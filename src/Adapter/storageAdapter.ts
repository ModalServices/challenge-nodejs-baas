
export interface IStorage <T> {

  listAll?: (Model?: T) => Promise<T>;

  save?: (Model:T) => void;

  listDetails?: (data:string, Model?: T) => Promise<T>;

  delete?: (data:string, Model?:T) => void;

  update?: (data:string, Model?:T  ) => void;
}