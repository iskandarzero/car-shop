export const carMock = {
  allCars: [{
    _id: '4edd40c86762e0fb12000003',
    model: 'Carro rápido',
    year: 1999,
    color: 'Vermelho',
    buyValue: 55555,
    seatsQty: 7,
    doorsQty: 4
  },
  {
    _id: '2e0fb120000034edd40c8676',
    model: 'Carro lento',
    year: 2001,
    color: 'Azul',
    buyValue: 77777,
    seatsQty: 4,
    doorsQty: 2 
  }],
  createBodyMock: {
    model: 'Carro rápido',
    year: 1999,
    color: 'Vermelho',
    buyValue: 55555,
    seatsQty: 7,
    doorsQty: 4
  },
  createResponseMock: {
    _id: '4edd40c86762e0fb12000003',
    model: 'Carro rápido',
    year: 1999,
    color: 'Vermelho',
    buyValue: 55555,
    seatsQty: 7,
    doorsQty: 4
  },
  updateBodyMock: {
    model: 'Carro velho',
    year: 1940,
    color: 'Preto',
    buyValue: 40000,
    seatsQty: 2,
    doorsQty: 4
  },
  updateResponseMock: {
    _id: '4edd40c86762e0fb12000003',
    model: 'Carro velho',
    year: 1940,
    color: 'preto',
    buyValue: 40000,
    seatsQty: 2,
    doorsQty: 4
  }
}