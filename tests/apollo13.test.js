const apollo13 = require('../lib/apollo13');


test('Test apollo13 Object strings', async () => {
  const sequelizeTestObject = {
    code: '23502',
    detail: 'Failing row contains.',
    hint: undefined,
    position: undefined,
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: 'public',
    table: 'testTable',
    column: 'source',
    dataType: undefined,
    constraint: undefined,
    file: 'execMain.c',
    errors: [{ error: 'test error', errorsecond: 2 }, { error: 'test'}],
  };
  expect(apollo13.USER_NOT_ACTIVE).toHaveProperty('name', 'USER_NOT_ACTIVE');
  expect(apollo13.USER_NOT_ACTIVE).toHaveProperty('code', 403);
  expect(apollo13.USER_NOT_ACTIVE).toHaveProperty('string', 'User is not active');

  expect(apollo13.LICENSE_IS_NOT_ACTIVE).toHaveProperty('name', 'LICENSE_IS_NOT_ACTIVE');
  expect(apollo13.LICENSE_IS_NOT_ACTIVE).toHaveProperty('code', 403);
  expect(apollo13.LICENSE_IS_NOT_ACTIVE).toHaveProperty('string', 'License is not active');

  expect(apollo13.RENEW_LICENSE_REQUIRED).toHaveProperty('name', 'RENEW_LICENSE_REQUIRED');
  expect(apollo13.RENEW_LICENSE_REQUIRED).toHaveProperty('code', 403);
  expect(apollo13.RENEW_LICENSE_REQUIRED).toHaveProperty('string', 'Renew license required');

  expect(apollo13.NO_TOKEN).toHaveProperty('name', 'NO_TOKEN');
  expect(apollo13.NO_TOKEN).toHaveProperty('code', 401);
  expect(apollo13.NO_TOKEN).toHaveProperty('string', 'No token found');

  expect(apollo13.INVALID_TOKEN).toHaveProperty('name', 'INVALID_TOKEN');
  expect(apollo13.INVALID_TOKEN).toHaveProperty('code', 401);
  expect(apollo13.INVALID_TOKEN).toHaveProperty('string', 'Invalid token');

  expect(apollo13.EXPIRED_TOKEN).toHaveProperty('name', 'EXPIRED_TOKEN');
  expect(apollo13.EXPIRED_TOKEN).toHaveProperty('code', 401);
  expect(apollo13.EXPIRED_TOKEN).toHaveProperty('string', 'Expired token');

  expect(apollo13.EMPTY_REQUIRED_PARAM).toHaveProperty('name', 'EMPTY_REQUIRED_PARAM');
  expect(apollo13.EMPTY_REQUIRED_PARAM).toHaveProperty('code', 406);
  expect(apollo13.EMPTY_REQUIRED_PARAM).toHaveProperty('string', 'Empty required param');

  const sequelizeError = apollo13.SequelizeError(sequelizeTestObject);
  console.log(sequelizeError);
  expect(sequelizeError).toHaveProperty('name', 'SEQUELIZE');
  expect(sequelizeError).toHaveProperty('code', sequelizeTestObject.code);
  expect(sequelizeError).toHaveProperty('error', 'Internal Server Error');
  expect(sequelizeError).toHaveProperty('data', sequelizeTestObject.errors);

})