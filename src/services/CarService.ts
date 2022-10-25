import IService from '../interfaces/IService';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  private _car:IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj:ICar):Promise<ICar> {
    // if (!obj) throw new Error(ErrorTypes.InvalidObject);

    const parsed = CarZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }

    return this._car.create(parsed.data);
  }

  public async read():Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(id:string):Promise<ICar> {
    const frame = await this._car.readOne(id);

    if (!frame) throw new Error(ErrorTypes.EntityNotFound);

    return frame;
  }

  public async update(id: string, obj:ICar):Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }

    const updated = await this._car.update(id, parsed.data);

    if (!updated) throw new Error(ErrorTypes.EntityNotFound);

    return updated;
  }

  public async delete(id: string):Promise<ICar> {
    const deleted = await this._car.delete(id);

    if (!deleted) throw new Error(ErrorTypes.EntityNotFound);

    return deleted;
  }
}

export default CarService;