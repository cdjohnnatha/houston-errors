const { CustomError } = require('./houston');

const USER_NOT_ACTIVE = { name: 'USER_NOT_ACTIVE', string: 'User is not active', code: 403 };
const LICENSE_IS_NOT_ACTIVE = { name: 'LICENSE_IS_NOT_ACTIVE', string: 'License is not active', code: 403 };
const RENEW_LICENSE_REQUIRED = { name: 'RENEW_LICENSE_REQUIRED', string: 'Renew license required', code: 403 };
const NO_TOKEN = { name: 'NO_TOKEN', string: 'No token found', code: 401 };
const INVALID_TOKEN = { name: 'INVALID_TOKEN', string: 'Invalid token', code: 401 };
const EXPIRED_TOKEN = { name: 'EXPIRED_TOKEN', string: 'Expired token', code: 401 };
const EMPTY_REQUIRED_PARAM = { name: 'EMPTY_REQUIRED_PARAM', string: 'Empty required param', code: 406 };

/**
 * That function is based in {@link http://docs.sequelizejs.com/} using and showing just
 * the basic error from sequelize.
 * @param {Object} databaseError - Error object from sequelize database.
*/
function SequelizeError(databaseError) {
  if (!databaseError) {
    throw new Error('Required Sequelize Error');
  }
  return CustomError({code: databaseError.code, name: 'SEQUELIZE', data: databaseError.errors});
}

module.exports = {
  USER_NOT_ACTIVE,
  LICENSE_IS_NOT_ACTIVE,
  RENEW_LICENSE_REQUIRED,
  NO_TOKEN,
  INVALID_TOKEN,
  EXPIRED_TOKEN,
  EMPTY_REQUIRED_PARAM,
  SequelizeError,
}
