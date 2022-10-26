import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/CarModel';
import { Model } from 'mongoose';
import { carMock } from '../../mocks/car.mock';
const { expect } = chai;

describe('Car Model', () => {
  const carModel = new Car();

  describe('Create car', () => {
    before(async () => {
      sinon.stub(Model, 'create').resolves(carMock.createResponseMock);
    });
  
    after(()=>{
      sinon.restore();
    });

    it('Success', async () => {
      const newCar = await carModel.create(carMock.createBodyMock);

      expect(newCar).to.be.deep.equal(carMock.createResponseMock);
    });
  });

  describe('Get all cars', () => {
    before(async () => {
      sinon.stub(Model, 'find').resolves(carMock.allCars);
    });
  
    after(()=>{
      sinon.restore();
    });

    it('Success', async () => {
      const allCars = await carModel.read();

      expect(allCars).to.be.deep.equal(carMock.allCars);
    });
  });

  describe('Get specified car', () => {
    before(async () => {
      sinon.stub(Model, 'findOne').resolves(carMock.allCars[0]);
    });
  
    after(()=>{
      sinon.restore();
    });

    it('Success', async () => {
      const car = await carModel.readOne('4edd40c86762e0fb12000003');

      expect(car).to.be.deep.equal(carMock.allCars[0]);
    });
  });

  describe('Update car', () => {
    before(async () => {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(carMock.updateResponseMock);
    });
  
    after(()=>{
      sinon.restore();
    });

    it('Success', async () => {
      const allCars = await carModel.update('4edd40c86762e0fb12000003', carMock.updateBodyMock);

      expect(allCars).to.be.deep.equal(carMock.updateResponseMock);
    });
  });
});