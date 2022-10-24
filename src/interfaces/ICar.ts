import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const carZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

export type ICar = z.infer<typeof carZodSchema>;