export default interface IService<T> {
  create(obj:T):Promise<T>,
  read():Promise<T[]>,
  readOne(id:string):Promise<T | undefined>,
  update(id: string, obj:T):Promise<T | undefined>,
  delete(id:string):Promise<T | undefined>,
}