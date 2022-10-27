import IService from '../interfaces/IService';
import { IMotorcycle, MotorcycleZodSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class MotorcycleService implements IService<IMotorcycle> {
  private _motorcycle:IModel<IMotorcycle>;

  constructor(model:IModel<IMotorcycle>) {
    this._motorcycle = model;
  }

  private static checkId(id: string) {
    if (id.length < 24) throw new Error(ErrorTypes.InvalidMongoId);
  }

  public async create(obj:unknown):Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }

    return this._motorcycle.create(parsed.data);
  }

  public async read():Promise<IMotorcycle[]> {
    return this._motorcycle.read();
  }

  public async readOne(id:string):Promise<IMotorcycle> {
    MotorcycleService.checkId(id);
    const motorcycle = await this._motorcycle.readOne(id);

    if (!motorcycle) throw new Error(ErrorTypes.EntityNotFound);

    return motorcycle;
  }

  public async update(id:string, obj:unknown):Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }

    const updated = await this._motorcycle.update(id, parsed.data);

    if (!updated) throw new Error(ErrorTypes.EntityNotFound);

    return updated;
  }

  public async delete(id:string):Promise<IMotorcycle> {
    const deleted = await this._motorcycle.delete(id);

    if (!deleted) throw new Error(ErrorTypes.EntityNotFound);

    return deleted;
  }
}

export default MotorcycleService;