const httpRequestErrorsCore = require('../lib/houston');


test('Test Data Validation', async () => {
  const customMessage = 'custom message';
  const data = {field: undefined, field2: customMessage};
  httpRequestErrorsCore.
});