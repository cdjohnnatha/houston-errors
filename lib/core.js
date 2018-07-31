
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

module.exports = {
    Logger,
    CustomError,
    ThrowError,
};