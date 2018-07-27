const UNPROCESSABLE_ENTITY = { string: 'Unprocessable Entity', code: 406 };
const NOT_FOUND = { string: 'Not Found', code: 400 };
const BAD_REQUEST = { string: 'Bad Request', code: 400 };
const UNAUTHORIZED = { string: 'Unauthorized', code: 401 };
const PAYMENT_REQUIRED = { string: 'Payment Required', code: 402 };
const FORBIDDEN = { string: 'Forbidden', code: 403 };
const METHOD_NOT_ALLOWED = { string: 'Method Not Allowed', code: 405 };
const NOT_ACCEPTABLE = { string: 'Not Acceptable', code: 406 };
const ERR_INVALID_TOKEN = { string: 'ERR_INVALID_TOKEN', code: 401 };
const EMPTY_PARAM = { string: 'Empty value at', code: 406 };
const UNAUTHORIZED_DOMAIN = { string: 'UNAUTHORIZED_DOMAIN', code: 401 };
const EXPIRED_TOKEN = { string: 'EXPIRED_TOKEN', code: 401 };
const ERR_NO_TOKEN = { string: 'ERR_NO_TOKEN', code: 401 };
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
 * @param {string} type - Type of error or null.
*/
function CustomError(message, errorCode, type = null) {
  Logger(message);
  throw new Error(
    message || '',
    errorCode,
    type || null,
  );
}

/**
 * @param {Object} error - Error object.
 * @param {number} errorCode - Code of error.
 * @param {string} type - Type of error or null.
*/
function CommonError(error) {
  Logger(error);
  throw new Error(
    error.message,
    error.code,
    error.type || 'null',
  );
}

/**
 * @param {Object} databaseError - Error object from sequelize database.
 * @param {Object} [httpCode=406] - Http error not required, if null throw 406.
*/
function SequelizeError(databaseError, httpCode) {
  const paramError = databaseError.code ? databaseError.code : httpCode;
  Logger(databaseError);
  throw new Error(
    databaseError.errors,
    paramError || 406,
  );
}

/**
 * @param {Object} validationError - Error object from sequelize database.
 * @param {number} [httpCode=406] - Http error not required, if null throw 406.
*/
function JsonValidationError(validationError, httpCode) {
  Logger(validationError);
  throw new Error(
    validationError[0].stack,
    httpCode || UNPROCESSABLE_ENTITY.code,
    validationError[0].name,
  );
}

/**
 * @param {string} message - Custom Message body.
 */
function BadRequest(message) {
  CustomError(message, BAD_REQUEST.code, BAD_REQUEST.string);
}

/**
 * @param {string} message - Custom Message body.
 */
function Unauthorized(message) {
  CustomError(message, UNAUTHORIZED.code, UNAUTHORIZED.string);
}

/**
 * @param {string} message - Custom Message body.
 */
function PaymentRequired(message) {
  CustomError(message, PAYMENT_REQUIRED.code, PAYMENT_REQUIRED.string);
}

/**
 * @param {string} message - Custom Message body.
 */
function Forbidden(message) {
  CustomError(message, FORBIDDEN.code, FORBIDDEN.string);
}

/**
 * @param {string} message - Custom Message body.
 */
function NotFound(message) {
  CustomError(message, NOT_FOUND.code, NOT_FOUND.string);
}

/**
 * @param {string} message - Custom Message body.
 */
function MethodNotAllowed(message) {
  CustomError(message, METHOD_NOT_ALLOWED.code, METHOD_NOT_ALLOWED.string);
}

/**
 * @param {string} message - Custom Message body.
 */
function NotAcceptable(message) {
  CustomError(message, NOT_ACCEPTABLE.code, NOT_ACCEPTABLE.string);
}

/**
 * @param {string} message - Custom Message body.
 */
function UnprocessableEntity(message) {
  CustomError(message, UNPROCESSABLE_ENTITY.code, UNPROCESSABLE_ENTITY.string);
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
  CommonError,

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
