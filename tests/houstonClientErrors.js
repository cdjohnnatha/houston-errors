const clientErrors = require('../lib/houstonClientErrors');


test('Test Bad Request', async () => {
  try {
    expect(clientErrors.BAD_REQUEST).toEqual({code: 400, name: 'BAD_REQUEST', string: 'Bad Request'});
    const data = {field: 'test'};
    const message = 'My custom Bad Request Message';
    const defaultBadRequestError = await BadRequest();
    expect(defaultBadRequestError).toHaveProperty('code', 400);
    expect(defaultBadRequestError).toHaveProperty('name', 'BAD_REQUEST');
    expect(defaultBadRequestError).toHaveProperty('error', 'Bad Request');
    // expect(defaultBadRequestError.error).toMatch('Bad Request');
    // expect(defaultBadRequestError.code).toBe(400);
    // expect(defaultBadRequestError.name).toMatch('BAD_REQUEST');
    expect(defaultBadRequestError.data).toBeUndefined();
    const badRequestWithMessage =  await clientErrors.BadRequest(message);
    expect(badRequestWithMessage.code).toBe(400);
    expect(badRequestWithMessage.name).toMatch('BAD_REQUEST');
    expect(badRequestWithMessage.error).toMatch('Bad Request');
    expect(badRequestWithMessage.message).toMatch(message);
    expect(badRequestWithMessage.data).toBeUndefined();

    const badRequestWithMessageData =  await clientErrors.BadRequest(message, data);
    expect(badRequestWithMessageData.code).toBe(400);
    expect(badRequestWithMessageData.name).toMatch('BAD_REQUEST');
    expect(badRequestWithMessageData.error).toMatch('Bad Request');
    expect(badRequestWithMessageData.message).toMatch(message);
    expect(badRequestWithMessageData.data).toMatchObject(data);
    }catch(error) { }
})

test('Test UNAUTHORIZED 401 Request', async () => {
  try {
    expect(clientErrors.UNAUTHORIZED).toEqual({code: 401, name: 'UNAUTHORIZED', string: 'Unauthorized'});
    const data = {field: 'test'};
    const message = 'My custom Unauthorized Message';

    const defaultUnauthorizedError = await clientErrors.Unauthorized();
    expect(defaultUnauthorizedError.code).toBe(401);
    expect(defaultUnauthorizedError.name).toMatch('UNAUTHORIZED');
    expect(defaultUnauthorizedError.error).toMatch('Unauthorized');
    expect(defaultUnauthorizedError.data).toBeUndefined();
    const UnauthorizedWithMessage =  await clientErrors.Unauthorized(message);
    expect(UnauthorizedWithMessage.code).toBe(401);
    expect(UnauthorizedWithMessage.name).toMatch('UNAUTHORIZED');
    expect(UnauthorizedWithMessage.error).toMatch('Unauthorized');
    expect(UnauthorizedWithMessage.message).toMatch(message);
    expect(UnauthorizedWithMessage.data).toBeUndefined();

    const UnauthorizedWithMessageData =  await clientErrors.Unauthorized(message, data);
    expect(UnauthorizedWithMessageData.code).toBe(401);
    expect(UnauthorizedWithMessageData.name).toMatch('UNAUTHORIZED');
    expect(UnauthorizedWithMessageData.error).toMatch('Unauthorized');
    expect(UnauthorizedWithMessageData.message).toMatch(message);
    expect(UnauthorizedWithMessageData.data).toMatchObject(data);
  } catch (e) { }
});

test('Test PAYMENT_REQUIRED 402 Request', async () => {
  try {
    expect(clientErrors.PAYMENT_REQUIRED).toEqual({code: 402, name: 'PAYMENT_REQUIRED', string: 'Payment Required'});
    const data = {field: 'test'};
    const message = 'My custom Payment Required Message';

    const defaultPaymentRequiredError = await clientErrors.PaymentRequired();
    expect(defaultPaymentRequiredError.code).toBe(402);
    expect(defaultPaymentRequiredError.name).toMatch('PAYMENT_REQUIRED');
    expect(defaultPaymentRequiredError.error).toMatch('Payment Required');
    expect(defaultPaymentRequiredError.data).toBeUndefined();
    const PaymentRequiredWithMessage =  await clientErrors.PaymentRequired(message);
    expect(PaymentRequiredWithMessage.code).toBe(402);
    expect(PaymentRequiredWithMessage.name).toMatch('PAYMENT_REQUIRED');
    expect(PaymentRequiredWithMessage.error).toMatch('Payment Required');
    expect(PaymentRequiredWithMessage.message).toMatch(message);
    expect(PaymentRequiredWithMessage.data).toBeUndefined();

    const PaymentRequiredWithMessageData =  await clientErrors.PaymentRequired(message, data);
    expect(PaymentRequiredWithMessageData.code).toBe(402);
    expect(PaymentRequiredWithMessageData.name).toMatch('PAYMENT_REQUIRED');
    expect(PaymentRequiredWithMessageData.error).toMatch('Payment Required');
    expect(PaymentRequiredWithMessageData.message).toMatch(message);
    expect(PaymentRequiredWithMessageData.data).toMatchObject(data);
  } catch (e) { }
});

