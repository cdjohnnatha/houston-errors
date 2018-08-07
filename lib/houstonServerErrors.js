/**
 * @author Claudio Djohnnatha Duarte Lourenço <cdjohnnatha@gmail.com>
 */

const { Logger, DefaultError } = require('./houston');

const INTERNAL_SERVER_ERROR = { name: 'INTERNAL_SERVER_ERROR', string: 'Internal Server Error', code: 500 };
const NOT_IMPLEMENTED = { name: 'NOT_IMPLEMENTED', string: 'Not Implemented', code: 501 };
const BAD_GATEWAY = { name: 'BAD_GATEWAY', string: 'Bad Gateway', code: 502 };
const SERVICE_UNAVAILABLE = { name: 'SERVICE_UNAVAILABLE', string: 'Service Unavailable', code: 503 };
const GATEWAY_TIMEOUT = { name: 'GATEWAY_TIMEOUT', string: 'Gateway Timeout', code: 504 };
const HTTP_VERSION_NOT_SUPPORTED = { name: 'HTTP_VERSION_NOT_SUPPORTED', string: 'HTTP Version Not Supported', code: 505 };
const VARIANT_ALSO_NEGOTIATES = { name: 'VARIANT_ALSO_NEGOTIATES', string: 'Variant Also Negotiates', code: 506 };
const INSUFFICIENT_STORAGE = { name: 'INSUFFICIENT_STORAGE', string: 'Insufficient Storage', code: 507 };
const LOOP_DETECTED = { name: 'LOOP_DETECTED', string: 'Loop Detected', code: 508 };
const BANDWIDTH_LIMIT_EXCEEDED = { name: 'BANDWIDTH_LIMIT_EXCEEDED', string: 'Bandwidth Limit Exceeded', code: 509 };
const NOT_EXTENDEED = { name: 'NOT_EXTENDEED', string: 'Not Extended', code: 510 };
const NETWORK_AUTHENTICATION_REQUIRED = { name: 'NETWORK_AUTHENTICATION_REQUIRED', string: 'Network Authentication Required', code: 511 };



/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function InternalServerError(message, data) {
  return DefaultError(INTERNAL_SERVER_ERROR, message, data);
}

/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function NotImplemented(message, data) {
  return DefaultError(NOT_IMPLEMENTED, message, data);
}

/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function BadGateway(message, data) {
  return DefaultError(BAD_GATEWAY, message, data);
}

/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function ServiceUnavailable(message, data) {
  return DefaultError(SERVICE_UNAVAILABLE, message, data);
}

/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function GatewayTimeout(message, data) {
  return DefaultError(GATEWAY_TIMEOUT, message, data);
}

/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function HTTPVersionNotSupported(message, data) {
  return DefaultError(HTTP_VERSION_NOT_SUPPORTED, message, data);
}

/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function VariantAlsoNegotiates(message, data) {
  return DefaultError(VARIANT_ALSO_NEGOTIATES, message, data);
}

/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function InsufficientStorage(message, data) {
  return DefaultError(INSUFFICIENT_STORAGE, message, data);
}

/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function LoopDetected(message, data) {
  return DefaultError(LOOP_DETECTED, message, data);
}

/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function BandwidthLimitExceeded(message, data) {
  return DefaultError(BANDWIDTH_LIMIT_EXCEEDED, message, data);
}

/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function NotExtended(message, data) {
  return DefaultError(NOT_EXTENDEED, message, data);
}

/**
 * @param {string} message - Custom Message (Optional).
 * @param {string|object} data - Custom Message (Optional).
 */
function NetworkAuthenticationRequired(message, data) {
  return DefaultError(NETWORK_AUTHENTICATION_REQUIRED, message, data);
}


module.exports = {
  INTERNAL_SERVER_ERROR,
  NOT_IMPLEMENTED,
  BAD_GATEWAY,
  SERVICE_UNAVAILABLE,
  GATEWAY_TIMEOUT,
  HTTP_VERSION_NOT_SUPPORTED,
  VARIANT_ALSO_NEGOTIATES,
  INSUFFICIENT_STORAGE,
  LOOP_DETECTED,
  BANDWIDTH_LIMIT_EXCEEDED,
  NOT_EXTENDEED,
  NETWORK_AUTHENTICATION_REQUIRED,

  InternalServerError,
  NotImplemented,
  BadGateway,
  ServiceUnavailable,
  GatewayTimeout,
  HTTPVersionNotSupported,
  VariantAlsoNegotiates,
  InsufficientStorage,
  LoopDetected,
  BandwidthLimitExceeded,
  NotExtended,
  NetworkAuthenticationRequired,
};
