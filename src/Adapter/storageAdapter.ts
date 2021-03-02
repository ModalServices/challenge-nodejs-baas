
export interface IStorage {

  listAll: <T> (Model:T) => Promise<T>;
  save: <T> (Model:T) => void;
  

}