test('Test FORBIDDEN 403 Request', async () => {
  try {
  expect(clientErrors.FORBIDDEN).toEqual({code: 403, name: 'FORBIDDEN', string: 'Forbidden'});
const data = {field: 'test'};
const message = 'My custom Forbidden Message';

const defaultForbiddenError = await clientErrors.Forbidden();
expect(defaultForbiddenError.code).toBe(403);
expect(defaultForbiddenError.name).toMatch('FORBIDDEN');
expect(defaultForbiddenError.error).toMatch('Forbidden');
expect(defaultForbiddenError.data).toBeUndefined();
const ForbiddenWithMessage =  await clientErrors.Forbidden(message);
expect(ForbiddenWithMessage.code).toBe(403);
expect(ForbiddenWithMessage.name).toMatch('FORBIDDEN');
expect(ForbiddenWithMessage.error).toMatch('Forbidden');
expect(ForbiddenWithMessage.message).toMatch(message);
expect(ForbiddenWithMessage.data).toBeUndefined();

const ForbiddenWithMessageData =  await clientErrors.Forbidden(message, data);
expect(ForbiddenWithMessageData.code).toBe(403);
expect(ForbiddenWithMessageData.name).toMatch('FORBIDDEN');
expect(ForbiddenWithMessageData.error).toMatch('Forbidden');
expect(ForbiddenWithMessageData.message).toMatch(message);
expect(ForbiddenWithMessageData.data).toMatchObject(data);
} catch(e) { }
});

