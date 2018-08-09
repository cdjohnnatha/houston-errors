const houston = require('../lib/houston');
const houstonClientErrors = require('../lib/houstonClientErrors');
const events = require('events').EventEmitter;
const eventEmitter = new events();
var emitter = require('events').EventEmitter;
var em = new emitter();

test('Test HoustonErrorEvent', async () => {
  const customMessage = 'custom message';
  const data = {message: undefined, data: customMessage};

  houston.HoustonErrorEvent.on('weHaveAProblem', (error) => {
    expect(error.code).toBe(400);
    expect(error.name).toMatch('BAD_REQUEST');
    expect(error.error).toMatch('Bad Request');
    expect(error.data).toBeUndefined();
  });
  await houstonClientErrors.BadRequest();
});

test('Test CleaningData', async () => {
  const object = {name: null, code: undefined, error: 'Not Found'};
  let cleaned = await houston.CleaningData(object);
  expect(object).not.toHaveProperty('name');
  expect(object).not.toHaveProperty('code');
  expect(object).toHaveProperty('error', 'Not Found');
});

test('Test DefaultError', async () => {
  const defaultError = await houston.DefaultError(houstonClientErrors.BAD_REQUEST,{
    message: 'test',
    data: '{data: houston, we have a problem.}',
  })
  expect(defaultError).not.toHaveProperty('name', 'BAD_REQUEST');
  expect(object).not.toHaveProperty('code', 400);
  expect(object).toHaveProperty('error', 'Bad Request');
  expect(object).toHaveProperty('data', 'houston, we have a problem');
});
