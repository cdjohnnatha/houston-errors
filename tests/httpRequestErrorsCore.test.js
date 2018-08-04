const httpRequestErrorsCore = require('../lib/httpRequestErrorsCore');


test('Test Data Validation', async () => {
  expect(clientErrors.TOO_MANY_REQUESTS).toEqual({code: 429, name: 'TOO_MANY_REQUESTS', string: 'Too Many Requests'});
  const customMessage = 'custom message';
  const data = {field: undefined, field2: customMessage};
});