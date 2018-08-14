/**
 * @author Claudio Djohnnatha Duarte Lourenço <cdjohnnatha@gmail.com>
 */

const { DefaultError } = require('./houston');

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
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
async function BadRequest(message, data) {
  return DefaultError(BAD_REQUEST, { message: message, data: data});
}

/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function Unauthorized(message, data) {
  return DefaultError(UNAUTHORIZED, { message: message, data: data});
}

/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function PaymentRequired(message, data) {
  return DefaultError(PAYMENT_REQUIRED, { message: message, data: data});
}

/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function Forbidden(message, data) {
  message = message || FORBIDDEN.string;
  return DefaultError(FORBIDDEN, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function NotFound(message, data) {
  message = message || NOT_FOUND.string;
  return DefaultError(NOT_FOUND, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function MethodNotAllowed(message, data) {
  message = message || METHOD_NOT_ALLOWED.string;
  return DefaultError(METHOD_NOT_ALLOWED, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function NotAcceptable(message, data) {
  message = message || NOT_ACCEPTABLE.string;
  return DefaultError(NOT_ACCEPTABLE, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function ProxyAuthenticationRequired(message, data) {
  return DefaultError(PROXY_AUTHENTICATION_REQUIRED, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function RequestTimeout(message, data) {
  return DefaultError(REQUEST_TIMEOUT, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function Conflict(message, data) {
  message = message || CONFLICT.string;
  return DefaultError(CONFLICT, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function Gone(message, data) {
  return DefaultError(GONE, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function LengthRequired(message, data) {
  return DefaultError(LENGTH_REQUIRED, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function PreconditionFailed(message, data) {
  return DefaultError(PRECONDITION_FAILED, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function PayloadTooLarge(message, data) {
  return DefaultError(PAYLOAD_TOO_LARGE, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function UriTooLong(message, data) {
  return DefaultError(URI_TOO_LONG, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function UnsupportedMediaType(message, data) {
  return DefaultError(UNSUPPORTED_MEDIA_TYPE, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function RangeNotSatisfiable(message, data) {
  return DefaultError(RANGE_NOT_SATISFIABLE, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function ExpectationFailed(message, data) {
  return DefaultError(EXPECTATION_FAILED, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function ImATeapot(message, data) {
  return DefaultError(IM_A_TEAPOT, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function MisdirectedRequest(message, data) {
  return DefaultError(MISDIRECTED_REQUEST, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function UnprocessableEntity(message, data) {
  return DefaultError(UNPROCESSABLE_ENTITY, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function Locked(message, data) {
  return DefaultError(LOCKED, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function FailedDependency(message, data) {
  return DefaultError(FAILED_DEPENDENCY, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function UnorderedCollection(message, data) {
  return DefaultError(UNORDERED_COLLECTION, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function UpgradeRequired(message, data) {
  return DefaultError(UPGRADE_REQUIRED, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function PreconditionRequired(message, data) {
  return DefaultError(PRECONDITION_REQUIRED, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function TooManyRequests(message, data) {
  return DefaultError(TOO_MANY_REQUESTS, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function RequestHeaderFieldsTooLarge(message, data) {
  return DefaultError(REQUEST_HEADER_FIELDS_TOO_LARGE, { message: message, data: data});
}


/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function UnavailableForLegalReasons(message, data) {
  return DefaultError(UNAVAILABLE_FOR_LEGAL_REASONS, { message: message, data: data});
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
  ExpectationFailed,
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
