import * as sinon from 'sinon';
import chai from 'chai';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import Car from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMock } from '../../mocks/car.mock';
const { expect } = chai;

describe('Car Service', () => {
  const carModel = new Car();
  const carService = new CarService(carModel);

  describe('Create Car', () => {
    before(async () => {
      sinon.stub(carModel, 'create').resolves(carMock.responseMock);
    });
  
    after(()=>{
      sinon.restore();
    });

    it('Success', async () => {
      const newCar = await carModel.create(carMock.bodyMock);

      expect(newCar).to.be.deep.equal(carMock.responseMock);
    });

    it('Failure', async () => {
			let error;
			try {
				await carService.create({});
			} catch (err) {
				error = err
			}

			expect(error).to.be.instanceOf(ZodError);
		});
  });
});