const { CustomError } = require('./houston');
/**
 * That function is based in {@link http://docs.sequelizejs.com/} using and showing just
 * the basic error from sequelize.
 * @param {Object} databaseError - Error object from sequelize database.
*/
function SequelizeError(databaseError) {
  if (!databaseError) {
    throw new Error('Required Sequelize Error');
  }
  return CustomError({code: databaseError.code, name: 'SEQUELIZE', data: databaseError.code});
}

/**
 * That function is based in {@link https://github.com/tdegrunt/jsonschema#readme} which
 * the object errors returns their stack by array.
 * @param {Object} jsonschemaObjectError - Error object from sequelize database.
 * @param {number} [httpCode=422] - Http error not required, if null throw 406.
*/
function JsonValidationError(jsonschemaObjectError, httpCode) {
  if (!databaseError) {
    throw new Error('Required Sequelize Error');
  }
  return CustomError({
    code: (httpCode || 422),
    name: validationError[0].name,
    data: validationError[0].stack,
  });
}
