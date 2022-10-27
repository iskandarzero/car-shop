import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarModel from '../models/CarModel';
import CarService from '../services/CarService';

const carRoute = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

carRoute.post('/', (req, res) => carController.create(req, res));
carRoute.put('/:id', (req, res) => carController.update(req, res));
carRoute.get('/', (req, res) => carController.read(req, res));
carRoute.get('/:id', (req, res) => carController.readOne(req, res));
carRoute.delete('/:id', (req, res) => carController.delete(req, res));

export default carRoute;