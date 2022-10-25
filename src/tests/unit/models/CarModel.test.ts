import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/CarModel';
import { Model } from 'mongoose';
import { carMock } from '../../mocks/car.mock';
const { expect } = chai;

describe('Car Model', () => {
  const carModel = new Car();

  describe('Creating a car', () => {
    before(async () => {
      sinon.stub(Model, 'create').resolves(carMock.responseMock);
    });
  
    after(()=>{
      sinon.restore();
    });

    it('Successfully created', async () => {
      const newCar = await carModel.create(carMock.bodyMock);

      expect(newCar).to.be.deep.equal(carMock.responseMock);
    });
  });
});