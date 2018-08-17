/**
 * @author Claudio Djohnnatha Duarte Lourenço <cdjohnnatha@gmail.com>
 */
const EventEmitter = require('events').EventEmitter;
const HoustonErrorEvent = new EventEmitter();
const logger = require('node-color-log');
  /**
   * Validates the functions entries by string or object.
   * @param {string|Object} value - It will check if value is string or object.
   */
  function DataValidation(value) {
    if (typeof value !== 'string' && typeof value !== 'object') {
      logger.warn(`The key ${value} is being ignored, have a different required type. Must be object or string`);
      return false;
    }
    return true;
  }

  /**
   * Get an object and clean by fields where is undefined, empty or null.
   * @param {object} data
   */
  function CleaningData(data) {
    let cleanedData = data;
    Object.entries(cleanedData).forEach((value) => {
      if(value[1] === undefined || value[1] === null || value[1] === '') {
        logger.warn(`The key ${value[0]} is being ignored because have an undefined, empty or null value`);
        delete cleanedData[value[0]];
      }
    });
    return cleanedData;
  }
  /**
   * Creates a Javascript object error, add extra fields and console everything.
   * @param {object} houstonError - One of objects such as BAD_REQUEST in houstClientErrors.
   * @param {number} message - Custom message (Optional).
   * @param {string} data - Aditional data (Optional).
  */
  function DefaultError(houstonError, {message = undefined, data = undefined}) {
    let defaultError = new Error('');
    if (DataValidation(message)) {
      defaultError = new Error(message);
    }
    defaultError.statusCode = houstonError.code;
    defaultError.code = houstonError.code;
    defaultError.error = houstonError.string;
    defaultError.name = houstonError.name;
    if (DataValidation(data)) {
      defaultError.data = data;
    }
    HoustonErrorEvent.emit('weHaveAProblem', defaultError);
    return CleaningData(defaultError);
  }

  /**
   * @param {object} code - One of objects created by this application.
   * @param {object} error - Error object.
   * @param {string} name - Error name.
   * @param {number} message - Custom message (Optional).
   * @param {string} data - Aditional data (Optional).
   * @param {function} cb - callback function to get the error object.
  */
 function CustomError({
    code = 500,
    error='Internal Server Error',
    name='INTERNAL_SERVER_ERROR',
    message=undefined,
    data=undefined
  }) {
  let customError = new Error('');
  if (DataValidation(message)) {
    customError = new Error(message);
  }
  customError.code = code ? code : undefined;
  customError.error = DataValidation(error) ? error : undefined;
  customError.name = DataValidation(name) ? name : undefined;
  customError.data = DataValidation(data) ? data : undefined;
  HoustonErrorEvent.emit('weHaveAProblem', customError);
  return CleaningData(customError);
}

module.exports = {
  CustomError,
  DefaultError,
  DataValidation,
  CleaningData,
  HoustonErrorEvent,
};