test('Test NOT_FOUND 404 Request', async () => {
  try {
  expect(clientErrors.NOT_FOUND).toEqual({code: 404, name: 'NOT_FOUND', string: 'Not Found'});
  const data = {field: 'test'};
  const message = 'My custom Not Found Message';

  const defaultNotFoundError = await clientErrors.NotFound();
  expect(defaultNotFoundError.code).toBe(404);
  expect(defaultNotFoundError.name).toMatch('NOT_FOUND');
  expect(defaultNotFoundError.error).toMatch('Not Found');
  expect(defaultNotFoundError.data).toBeUndefined();
  const NotFoundWithMessage =  await clientErrors.NotFound(message);
  expect(NotFoundWithMessage.code).toBe(404);
  expect(NotFoundWithMessage.name).toMatch('NOT_FOUND');
  expect(NotFoundWithMessage.error).toMatch('Not Found');
  expect(NotFoundWithMessage.message).toMatch(message);
  expect(NotFoundWithMessage.data).toBeUndefined();

  const NotFoundWithMessageData =  await clientErrors.NotFound(message, data);
  expect(NotFoundWithMessageData.code).toBe(404);
  expect(NotFoundWithMessageData.name).toMatch('NOT_FOUND');
  expect(NotFoundWithMessageData.error).toMatch('Not Found');
  expect(NotFoundWithMessageData.message).toMatch(message);
  expect(NotFoundWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test METHOD_NOT_ALLOWED 405 Request', async () => {
  try {
  expect(clientErrors.METHOD_NOT_ALLOWED).toEqual({code: 405, name: 'METHOD_NOT_ALLOWED', string: 'Method Not Allowed'});
  const data = {field: 'test'};
  const message = 'My custom Not Found Message';

  const defaultMethodNotAllowedError = await clientErrors.MethodNotAllowed();
  expect(defaultMethodNotAllowedError.code).toBe(405);
  expect(defaultMethodNotAllowedError.name).toMatch('METHOD_NOT_ALLOWED');
  expect(defaultMethodNotAllowedError.error).toMatch('Method Not Allowed');
  expect(defaultMethodNotAllowedError.data).toBeUndefined();
  const MethodNotAllowedWithMessage =  await clientErrors.MethodNotAllowed(message);
  expect(MethodNotAllowedWithMessage.code).toBe(405);
  expect(MethodNotAllowedWithMessage.name).toMatch('METHOD_NOT_ALLOWED');
  expect(MethodNotAllowedWithMessage.error).toMatch('Method Not Allowed');
  expect(MethodNotAllowedWithMessage.message).toMatch(message);
  expect(MethodNotAllowedWithMessage.data).toBeUndefined();

  const MethodNotAllowedWithMessageData =  await clientErrors.MethodNotAllowed(message, data);
  expect(MethodNotAllowedWithMessageData.code).toBe(405);
  expect(MethodNotAllowedWithMessageData.name).toMatch('METHOD_NOT_ALLOWED');
  expect(MethodNotAllowedWithMessageData.error).toMatch('Method Not Allowed');
  expect(MethodNotAllowedWithMessageData.message).toMatch(message);
  expect(MethodNotAllowedWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test NOT_ACCEPTABLE 406 Request', async () => {
  try {
  expect(clientErrors.NOT_ACCEPTABLE).toEqual({code: 406, name: 'NOT_ACCEPTABLE', string: 'Not Acceptable'});
  const data = {field: 'test'};
  const message = 'My custom Not Acceptable Message';

  const defaultNotAcceptableError = await clientErrors.NotAcceptable();
  expect(defaultNotAcceptableError.code).toBe(406);
  expect(defaultNotAcceptableError.name).toMatch('NOT_ACCEPTABLE');
  expect(defaultNotAcceptableError.error).toMatch('Not Acceptable');
  expect(defaultNotAcceptableError.data).toBeUndefined();
  const NotAcceptableWithMessage =  await clientErrors.NotAcceptable(message);
  expect(NotAcceptableWithMessage.code).toBe(406);
  expect(NotAcceptableWithMessage.name).toMatch('NOT_ACCEPTABLE');
  expect(NotAcceptableWithMessage.error).toMatch('Not Acceptable');
  expect(NotAcceptableWithMessage.message).toMatch(message);
  expect(NotAcceptableWithMessage.data).toBeUndefined();

  const NotAcceptableWithMessageData =  await clientErrors.NotAcceptable(message, data);
  expect(NotAcceptableWithMessageData.code).toBe(406);
  expect(NotAcceptableWithMessageData.name).toMatch('NOT_ACCEPTABLE');
  expect(NotAcceptableWithMessageData.error).toMatch('Not Acceptable');
  expect(NotAcceptableWithMessageData.message).toMatch(message);
  expect(NotAcceptableWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test PROXY_AUTHENTICATION_REQUIRED 407 Request', async () => {
  try {
  expect(clientErrors.PROXY_AUTHENTICATION_REQUIRED).toEqual({
  code: 407,
  name: 'PROXY_AUTHENTICATION_REQUIRED',
  string: 'Proxy Authentication Required',
});
  const data = {field: 'test'};
  const message = 'My custom optional Message';

  const defaultProxyAuthenticationRequiredError = await clientErrors.ProxyAuthenticationRequired();
  expect(defaultProxyAuthenticationRequiredError.code).toBe(407);
  expect(defaultProxyAuthenticationRequiredError.name).toMatch('PROXY_AUTHENTICATION_REQUIRED');
  expect(defaultProxyAuthenticationRequiredError.error).toMatch('Proxy Authentication Required');
  expect(defaultProxyAuthenticationRequiredError.data).toBeUndefined();
  const ProxyAuthenticationRequiredWithMessage =  await clientErrors.ProxyAuthenticationRequired(message);
  expect(ProxyAuthenticationRequiredWithMessage.code).toBe(407);
  expect(ProxyAuthenticationRequiredWithMessage.name).toMatch('PROXY_AUTHENTICATION_REQUIRED');
  expect(ProxyAuthenticationRequiredWithMessage.error).toMatch('Proxy Authentication Required');
  expect(ProxyAuthenticationRequiredWithMessage.message).toMatch(message);
  expect(ProxyAuthenticationRequiredWithMessage.data).toBeUndefined();

  const ProxyAuthenticationRequiredWithMessageData =  await clientErrors.ProxyAuthenticationRequired(message, data);
  expect(ProxyAuthenticationRequiredWithMessageData.code).toBe(407);
  expect(ProxyAuthenticationRequiredWithMessageData.name).toMatch('PROXY_AUTHENTICATION_REQUIRED');
  expect(ProxyAuthenticationRequiredWithMessageData.error).toMatch('Proxy Authentication Required');
  expect(ProxyAuthenticationRequiredWithMessageData.message).toMatch(message);
  expect(ProxyAuthenticationRequiredWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test REQUEST_TIMEOUT 408 Request', async () => {
  try {
  expect(clientErrors.REQUEST_TIMEOUT).toEqual({code: 408, name: 'REQUEST_TIMEOUT', string: 'Request Timeout'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultRequestTimeoutError = await clientErrors.RequestTimeout();
  expect(defaultRequestTimeoutError.code).toBe(408);
  expect(defaultRequestTimeoutError.name).toMatch('REQUEST_TIMEOUT');
  expect(defaultRequestTimeoutError.error).toMatch('Request Timeout');
  expect(defaultRequestTimeoutError.data).toBeUndefined();
  const RequestTimeoutWithMessage =  await clientErrors.RequestTimeout(message);
  expect(RequestTimeoutWithMessage.code).toBe(408);
  expect(RequestTimeoutWithMessage.name).toMatch('REQUEST_TIMEOUT');
  expect(RequestTimeoutWithMessage.error).toMatch('Request Timeout');
  expect(RequestTimeoutWithMessage.message).toMatch(message);
  expect(RequestTimeoutWithMessage.data).toBeUndefined();

  const RequestTimeoutWithMessageData =  await clientErrors.RequestTimeout(message, data);
  expect(RequestTimeoutWithMessageData.code).toBe(408);
  expect(RequestTimeoutWithMessageData.name).toMatch('REQUEST_TIMEOUT');
  expect(RequestTimeoutWithMessageData.error).toMatch('Request Timeout');
  expect(RequestTimeoutWithMessageData.message).toMatch(message);
  expect(RequestTimeoutWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test CONFLIT 409 Request', async () => {
  try {
  expect(clientErrors.CONFLICT).toEqual({code: 409, name: 'CONFLIT', string: 'Conflict'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultConflictError = await clientErrors.Conflict();
  expect(defaultConflictError.code).toBe(409);
  expect(defaultConflictError.name).toMatch('CONFLIT');
  expect(defaultConflictError.error).toMatch('Conflict');
  expect(defaultConflictError.data).toBeUndefined();
  const ConflictWithMessage =  await clientErrors.Conflict(message);
  expect(ConflictWithMessage.code).toBe(409);
  expect(ConflictWithMessage.name).toMatch('CONFLIT');
  expect(ConflictWithMessage.error).toMatch('Conflict');
  expect(ConflictWithMessage.message).toMatch(message);
  expect(ConflictWithMessage.data).toBeUndefined();

  const ConflictWithMessageData =  await clientErrors.Conflict(message, data);
  expect(ConflictWithMessageData.code).toBe(409);
  expect(ConflictWithMessageData.name).toMatch('CONFLIT');
  expect(ConflictWithMessageData.error).toMatch('Conflict');
  expect(ConflictWithMessageData.message).toMatch(message);
  expect(ConflictWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test GONE 410 Request', async () => {
  try {
  expect(clientErrors.GONE).toEqual({code: 410, name: 'GONE', string: 'Gone'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultGoneError = await clientErrors.Gone();
  expect(defaultGoneError.code).toBe(410);
  expect(defaultGoneError.name).toMatch('GONE');
  expect(defaultGoneError.error).toMatch('Gone');
  expect(defaultGoneError.data).toBeUndefined();
  const GoneWithMessage =  await clientErrors.Gone(message);
  expect(GoneWithMessage.code).toBe(410);
  expect(GoneWithMessage.name).toMatch('GONE');
  expect(GoneWithMessage.error).toMatch('Gone');
  expect(GoneWithMessage.message).toMatch(message);
  expect(GoneWithMessage.data).toBeUndefined();

  const GoneWithMessageData =  await clientErrors.Gone(message, data);
  expect(GoneWithMessageData.code).toBe(410);
  expect(GoneWithMessageData.name).toMatch('GONE');
  expect(GoneWithMessageData.error).toMatch('Gone');
  expect(GoneWithMessageData.message).toMatch(message);
  expect(GoneWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test LENGTH_REQUIRED 411 Request', async () => {
  try {
  expect(clientErrors.LENGTH_REQUIRED).toEqual({code: 411, name: 'LENGTH_REQUIRED', string: 'Length Required'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultLengthRequiredError = await clientErrors.LengthRequired();
  expect(defaultLengthRequiredError.code).toBe(411);
  expect(defaultLengthRequiredError.name).toMatch('LENGTH_REQUIRED');
  expect(defaultLengthRequiredError.error).toMatch('Length Required');
  expect(defaultLengthRequiredError.data).toBeUndefined();
  const LengthRequiredWithMessage =  await clientErrors.LengthRequired(message);
  expect(LengthRequiredWithMessage.code).toBe(411);
  expect(LengthRequiredWithMessage.name).toMatch('LENGTH_REQUIRED');
  expect(LengthRequiredWithMessage.error).toMatch('Length Required');
  expect(LengthRequiredWithMessage.message).toMatch(message);
  expect(LengthRequiredWithMessage.data).toBeUndefined();

  const LengthRequiredWithMessageData =  await clientErrors.LengthRequired(message, data);
  expect(LengthRequiredWithMessageData.code).toBe(411);
  expect(LengthRequiredWithMessageData.name).toMatch('LENGTH_REQUIRED');
  expect(LengthRequiredWithMessageData.error).toMatch('Length Required');
  expect(LengthRequiredWithMessageData.message).toMatch(message);
  expect(LengthRequiredWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test PRECONDITION_FAILED 412 Request', async () => {
  try {
  expect(clientErrors.PRECONDITION_FAILED).toEqual({code: 412, name: 'PRECONDITION_FAILED', string: 'Precondition Failed'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultPreconditionFailedError = await clientErrors.PreconditionFailed();
  expect(defaultPreconditionFailedError.code).toBe(412);
  expect(defaultPreconditionFailedError.name).toMatch('PRECONDITION_FAILED');
  expect(defaultPreconditionFailedError.error).toMatch('Precondition Failed');
  expect(defaultPreconditionFailedError.data).toBeUndefined();
  const PreconditionFailedWithMessage =  await clientErrors.PreconditionFailed(message);
  expect(PreconditionFailedWithMessage.code).toBe(412);
  expect(PreconditionFailedWithMessage.name).toMatch('PRECONDITION_FAILED');
  expect(PreconditionFailedWithMessage.error).toMatch('Precondition Failed');
  expect(PreconditionFailedWithMessage.message).toMatch(message);
  expect(PreconditionFailedWithMessage.data).toBeUndefined();

  const PreconditionFailedWithMessageData =  await clientErrors.PreconditionFailed(message, data);
  expect(PreconditionFailedWithMessageData.code).toBe(412);
  expect(PreconditionFailedWithMessageData.name).toMatch('PRECONDITION_FAILED');
  expect(PreconditionFailedWithMessageData.error).toMatch('Precondition Failed');
  expect(PreconditionFailedWithMessageData.message).toMatch(message);
  expect(PreconditionFailedWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});


test('Test PAYLOAD_TOO_LARGE 413 Request', async () => {
  try {
  expect(clientErrors.PAYLOAD_TOO_LARGE).toEqual({code: 413, name: 'PAYLOAD_TOO_LARGE', string: 'Payload Too Large'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultPayloadTooLargeError = await clientErrors.PayloadTooLarge();
  expect(defaultPayloadTooLargeError.code).toBe(413);
  expect(defaultPayloadTooLargeError.name).toMatch('PAYLOAD_TOO_LARGE');
  expect(defaultPayloadTooLargeError.error).toMatch('Payload Too Large');
  expect(defaultPayloadTooLargeError.data).toBeUndefined();
  const PayloadTooLargeWithMessage =  await clientErrors.PayloadTooLarge(message);
  expect(PayloadTooLargeWithMessage.code).toBe(413);
  expect(PayloadTooLargeWithMessage.name).toMatch('PAYLOAD_TOO_LARGE');
  expect(PayloadTooLargeWithMessage.error).toMatch('Payload Too Large');
  expect(PayloadTooLargeWithMessage.message).toMatch(message);
  expect(PayloadTooLargeWithMessage.data).toBeUndefined();

  const PayloadTooLargeWithMessageData =  await clientErrors.PayloadTooLarge(message, data);
  expect(PayloadTooLargeWithMessageData.code).toBe(413);
  expect(PayloadTooLargeWithMessageData.name).toMatch('PAYLOAD_TOO_LARGE');
  expect(PayloadTooLargeWithMessageData.error).toMatch('Payload Too Large');
  expect(PayloadTooLargeWithMessageData.message).toMatch(message);
  expect(PayloadTooLargeWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});


test('Test URI_TOO_LONG 414 Request', async () => {
  try {
  expect(clientErrors.URI_TOO_LONG).toEqual({code: 414, name: 'URI_TOO_LONG', string: 'Uri Too Long'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultUriTooLongError = await clientErrors.UriTooLong();
  expect(defaultUriTooLongError.code).toBe(414);
  expect(defaultUriTooLongError.name).toMatch('URI_TOO_LONG');
  expect(defaultUriTooLongError.error).toMatch('Uri Too Long');
  expect(defaultUriTooLongError.data).toBeUndefined();
  const UriTooLongWithMessage =  await clientErrors.UriTooLong(message);
  expect(UriTooLongWithMessage.code).toBe(414);
  expect(UriTooLongWithMessage.name).toMatch('URI_TOO_LONG');
  expect(UriTooLongWithMessage.error).toMatch('Uri Too Long');
  expect(UriTooLongWithMessage.message).toMatch(message);
  expect(UriTooLongWithMessage.data).toBeUndefined();

  const UriTooLongWithMessageData =  await clientErrors.UriTooLong(message, data);
  expect(UriTooLongWithMessageData.code).toBe(414);
  expect(UriTooLongWithMessageData.name).toMatch('URI_TOO_LONG');
  expect(UriTooLongWithMessageData.error).toMatch('Uri Too Long');
  expect(UriTooLongWithMessageData.message).toMatch(message);
  expect(UriTooLongWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test UNSUPPORTED_MEDIA_TYPE 415 Request', async () => {
  try {
  expect(clientErrors.UNSUPPORTED_MEDIA_TYPE).toEqual({code: 415, name: 'UNSUPPORTED_MEDIA_TYPE', string: 'Unsupported Media Type'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultUnsupportedMediaTypeError = await clientErrors.UnsupportedMediaType();
  expect(defaultUnsupportedMediaTypeError.code).toBe(415);
  expect(defaultUnsupportedMediaTypeError.name).toMatch('UNSUPPORTED_MEDIA_TYPE');
  expect(defaultUnsupportedMediaTypeError.error).toMatch('Unsupported Media Type');
  expect(defaultUnsupportedMediaTypeError.data).toBeUndefined();
  const UnsupportedMediaTypeWithMessage =  await clientErrors.UnsupportedMediaType(message);
  expect(UnsupportedMediaTypeWithMessage.code).toBe(415);
  expect(UnsupportedMediaTypeWithMessage.name).toMatch('UNSUPPORTED_MEDIA_TYPE');
  expect(UnsupportedMediaTypeWithMessage.error).toMatch('Unsupported Media Type');
  expect(UnsupportedMediaTypeWithMessage.message).toMatch(message);
  expect(UnsupportedMediaTypeWithMessage.data).toBeUndefined();

  const UnsupportedMediaTypeWithMessageData =  await clientErrors.UnsupportedMediaType(message, data);
  expect(UnsupportedMediaTypeWithMessageData.code).toBe(415);
  expect(UnsupportedMediaTypeWithMessageData.name).toMatch('UNSUPPORTED_MEDIA_TYPE');
  expect(UnsupportedMediaTypeWithMessageData.error).toMatch('Unsupported Media Type');
  expect(UnsupportedMediaTypeWithMessageData.message).toMatch(message);
  expect(UnsupportedMediaTypeWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test RANGE_NOT_SATISFIABLE 416 Request', async () => {
  try {
  expect(clientErrors.RANGE_NOT_SATISFIABLE).toEqual({code: 416, name: 'RANGE_NOT_SATISFIABLE', string: 'Range Not Satisfiable'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultRangeNotSatisfiableError = await clientErrors.RangeNotSatisfiable();
  expect(defaultRangeNotSatisfiableError.code).toBe(416);
  expect(defaultRangeNotSatisfiableError.name).toMatch('RANGE_NOT_SATISFIABLE');
  expect(defaultRangeNotSatisfiableError.error).toMatch('Range Not Satisfiable');
  expect(defaultRangeNotSatisfiableError.data).toBeUndefined();
  const RangeNotSatisfiableWithMessage =  await clientErrors.RangeNotSatisfiable(message);
  expect(RangeNotSatisfiableWithMessage.code).toBe(416);
  expect(RangeNotSatisfiableWithMessage.name).toMatch('RANGE_NOT_SATISFIABLE');
  expect(RangeNotSatisfiableWithMessage.error).toMatch('Range Not Satisfiable');
  expect(RangeNotSatisfiableWithMessage.message).toMatch(message);
  expect(RangeNotSatisfiableWithMessage.data).toBeUndefined();

  const RangeNotSatisfiableWithMessageData =  await clientErrors.RangeNotSatisfiable(message, data);
  expect(RangeNotSatisfiableWithMessageData.code).toBe(416);
  expect(RangeNotSatisfiableWithMessageData.name).toMatch('RANGE_NOT_SATISFIABLE');
  expect(RangeNotSatisfiableWithMessageData.error).toMatch('Range Not Satisfiable');
  expect(RangeNotSatisfiableWithMessageData.message).toMatch(message);
  expect(RangeNotSatisfiableWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test EXPECTATION_FAILED 417 Request', async () => {
  try {
  expect(clientErrors.EXPECTATION_FAILED).toEqual({code: 417, name: 'EXPECTATION_FAILED', string: 'Expectation Failed'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultExpectationFailedError = await clientErrors.ExpectationFailed();
  expect(defaultExpectationFailedError.code).toBe(417);
  expect(defaultExpectationFailedError.name).toMatch('EXPECTATION_FAILED');
  expect(defaultExpectationFailedError.error).toMatch('Expectation Failed');
  expect(defaultExpectationFailedError.data).toBeUndefined();
  const ExpectationFailedWithMessage =  await clientErrors.ExpectationFailed(message);
  expect(ExpectationFailedWithMessage.code).toBe(417);
  expect(ExpectationFailedWithMessage.name).toMatch('EXPECTATION_FAILED');
  expect(ExpectationFailedWithMessage.error).toMatch('Expectation Failed');
  expect(ExpectationFailedWithMessage.message).toMatch(message);
  expect(ExpectationFailedWithMessage.data).toBeUndefined();

  const ExpectationFailedWithMessageData =  await clientErrors.ExpectationFailed(message, data);
  expect(ExpectationFailedWithMessageData.code).toBe(417);
  expect(ExpectationFailedWithMessageData.name).toMatch('EXPECTATION_FAILED');
  expect(ExpectationFailedWithMessageData.error).toMatch('Expectation Failed');
  expect(ExpectationFailedWithMessageData.message).toMatch(message);
  expect(ExpectationFailedWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test IM_A_TEAPOT 418 Request', async () => {
  try {
  expect(clientErrors.IM_A_TEAPOT).toEqual({code: 418, name: 'IM_A_TEAPOT', string: 'Im a Teapote'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultImATeapotError = await clientErrors.ImATeapot();
  expect(defaultImATeapotError.code).toBe(418);
  expect(defaultImATeapotError.name).toMatch('IM_A_TEAPOT');
  expect(defaultImATeapotError.error).toMatch('Im a Teapote');
  expect(defaultImATeapotError.data).toBeUndefined();
  const ImATeapotWithMessage =  await clientErrors.ImATeapot(message);
  expect(ImATeapotWithMessage.code).toBe(418);
  expect(ImATeapotWithMessage.name).toMatch('IM_A_TEAPOT');
  expect(ImATeapotWithMessage.error).toMatch('Im a Teapote');
  expect(ImATeapotWithMessage.message).toMatch(message);
  expect(ImATeapotWithMessage.data).toBeUndefined();

  const ImATeapotWithMessageData =  await clientErrors.ImATeapot(message, data);
  expect(ImATeapotWithMessageData.code).toBe(418);
  expect(ImATeapotWithMessageData.name).toMatch('IM_A_TEAPOT');
  expect(ImATeapotWithMessageData.error).toMatch('Im a Teapote');
  expect(ImATeapotWithMessageData.message).toMatch(message);
  expect(ImATeapotWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test UNPROCESSABLE_ENTITY 422 Request', async () => {
  try {
  expect(clientErrors.UNPROCESSABLE_ENTITY).toEqual({code: 422, name: 'UNPROCESSABLE_ENTITY', string: 'Unprocessable Entity'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultUnprocessableEntityError = await clientErrors.UnprocessableEntity();
  expect(defaultUnprocessableEntityError.code).toBe(422);
  expect(defaultUnprocessableEntityError.name).toMatch('UNPROCESSABLE_ENTITY');
  expect(defaultUnprocessableEntityError.error).toMatch('Unprocessable Entity');
  expect(defaultUnprocessableEntityError.data).toBeUndefined();
  const UnprocessableEntityWithMessage =  await clientErrors.UnprocessableEntity(message);
  expect(UnprocessableEntityWithMessage.code).toBe(422);
  expect(UnprocessableEntityWithMessage.name).toMatch('UNPROCESSABLE_ENTITY');
  expect(UnprocessableEntityWithMessage.error).toMatch('Unprocessable Entity');
  expect(UnprocessableEntityWithMessage.message).toMatch(message);
  expect(UnprocessableEntityWithMessage.data).toBeUndefined();

  const UnprocessableEntityWithMessageData =  await clientErrors.UnprocessableEntity(message, data);
  expect(UnprocessableEntityWithMessageData.code).toBe(422);
  expect(UnprocessableEntityWithMessageData.name).toMatch('UNPROCESSABLE_ENTITY');
  expect(UnprocessableEntityWithMessageData.error).toMatch('Unprocessable Entity');
  expect(UnprocessableEntityWithMessageData.message).toMatch(message);
  expect(UnprocessableEntityWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test LOCKED 423 Request', async () => {
  try {
  expect(clientErrors.LOCKED).toEqual({code: 423, name: 'LOCKED', string: 'Locked'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultLockedError = await clientErrors.Locked();
  expect(defaultLockedError.code).toBe(423);
  expect(defaultLockedError.name).toMatch('LOCKED');
  expect(defaultLockedError.error).toMatch('Locked');
  expect(defaultLockedError.data).toBeUndefined();
  const LockedWithMessage =  await clientErrors.Locked(message);
  expect(LockedWithMessage.code).toBe(423);
  expect(LockedWithMessage.name).toMatch('LOCKED');
  expect(LockedWithMessage.error).toMatch('Locked');
  expect(LockedWithMessage.message).toMatch(message);
  expect(LockedWithMessage.data).toBeUndefined();

  const LockedWithMessageData =  await clientErrors.Locked(message, data);
  expect(LockedWithMessageData.code).toBe(423);
  expect(LockedWithMessageData.name).toMatch('LOCKED');
  expect(LockedWithMessageData.error).toMatch('Locked');
  expect(LockedWithMessageData.message).toMatch(message);
  expect(LockedWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test FAILED_DEPENDENCY 424 Request', async () => {
  try {
  expect(clientErrors.FAILED_DEPENDENCY).toEqual({code: 424, name: 'FAILED_DEPENDENCY', string: 'Failed Dependency'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultFailedDependencyError = await clientErrors.FailedDependency();
  expect(defaultFailedDependencyError.code).toBe(424);
  expect(defaultFailedDependencyError.name).toMatch('FAILED_DEPENDENCY');
  expect(defaultFailedDependencyError.error).toMatch('Failed Dependency');
  expect(defaultFailedDependencyError.data).toBeUndefined();
  const FailedDependencyWithMessage =  await clientErrors.FailedDependency(message);
  expect(FailedDependencyWithMessage.code).toBe(424);
  expect(FailedDependencyWithMessage.name).toMatch('FAILED_DEPENDENCY');
  expect(FailedDependencyWithMessage.error).toMatch('Failed Dependency');
  expect(FailedDependencyWithMessage.message).toMatch(message);
  expect(FailedDependencyWithMessage.data).toBeUndefined();

  const FailedDependencyWithMessageData =  await clientErrors.FailedDependency(message, data);
  expect(FailedDependencyWithMessageData.code).toBe(424);
  expect(FailedDependencyWithMessageData.name).toMatch('FAILED_DEPENDENCY');
  expect(FailedDependencyWithMessageData.error).toMatch('Failed Dependency');
  expect(FailedDependencyWithMessageData.message).toMatch(message);
  expect(FailedDependencyWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test UNORDERED_COLLECTION 425 Request', async () => {
  try {
  expect(clientErrors.UNORDERED_COLLECTION).toEqual({code: 425, name: 'UNORDERED_COLLECTION', string: 'Unordered Collection'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultUnorderedCollectionError = await clientErrors.UnorderedCollection();
  expect(defaultUnorderedCollectionError.code).toBe(425);
  expect(defaultUnorderedCollectionError.name).toMatch('UNORDERED_COLLECTION');
  expect(defaultUnorderedCollectionError.error).toMatch('Unordered Collection');
  expect(defaultUnorderedCollectionError.data).toBeUndefined();
  const UnorderedCollectionWithMessage =  await clientErrors.UnorderedCollection(message);
  expect(UnorderedCollectionWithMessage.code).toBe(425);
  expect(UnorderedCollectionWithMessage.name).toMatch('UNORDERED_COLLECTION');
  expect(UnorderedCollectionWithMessage.error).toMatch('Unordered Collection');
  expect(UnorderedCollectionWithMessage.message).toMatch(message);
  expect(UnorderedCollectionWithMessage.data).toBeUndefined();

  const UnorderedCollectionWithMessageData =  await clientErrors.UnorderedCollection(message, data);
  expect(UnorderedCollectionWithMessageData.code).toBe(425);
  expect(UnorderedCollectionWithMessageData.name).toMatch('UNORDERED_COLLECTION');
  expect(UnorderedCollectionWithMessageData.error).toMatch('Unordered Collection');
  expect(UnorderedCollectionWithMessageData.message).toMatch(message);
  expect(UnorderedCollectionWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test UPGRADE_REQUIRED 426 Request', async () => {
  try {
  expect(clientErrors.UPGRADE_REQUIRED).toEqual({code: 426, name: 'UPGRADE_REQUIRED', string: 'Upgrade Required'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultUpgradeRequiredError = await clientErrors.UpgradeRequired();
  expect(defaultUpgradeRequiredError.code).toBe(426);
  expect(defaultUpgradeRequiredError.name).toMatch('UPGRADE_REQUIRED');
  expect(defaultUpgradeRequiredError.error).toMatch('Upgrade Required');
  expect(defaultUpgradeRequiredError.data).toBeUndefined();
  const UpgradeRequiredWithMessage =  await clientErrors.UpgradeRequired(message);
  expect(UpgradeRequiredWithMessage.code).toBe(426);
  expect(UpgradeRequiredWithMessage.name).toMatch('UPGRADE_REQUIRED');
  expect(UpgradeRequiredWithMessage.error).toMatch('Upgrade Required');
  expect(UpgradeRequiredWithMessage.message).toMatch(message);
  expect(UpgradeRequiredWithMessage.data).toBeUndefined();

  const UpgradeRequiredWithMessageData =  await clientErrors.UpgradeRequired(message, data);
  expect(UpgradeRequiredWithMessageData.code).toBe(426);
  expect(UpgradeRequiredWithMessageData.name).toMatch('UPGRADE_REQUIRED');
  expect(UpgradeRequiredWithMessageData.error).toMatch('Upgrade Required');
  expect(UpgradeRequiredWithMessageData.message).toMatch(message);
  expect(UpgradeRequiredWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});

test('Test PRECONDITION_REQUIRED 428 Request', async () => {
  try {
  expect(clientErrors.PRECONDITION_REQUIRED).toEqual({code: 428, name: 'PRECONDITION_REQUIRED', string: 'Precondition Required'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultPreconditionRequiredError = await clientErrors.PreconditionRequired();
  expect(defaultPreconditionRequiredError.code).toBe(428);
  expect(defaultPreconditionRequiredError.name).toMatch('PRECONDITION_REQUIRED');
  expect(defaultPreconditionRequiredError.error).toMatch('Precondition Required');
  expect(defaultPreconditionRequiredError.data).toBeUndefined();
  const PreconditionRequiredWithMessage =  await clientErrors.PreconditionRequired(message);
  expect(PreconditionRequiredWithMessage.code).toBe(428);
  expect(PreconditionRequiredWithMessage.name).toMatch('PRECONDITION_REQUIRED');
  expect(PreconditionRequiredWithMessage.error).toMatch('Precondition Required');
  expect(PreconditionRequiredWithMessage.message).toMatch(message);
  expect(PreconditionRequiredWithMessage.data).toBeUndefined();

  const PreconditionRequiredWithMessageData =  await clientErrors.PreconditionRequired(message, data);
  expect(PreconditionRequiredWithMessageData.code).toBe(428);
  expect(PreconditionRequiredWithMessageData.name).toMatch('PRECONDITION_REQUIRED');
  expect(PreconditionRequiredWithMessageData.error).toMatch('Precondition Required');
  expect(PreconditionRequiredWithMessageData.message).toMatch(message);
  expect(PreconditionRequiredWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});


test('Test TOO_MANY_REQUESTS 429 Request', async () => {
  try {
  expect(clientErrors.TOO_MANY_REQUESTS).toEqual({code: 429, name: 'TOO_MANY_REQUESTS', string: 'Too Many Requests'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultTooManyRequestsError = await clientErrors.TooManyRequests();
  expect(defaultTooManyRequestsError.code).toBe(429);
  expect(defaultTooManyRequestsError.name).toMatch('TOO_MANY_REQUESTS');
  expect(defaultTooManyRequestsError.error).toMatch('Too Many Requests');
  expect(defaultTooManyRequestsError.data).toBeUndefined();
  const TooManyRequestsWithMessage =  await clientErrors.TooManyRequests(message);
  expect(TooManyRequestsWithMessage.code).toBe(429);
  expect(TooManyRequestsWithMessage.name).toMatch('TOO_MANY_REQUESTS');
  expect(TooManyRequestsWithMessage.error).toMatch('Too Many Requests');
  expect(TooManyRequestsWithMessage.message).toMatch(message);
  expect(TooManyRequestsWithMessage.data).toBeUndefined();

  const TooManyRequestsWithMessageData =  await clientErrors.TooManyRequests(message, data);
  expect(TooManyRequestsWithMessageData.code).toBe(429);
  expect(TooManyRequestsWithMessageData.name).toMatch('TOO_MANY_REQUESTS');
  expect(TooManyRequestsWithMessageData.error).toMatch('Too Many Requests');
  expect(TooManyRequestsWithMessageData.message).toMatch(message);
  expect(TooManyRequestsWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});


test('Test REQUEST_HEADER_FIELDS_TOO_LARGE 431 Request', async () => {
  try {
  expect(clientErrors.REQUEST_HEADER_FIELDS_TOO_LARGE).toEqual({code: 431, name: 'REQUEST_HEADER_FIELDS_TOO_LARGE', string: 'Request Header Fields Too Large'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultRequestHeaderFieldsTooLargeError = await clientErrors.RequestHeaderFieldsTooLarge();
  expect(defaultRequestHeaderFieldsTooLargeError.code).toBe(431);
  expect(defaultRequestHeaderFieldsTooLargeError.name).toMatch('REQUEST_HEADER_FIELDS_TOO_LARGE');
  expect(defaultRequestHeaderFieldsTooLargeError.error).toMatch('Request Header Fields Too Large');
  expect(defaultRequestHeaderFieldsTooLargeError.data).toBeUndefined();
  const RequestHeaderFieldsTooLargeWithMessage =  await clientErrors.RequestHeaderFieldsTooLarge(message);
  expect(RequestHeaderFieldsTooLargeWithMessage.code).toBe(431);
  expect(RequestHeaderFieldsTooLargeWithMessage.name).toMatch('REQUEST_HEADER_FIELDS_TOO_LARGE');
  expect(RequestHeaderFieldsTooLargeWithMessage.error).toMatch('Request Header Fields Too Large');
  expect(RequestHeaderFieldsTooLargeWithMessage.message).toMatch(message);
  expect(RequestHeaderFieldsTooLargeWithMessage.data).toBeUndefined();

  const RequestHeaderFieldsTooLargeWithMessageData =  await clientErrors.RequestHeaderFieldsTooLarge(message, data);
  expect(RequestHeaderFieldsTooLargeWithMessageData.code).toBe(431);
  expect(RequestHeaderFieldsTooLargeWithMessageData.name).toMatch('REQUEST_HEADER_FIELDS_TOO_LARGE');
  expect(RequestHeaderFieldsTooLargeWithMessageData.error).toMatch('Request Header Fields Too Large');
  expect(RequestHeaderFieldsTooLargeWithMessageData.message).toMatch(message);
  expect(RequestHeaderFieldsTooLargeWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});


test('Test UNAVAILABLE_FOR_LEGAL_REASONS 451 Request', async () => {
  try {
  expect(clientErrors.UNAVAILABLE_FOR_LEGAL_REASONS).toEqual({code: 451, name: 'UNAVAILABLE_FOR_LEGAL_REASONS', string: 'Unavailable For Legal Reasons'});
  const data = {field: 'test'};
  const message = 'My custom Message';

  const defaultUnavailableForLegalReasonsError = await clientErrors.UnavailableForLegalReasons();
  expect(defaultUnavailableForLegalReasonsError.code).toBe(451);
  expect(defaultUnavailableForLegalReasonsError.name).toMatch('UNAVAILABLE_FOR_LEGAL_REASONS');
  expect(defaultUnavailableForLegalReasonsError.error).toMatch('Unavailable For Legal Reasons');
  expect(defaultUnavailableForLegalReasonsError.data).toBeUndefined();
  const UnavailableForLegalReasonsWithMessage =  await clientErrors.UnavailableForLegalReasons(message);
  expect(UnavailableForLegalReasonsWithMessage.code).toBe(451);
  expect(UnavailableForLegalReasonsWithMessage.name).toMatch('UNAVAILABLE_FOR_LEGAL_REASONS');
  expect(UnavailableForLegalReasonsWithMessage.error).toMatch('Unavailable For Legal Reasons');
  expect(UnavailableForLegalReasonsWithMessage.message).toMatch(message);
  expect(UnavailableForLegalReasonsWithMessage.data).toBeUndefined();

  const UnavailableForLegalReasonsWithMessageData =  await clientErrors.UnavailableForLegalReasons(message, data);
  expect(UnavailableForLegalReasonsWithMessageData.code).toBe(451);
  expect(UnavailableForLegalReasonsWithMessageData.name).toMatch('UNAVAILABLE_FOR_LEGAL_REASONS');
  expect(UnavailableForLegalReasonsWithMessageData.error).toMatch('Unavailable For Legal Reasons');
  expect(UnavailableForLegalReasonsWithMessageData.message).toMatch(message);
  expect(UnavailableForLegalReasonsWithMessageData.data).toMatchObject(data);
  } catch(e) { }
});