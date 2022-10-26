import * as sinon from 'sinon';
import chai from 'chai';
import { ZodError } from 'zod';
import Car from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMock } from '../../mocks/car.mock';
const { expect } = chai;

describe('Car Service', () => {
  const carModel = new Car();
  const carService = new CarService(carModel);

  describe('Create Car', () => {
    before(async () => {
      sinon.stub(carModel, 'create').resolves(carMock.createResponseMock);
    });
  
    after(()=>{
      sinon.restore();
    });

    it('Success', async () => {
      const newCar = await carService.create(carMock.createBodyMock);

      expect(newCar).to.be.deep.equal(carMock.createResponseMock);
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

  describe('Get all cars', () => {
    before(async () => {
      sinon.stub(carModel, 'read').resolves(carMock.allCars);
    });
  
    after(()=>{
      sinon.restore();
    });

    it('Success', async () => {
      const allCars = await carService.read();

      expect(allCars).to.be.deep.equal(carMock.allCars);
    });
  });

  describe('Get specified car', () => {
    before(async () => {
      sinon.stub(carModel, 'readOne').resolves(carMock.allCars[0]);
    });
  
    after(()=>{
      sinon.restore();
    });

    it('Success', async () => {
      const car = await carService.readOne('4edd40c86762e0fb12000003');

      expect(car).to.be.deep.equal(carMock.allCars[0]);
    });

    it('Failure', async () => {
			let error;
			try {
				await carService.readOne('');
			} catch (err) {
        
				error = err
			}

			expect(error).to.be.instanceOf(Error);
		});
  });

  describe('Update car', () => {
    before(async () => {
      sinon.stub(carModel, 'update').resolves(carMock.updateResponseMock);
    });
  
    after(()=>{
      sinon.restore();
    });

    it('Success', async () => {
      const car = await carService.update('4edd40c86762e0fb12000003', carMock.updateBodyMock);

      expect(car).to.be.deep.equal(carMock.updateResponseMock);
    });

    it('Failure', async () => {
			let error;
			try {
				await carService.update('4edd40c86762e0fb12000003', {});
			} catch (err) {
        
				error = err
			}

			expect(error).to.be.instanceOf(ZodError);
		});
  });
});