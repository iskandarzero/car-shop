import { z } from 'zod';
import { IVehicle } from './IVehicle';

const carZodSchema = z.object({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

type CarSchema = z.infer<typeof carZodSchema>;

export interface ICar extends IVehicle, CarSchema {}