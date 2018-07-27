const UNPROCESSABLE_ENTITY = {
  name: 'UNPROCESSABLE_ENTITY',
  string: 'Unprocessable Entity',
  code: 406,
};
const NOT_FOUND = { name: 'NOT_FOUND', string: 'Not Found', code: 400 };
const BAD_REQUEST = { name: 'BAD_REQUEST', string: 'Bad Request', code: 400 };
const UNAUTHORIZED = { name: 'UNAUTHORIZED', string: 'Unauthorized', code: 401 };
const PAYMENT_REQUIRED = { name: 'PAYMENT_REQUIRED', string: 'Payment Required', code: 402 };
const FORBIDDEN = { name: 'FORBIDDEN', string: 'Forbidden', code: 403 };
const METHOD_NOT_ALLOWED = { name: 'METHOD_NOT_ALLOWED', string: 'Method Not Allowed', code: 405 };
const NOT_ACCEPTABLE = { name: 'NOT_ACCEPTABLE', string: 'Not Acceptable', code: 406 };
const UNAUTHORIZED_DOMAIN = { name: 'UNAUTHORIZED_DOMAIN', string: 'UNAUTHORIZED_DOMAIN', code: 401 };
const EMPTY_PARAM = { name: 'EMPTY_PARAM', string: 'Empty value at', code: 406 };
const ERR_INVALID_TOKEN = { name: 'ERR_INVALID_TOKEN', string: 'ERR_INVALID_TOKEN', code: 401 };
const EXPIRED_TOKEN = { name: 'EXPIRED_TOKEN', string: 'EXPIRED_TOKEN', code: 401 };
const ERR_NO_TOKEN = { name: 'ERR_NO_TOKEN', string: 'ERR_NO_TOKEN', code: 401 };
/**
 * It is possible set that function to connect a some external log.
 * @param {*} error Object error or error message which will be handled to print.
 */
function Logger(error) {
  console.log(error.code);
  console.log(error.message);
}

/**
 * @param {string} message - Custom message.
 * @param {number} errorCode - Code of error.
 * @param {string} name - Name of error or null (Optional).
 * @param {string} stack - Stack of error or null (Optional).
*/
function CustomError(message, errorCode, name, stack) {
  Logger(message);
  let error = new Error();
  error.message = message || '';
  error.code = errorCode;
  error.name = name || null;
  error.stack =   stack || null;
  return error;
}

/**
 * @param {Object} error - Error object.
*/
function ThrowError(error) {
  Logger(error);
  return error;
}

/**
 * @param {Object} databaseError - Error object from sequelize database.
 * @param {Object} [httpCode=406] - Http error not required, if null throw 406.
*/
function SequelizeError(databaseError, httpCode) {
  const paramError = databaseError.code ? databaseError.code : httpCode;
  Logger(databaseError);
  const error = new Error();
  error.errors = databaseError.errors;
  error.code = paramError || 406;
  return error;
}

/**
 * @param {Object} validationError - Error object from sequelize database.
 * @param {number} [httpCode=406] - Http error not required, if null throw 406.
*/
function JsonValidationError(validationError, httpCode) {
  Logger(validationError);
  throw new Error();
  error.stack = validationError[0].stack;
  error.code = httpCode || UNPROCESSABLE_ENTITY.code;
  error.name = validationError[0].name;
}

/**
 * @param {string} message - Custom Message body.
 */
function BadRequest(message) {
  message = message || BAD_REQUEST.string
  return CustomError(message, BAD_REQUEST.code, BAD_REQUEST.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function Unauthorized(message) {
  message = message || UNAUTHORIZED.string;
  return CustomError(message, UNAUTHORIZED.code, UNAUTHORIZED.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function PaymentRequired(message) {
  message = message || PAYMENT_REQUIRED.string;
  return CustomError(message, PAYMENT_REQUIRED.code, PAYMENT_REQUIRED.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function Forbidden(message) {
  message = message || FORBIDDEN.string;
  return CustomError(message, FORBIDDEN.code, FORBIDDEN.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function NotFound(message) {
  message = message || NOT_FOUND.string;
  return CustomError(message, NOT_FOUND.code, NOT_FOUND.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function MethodNotAllowed(message) {
  message = message || METHOD_NOT_ALLOWED.string;
  return CustomError(message, METHOD_NOT_ALLOWED.code, METHOD_NOT_ALLOWED.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function NotAcceptable(message) {
  message = message || NOT_ACCEPTABLE.string;
  return CustomError(message, NOT_ACCEPTABLE.code, NOT_ACCEPTABLE.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function UnprocessableEntity(message) {
  message = message || UNPROCESSABLE_ENTITY.string;
  return CustomError(message, UNPROCESSABLE_ENTITY.code, UNPROCESSABLE_ENTITY.name);
}

module.exports = {
  CustomError,
  SequelizeError,
  JsonValidationError,
  BadRequest,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  UnprocessableEntity,
  ThrowError,

  UNPROCESSABLE_ENTITY,
  NOT_FOUND,
  BAD_REQUEST,
  UNAUTHORIZED,
  PAYMENT_REQUIRED,
  FORBIDDEN,
  METHOD_NOT_ALLOWED,
  NOT_ACCEPTABLE,
  ERR_NO_TOKEN,
  ERR_INVALID_TOKEN,
  EMPTY_PARAM,
  UNAUTHORIZED_DOMAIN,
  EXPIRED_TOKEN,
};
