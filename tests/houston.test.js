const houston = require('../lib/houston');


test('Test Data Validation', async () => {
  const customMessage = 'custom message';
  const data = {message: undefined, data: customMessage};
  houston.DefaultError(404, data, (errorObject) => {
    console.log('>><><><><><><><');
    console.log(errorObject);
  });
});