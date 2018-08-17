const houston = require('../lib/houston');
const houstonClientErrors = require('../lib/houstonClientErrors');
const events = require('events').EventEmitter;
const eventEmitter = new events();

test('Test CleaningData', () => {
  const object = {name: null, code: undefined, error: 'Not Found'};
  let cleaned = houston.CleaningData(object);
  expect(object).not.toHaveProperty('name');
  expect(object).not.toHaveProperty('code');
  expect(object).toHaveProperty('error', 'Not Found');
});

test('Test DefaultError', async () => {
  const sendMessage = 'This is Houston. Say again, please';
  let defaultError = await houston.DefaultError(houstonClientErrors.BAD_REQUEST, {
    message: sendMessage,
    data: '{Lousma: houston, we have a problem.}',
  });
  expect(defaultError).toHaveProperty('name', 'BAD_REQUEST');
  expect(defaultError).toHaveProperty('code', 400);
  expect(defaultError).toHaveProperty('error', 'Bad Request');
  expect(defaultError).toHaveProperty('message', sendMessage);
  expect(defaultError).toHaveProperty('data', '{Lousma: houston, we have a problem.}');

  defaultError = await houston.DefaultError(houstonClientErrors.BAD_REQUEST, {
    message: sendMessage,
  });
  expect(defaultError).toHaveProperty('name', 'BAD_REQUEST');
  expect(defaultError).toHaveProperty('code', 400);
  expect(defaultError).toHaveProperty('error', 'Bad Request');
  expect(defaultError).toHaveProperty('message', sendMessage);
  expect(defaultError).not.toHaveProperty('data');

  defaultError = await houston.DefaultError(houstonClientErrors.BAD_REQUEST, {});
  expect(defaultError).toHaveProperty('name', 'BAD_REQUEST');
  expect(defaultError).toHaveProperty('code', 400);
  expect(defaultError).toHaveProperty('error', 'Bad Request');
  expect(defaultError).not.toHaveProperty('data');
});


test('Test CustomError', async () => {
  const sendMessage = 'This is Houston. Say again, please';
  const lovellData = {lovell: 'We have had a MAIN B BUS UNDERVOLT'};
  const errorDef = 'houston, we have a problem';
  let customError = await houston.CustomError({
    code: 406,
    error: errorDef,
    name:'Lousma',
    message: sendMessage,
    data: lovellData,
  });
  expect(customError).toHaveProperty('name', 'Lousma');
  expect(customError).toHaveProperty('code', 406);
  expect(customError).toHaveProperty('error', errorDef);
  expect(customError).toHaveProperty('message', sendMessage);
  expect(customError).toHaveProperty('data', lovellData);

  customError = await houston.CustomError({
    error: errorDef,
    name:'Lousma',
    message: sendMessage,
    data: lovellData,
  });
  expect(customError).toHaveProperty('code', 500);
  expect(customError).toHaveProperty('name', 'Lousma');
  expect(customError).toHaveProperty('error', errorDef);
  expect(customError).toHaveProperty('message', sendMessage);
  expect(customError).toHaveProperty('data', lovellData);

  customError = await houston.CustomError({
    name:'Lousma',
    message: sendMessage,
    data: lovellData,
  });
  expect(customError).toHaveProperty('code', 500);
  expect(customError).toHaveProperty('error', 'Internal Server Error');
  expect(customError).toHaveProperty('name', 'Lousma');
  expect(customError).toHaveProperty('message', sendMessage);
  expect(customError).toHaveProperty('data', lovellData);

  customError = await houston.CustomError({
    message: sendMessage,
    data: lovellData,
  });
  expect(customError).toHaveProperty('code', 500);
  expect(customError).toHaveProperty('error', 'Internal Server Error');
  expect(customError).toHaveProperty('name', 'INTERNAL_SERVER_ERROR');
  expect(customError).toHaveProperty('message', sendMessage);
  expect(customError).toHaveProperty('data', lovellData);

  customError = await houston.CustomError({
    data: lovellData,
  });

  expect(customError).toHaveProperty('code', 500);
  expect(customError).toHaveProperty('error', 'Internal Server Error');
  expect(customError).toHaveProperty('name', 'INTERNAL_SERVER_ERROR');
  expect(customError).toHaveProperty('message', '');
  expect(customError).toHaveProperty('data', lovellData);

  customError = await houston.CustomError({});
  expect(customError).toHaveProperty('code', 500);
  expect(customError).toHaveProperty('error', 'Internal Server Error');
  expect(customError).toHaveProperty('name', 'INTERNAL_SERVER_ERROR');
  expect(customError).toHaveProperty('message', '');
  expect(customError).not.toHaveProperty('data');
});



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
