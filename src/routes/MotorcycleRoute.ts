import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import MotorcycleModel from '../models/MotorcycleModel';
import MotorcycleService from '../services/MotorcycleService';

const motorcycleRoute = Router();

const motorcycle = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

motorcycleRoute.post('/', (req, res) => motorcycleController.create(req, res));
motorcycleRoute.put('/:id', (req, res) => motorcycleController.update(req, res));
motorcycleRoute.get('/', (req, res) => motorcycleController.read(req, res));
motorcycleRoute.get('/:id', (req, res) => motorcycleController.readOne(req, res));
motorcycleRoute.delete('/:id', (req, res) => motorcycleController.delete(req, res));

export default motorcycleRoute;