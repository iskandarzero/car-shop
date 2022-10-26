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
      sinon.stub(carService, 'create').resolves(carMock.createResponseMock);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });
  
    after(()=>{
      sinon.restore();
    });

    it('Success', async () => {
      req.body = carMock.createBodyMock;
      await carController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock.createResponseMock)).to.be.true;
    });
  });

  describe('Get all cars', () => {
    before(async () => {
      sinon.stub(carService, 'read').resolves(carMock.allCars);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });
  
    after(()=>{
      sinon.restore();
    });

    it('Success', async () => {
      await carController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock.allCars)).to.be.true;
    });
  });

  describe('Get specified car', () => {
    before(async () => {
      sinon.stub(carService, 'readOne').resolves(carMock.allCars[0]);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });
  
    after(()=>{
      sinon.restore();
    });

    it('Success', async () => {
      req.params = {  id: '4edd40c86762e0fb12000003' };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock.allCars[0])).to.be.true;
    });
  });

  describe('Update car', () => {
    before(async () => {
      sinon.stub(carService, 'update').resolves(carMock.updateResponseMock);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });
  
    after(()=>{
      sinon.restore();
    });

    it('Success', async () => {
      req.params = {  id: '4edd40c86762e0fb12000003' };
      req.body = carMock.updateBodyMock;
      await carController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock.updateResponseMock)).to.be.true;
    });
  });
});