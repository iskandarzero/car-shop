import * as sinon from 'sinon';
import chai from 'chai';
import { Request, Response } from 'express';
import Car from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import { carMock } from '../../mocks/car.mock';
const { expect } = chai;

describe('Car Controller', () => {
  const carModel = new Car();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request; 
  const res = {} as Response;

  describe('Create Car', () => {
    before(async () => {
      sinon.stub(carService, 'create').resolves(carMock.responseMock);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });
  
    after(()=>{
      sinon.restore();
    });

    it('Success', async () => {
      req.body = carMock.bodyMock;
      await carController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock.responseMock)).to.be.true;
    });
  });
});