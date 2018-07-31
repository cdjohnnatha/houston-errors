const { Logger, CustomError } = require('./core');

const BAD_REQUEST = { name: 'BAD_REQUEST', string: 'Bad Request', code: 400 };
const UNAUTHORIZED = { name: 'UNAUTHORIZED', string: 'Unauthorized', code: 401 };
const PAYMENT_REQUIRED = { name: 'PAYMENT_REQUIRED', string: 'Payment Required', code: 402 };
const FORBIDDEN = { name: 'FORBIDDEN', string: 'Forbidden', code: 403 };
const NOT_FOUND = { name: 'NOT_FOUND', string: 'Not Found', code: 404 };
const METHOD_NOT_ALLOWED = { name: 'METHOD_NOT_ALLOWED', string: 'Method Not Allowed', code: 405 };
const NOT_ACCEPTABLE = { name: 'NOT_ACCEPTABLE', string: 'Not Acceptable', code: 406 };
const PROXY_AUTHENTICATION_REQUIRED = { name: 'PROXY_AUTHENTICATION_REQUIRED', string: 'Proxy Authentication Required', code: 407 }
const REQUEST_TIMEOUT = { name: 'REQUEST_TIMEOUT' , string: 'Request Timeout', code: 408 }
const CONFLICT = { name: 'CONFLIT' , string: 'Conflict', code: 409 }
const GONE = { name: 'GONE' , string: 'Gone', code: 410 }
const LENGTH_REQUIRED = { name: 'LENGTH_REQUIRED' , string: 'Length Required', code: 411 }
const PRECONDITION_FAILED = { name: 'PRECONDITION_FAILED' , string: 'Precondition Failed', code: 412 }
const PAYLOAD_TOO_LARGE = { name: 'PAYLOAD_TOO_LARGE' , string: 'Payload Too Large', code: 413 }
const URI_TOO_LONG = { name: 'URI_TOO_LONG' , string: 'Uri Too Long', code: 414 }
const UNSUPPORTED_MEDIA_TYPE = { name: 'UNSUPPORTED_MEDIA_TYPE' , string: 'Unsupported Media Type', code: 415 }
const RANGE_NOT_SATISFIABLE = { name: 'RANGE_NOT_SATISFIABLE' , string: 'Range Not Satisfiable', code: 416 }
const EXPECTATION_FAILED = { name: 'EXPECTATION_FAILED' , string: 'Expectation Failed', code: 417 }
const IM_A_TEAPOT = { name: 'IM_A_TEAPOT' , string: 'Im a Teapote', code: 418 }
const MISDIRECTED_REQUEST = { name: 'MISDIRECTED_REQUEST' , string: 'Misdirected Request', code: 421 }
const UNPROCESSABLE_ENTITY = { name: 'UNPROCESSABLE_ENTITY', string: 'Unprocessable Entity', code: 422 };
const LOCKED = { name: 'LOCKED', string: 'Locked', code: 423 };
const FAILED_DEPENDENCY = { name: 'FAILED_DEPENDENCY', string: 'Failed Dependency', code: 424 };
const UNORDERED_COLLECTION = { name: 'UNORDERED_COLLECTION', string: 'Unordered Collection', code: 425 };
const UPGRADE_REQUIRED = { name: 'UPGRADE_REQUIRED', string: 'Upgrade Required', code: 426 };
const PRECONDITION_REQUIRED = { name: 'PRECONDITION_REQUIRED', string: 'Precondition Required', code: 428 };
const TOO_MANY_REQUESTS = { name: 'TOO_MANY_REQUESTS', string: 'Too Many Requests', code: 429 };
const REQUEST_HEADER_FIELDS_TOO_LARGE = { name: 'REQUEST_HEADER_FIELDS_TOO_LARGE', string: 'Request Header Fields Too Large', code: 431 };
const UNAVAILABLE_FOR_LEGAL_REASONS = { name: 'UNAVAILABLE_FOR_LEGAL_REASONS', string: 'Unavailable For Legal Reasons', code: 451 };

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
  return Logger, CustomError(message, BAD_REQUEST.code, BAD_REQUEST.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function Unauthorized(message) {
  message = message || UNAUTHORIZED.string;
  return Logger, CustomError(message, UNAUTHORIZED.code, UNAUTHORIZED.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function PaymentRequired(message) {
  message = message || PAYMENT_REQUIRED.string;
  return Logger, CustomError(message, PAYMENT_REQUIRED.code, PAYMENT_REQUIRED.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function Forbidden(message) {
  message = message || FORBIDDEN.string;
  return Logger, CustomError(message, FORBIDDEN.code, FORBIDDEN.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function NotFound(message) {
  message = message || NOT_FOUND.string;
  return Logger, CustomError(message, NOT_FOUND.code, NOT_FOUND.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function MethodNotAllowed(message) {
  message = message || METHOD_NOT_ALLOWED.string;
  return Logger, CustomError(message, METHOD_NOT_ALLOWED.code, METHOD_NOT_ALLOWED.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function NotAcceptable(message) {
  message = message || NOT_ACCEPTABLE.string;
  return Logger, CustomError(message, NOT_ACCEPTABLE.code, NOT_ACCEPTABLE.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function ProxyAuthenticationRequired(message) {
  message = message || PROXY_AUTHENTICATION_REQUIRED.string;
  return Logger, CustomError(message, PROXY_AUTHENTICATION_REQUIRED.code, PROXY_AUTHENTICATION_REQUIRED.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function RequestTimeout(message) {
  message = message || REQUEST_TIMEOUT.string;
  return Logger, CustomError(message, REQUEST_TIMEOUT.code, REQUEST_TIMEOUT.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function Conflict(message) {
  message = message || CONFLICT.string;
  return Logger, CustomError(message, CONFLICT.code, CONFLICT.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function Gone(message) {
  message = message || GONE.string;
  return Logger, CustomError(message, GONE.code, GONE.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function LengthRequired(message) {
  message = message || LENGTH_REQUIRED.string;
  return Logger, CustomError(message, LENGTH_REQUIRED.code, LENGTH_REQUIRED.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function PreconditionFailed(message) {
  message = message || PRECONDITION_FAILED.string;
  return Logger, CustomError(message, PRECONDITION_FAILED.code, PRECONDITION_FAILED.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function PayloadTooLarge(message) {
  message = message || PAYLOAD_TOO_LARGE.string;
  return Logger, CustomError(message, PAYLOAD_TOO_LARGE.code, PAYLOAD_TOO_LARGE.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function UriTooLong(message) {
  message = message || URI_TOO_LONG.string;
  return Logger, CustomError(message, URI_TOO_LONG.code, URI_TOO_LONG.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function UnsupportedMediaType(message) {
  message = message || UNSUPPORTED_MEDIA_TYPE.string;
  return Logger, CustomError(message, UNSUPPORTED_MEDIA_TYPE.code, UNSUPPORTED_MEDIA_TYPE.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function RangeNotSatisfiable(message) {
  message = message || RANGE_NOT_SATISFIABLE.string;
  return Logger, CustomError(message, RANGE_NOT_SATISFIABLE.code, RANGE_NOT_SATISFIABLE.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function ExpectionFailed(message) {
  message = message || EXPECTATION_FAILED.string;
  return Logger, CustomError(message, EXPECTATION_FAILED.code, EXPECTATION_FAILED.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function ImATeapot(message) {
  message = message || IM_A_TEAPOT.string;
  return Logger, CustomError(message, IM_A_TEAPOT.code, IM_A_TEAPOT.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function MisdirectedRequest(message) {
  message = message || MISDIRECTED_REQUEST.string;
  return Logger, CustomError(message, MISDIRECTED_REQUEST.code, MISDIRECTED_REQUEST.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function UnprocessableEntity(message) {
  message = message || UNPROCESSABLE_ENTITY.string;
  return Logger, CustomError(message, UNPROCESSABLE_ENTITY.code, UNPROCESSABLE_ENTITY.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function Locked(message) {
  message = message || LOCKED.string;
  return Logger, CustomError(message, LOCKED.code, LOCKED.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function FailedDependency(message) {
  message = message || FAILED_DEPENDENCY.string;
  return Logger, CustomError(message, FAILED_DEPENDENCY.code, FAILED_DEPENDENCY.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function UnorderedCollection(message) {
  message = message || UNORDERED_COLLECTION.string;
  return Logger, CustomError(message, UNORDERED_COLLECTION.code, UNORDERED_COLLECTION.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function UpgradeRequired(message) {
  message = message || UPGRADE_REQUIRED.string;
  return Logger, CustomError(message, UPGRADE_REQUIRED.code, UPGRADE_REQUIRED.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function PreconditionRequired(message) {
  message = message || PRECONDITION_REQUIRED.string;
  return Logger, CustomError(message, PRECONDITION_REQUIRED.code, PRECONDITION_REQUIRED.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function TooManyRequests(message) {
  message = message || TOO_MANY_REQUESTS.string;
  return Logger, CustomError(message, TOO_MANY_REQUESTS.code, TOO_MANY_REQUESTS.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function RequestHeaderFieldsTooLarge(message) {
  message = message || REQUEST_HEADER_FIELDS_TOO_LARGE.string;
  return Logger, CustomError(message, REQUEST_HEADER_FIELDS_TOO_LARGE.code, REQUEST_HEADER_FIELDS_TOO_LARGE.name);
}

/**
 * @param {string} message - Custom Message body.
 */
function UnavailableForLegalReasons(message) {
  message = message || UNAVAILABLE_FOR_LEGAL_REASONS.string;
  return Logger, CustomError(message, UNAVAILABLE_FOR_LEGAL_REASONS.code, UNAVAILABLE_FOR_LEGAL_REASONS.name);
}


module.exports = {
  BadRequest,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  ProxyAuthenticationRequired,
  RequestTimeout,
  Conflict,
  Gone,
  LengthRequired,
  PreconditionFailed,
  PayloadTooLarge,
  UriTooLong,
  UnsupportedMediaType,
  RangeNotSatisfiable,
  ExpectionFailed,
  ImATeapot,
  MisdirectedRequest,
  UnprocessableEntity,
  Locked,
  FailedDependency,
  UnorderedCollection,
  UpgradeRequired,
  PreconditionRequired,
  TooManyRequests,
  RequestHeaderFieldsTooLarge,
  UnavailableForLegalReasons,

  BAD_REQUEST,
  UNAUTHORIZED,
  PAYMENT_REQUIRED,
  FORBIDDEN,
  NOT_FOUND,
  METHOD_NOT_ALLOWED,
  NOT_ACCEPTABLE,
  PROXY_AUTHENTICATION_REQUIRED,
  REQUEST_TIMEOUT,
  CONFLICT,
  GONE,
  LENGTH_REQUIRED,
  PRECONDITION_FAILED,
  PAYLOAD_TOO_LARGE,
  URI_TOO_LONG,
  UNSUPPORTED_MEDIA_TYPE,
  RANGE_NOT_SATISFIABLE,
  EXPECTATION_FAILED,
  IM_A_TEAPOT,
  MISDIRECTED_REQUEST,
  UNPROCESSABLE_ENTITY,
  LOCKED,
  FAILED_DEPENDENCY,
  UNORDERED_COLLECTION,
  UPGRADE_REQUIRED,
  PRECONDITION_REQUIRED,
  TOO_MANY_REQUESTS,
  REQUEST_HEADER_FIELDS_TOO_LARGE,
  UNAVAILABLE_FOR_LEGAL_REASONS,
};
