const clientErrors = require('../lib/houstonServerErrors');

test('Test 500 - Internal Server Error', async () => {
    expect(clientErrors.INTERNAL_SERVER_ERROR).toEqual({code: 500, name: 'INTERNAL_SERVER_ERROR', string: 'Internal Server Error'});
      const data = {field: 'test'};
      const message = 'My custom Internal Server Error Message';

      const defaultInternalServerErrorError = await clientErrors.InternalServerError();
      expect(defaultInternalServerErrorError.code).toBe(500);
      expect(defaultInternalServerErrorError.name).toMatch('INTERNAL_SERVER_ERROR');
      expect(defaultInternalServerErrorError.error).toMatch('Internal Server Error');
      expect(defaultInternalServerErrorError.data).toBeUndefined();
      const InternalServerErrorWithMessage =  await clientErrors.InternalServerError(message);
      expect(InternalServerErrorWithMessage.code).toBe(500);
      expect(InternalServerErrorWithMessage.name).toMatch('INTERNAL_SERVER_ERROR');
      expect(InternalServerErrorWithMessage.error).toMatch('Internal Server Error');
      expect(InternalServerErrorWithMessage.message).toMatch(message);
      expect(InternalServerErrorWithMessage.data).toBeUndefined();

      const InternalServerErrorWithMessageData =  await clientErrors.InternalServerError(message, data);
      expect(InternalServerErrorWithMessageData.code).toBe(500);
      expect(InternalServerErrorWithMessageData.name).toMatch('INTERNAL_SERVER_ERROR');
      expect(InternalServerErrorWithMessageData.error).toMatch('Internal Server Error');
      expect(InternalServerErrorWithMessageData.message).toMatch(message);
      expect(InternalServerErrorWithMessageData.data).toMatchObject(data);
});

test('Test 501 - Not Implemented', async () => {
    expect(clientErrors.NOT_IMPLEMENTED).toEqual({code: 501, name: 'NOT_IMPLEMENTED', string: 'Not Implemented'});
      const data = {field: 'test'};
      const message = 'My custom Not Implemented Message';

      const defaultNotImplementedError = await clientErrors.NotImplemented();
      expect(defaultNotImplementedError.code).toBe(501);
      expect(defaultNotImplementedError.name).toMatch('NOT_IMPLEMENTED');
      expect(defaultNotImplementedError.error).toMatch('Not Implemented');
      expect(defaultNotImplementedError.data).toBeUndefined();
      const NotImplementedWithMessage =  await clientErrors.NotImplemented(message);
      expect(NotImplementedWithMessage.code).toBe(501);
      expect(NotImplementedWithMessage.name).toMatch('NOT_IMPLEMENTED');
      expect(NotImplementedWithMessage.error).toMatch('Not Implemented');
      expect(NotImplementedWithMessage.message).toMatch(message);
      expect(NotImplementedWithMessage.data).toBeUndefined();

      const NotImplementedWithMessageData =  await clientErrors.NotImplemented(message, data);
      expect(NotImplementedWithMessageData.code).toBe(501);
      expect(NotImplementedWithMessageData.name).toMatch('NOT_IMPLEMENTED');
      expect(NotImplementedWithMessageData.error).toMatch('Not Implemented');
      expect(NotImplementedWithMessageData.message).toMatch(message);
      expect(NotImplementedWithMessageData.data).toMatchObject(data);
});

test('Test 502 - Bad Gateway', async () => {
    expect(clientErrors.BAD_GATEWAY).toEqual({code: 502, name: 'BAD_GATEWAY', string: 'Bad Gateway'});
      const data = {field: 'test'};
      const message = 'My custom Bad Gateway Message';

      const defaultBadGateway = await clientErrors.BadGateway();
      expect(defaultBadGateway.code).toBe(502);
      expect(defaultBadGateway.name).toMatch('BAD_GATEWAY');
      expect(defaultBadGateway.error).toMatch('Bad Gateway');
      expect(defaultBadGateway.data).toBeUndefined();
      const BadGatewayWithMessage =  await clientErrors.BadGateway(message);
      expect(BadGatewayWithMessage.code).toBe(502);
      expect(BadGatewayWithMessage.name).toMatch('BAD_GATEWAY');
      expect(BadGatewayWithMessage.error).toMatch('Bad Gateway');
      expect(BadGatewayWithMessage.message).toMatch(message);
      expect(BadGatewayWithMessage.data).toBeUndefined();

      const BadGatewayWithMessageData =  await clientErrors.BadGateway(message, data);
      expect(BadGatewayWithMessageData.code).toBe(502);
      expect(BadGatewayWithMessageData.name).toMatch('BAD_GATEWAY');
      expect(BadGatewayWithMessageData.error).toMatch('Bad Gateway');
      expect(BadGatewayWithMessageData.message).toMatch(message);
      expect(BadGatewayWithMessageData.data).toMatchObject(data);
});

test('Test 503 - Service Unavailable', async () => {
    expect(clientErrors.SERVICE_UNAVAILABLE).toEqual({code: 503, name: 'SERVICE_UNAVAILABLE', string: 'Service Unavailable'});
      const data = {field: 'test'};
      const message = 'My custom Service Unavailable Message';

      const defaultServiceUnavailableError = await clientErrors.ServiceUnavailable();
      expect(defaultServiceUnavailableError.code).toBe(503);
      expect(defaultServiceUnavailableError.name).toMatch('SERVICE_UNAVAILABLE');
      expect(defaultServiceUnavailableError.error).toMatch('Service Unavailable');
      expect(defaultServiceUnavailableError.data).toBeUndefined();
      const ServiceUnavailableWithMessage =  await clientErrors.ServiceUnavailable(message);
      expect(ServiceUnavailableWithMessage.code).toBe(503);
      expect(ServiceUnavailableWithMessage.name).toMatch('SERVICE_UNAVAILABLE');
      expect(ServiceUnavailableWithMessage.error).toMatch('Service Unavailable');
      expect(ServiceUnavailableWithMessage.message).toMatch(message);
      expect(ServiceUnavailableWithMessage.data).toBeUndefined();

      const ServiceUnavailableWithMessageData =  await clientErrors.ServiceUnavailable(message, data);
      expect(ServiceUnavailableWithMessageData.code).toBe(503);
      expect(ServiceUnavailableWithMessageData.name).toMatch('SERVICE_UNAVAILABLE');
      expect(ServiceUnavailableWithMessageData.error).toMatch('Service Unavailable');
      expect(ServiceUnavailableWithMessageData.message).toMatch(message);
      expect(ServiceUnavailableWithMessageData.data).toMatchObject(data);
});

test('Test 504 - Gateway Timeout', async () => {
    expect(clientErrors.GATEWAY_TIMEOUT).toEqual({code: 504, name: 'GATEWAY_TIMEOUT', string: 'Gateway Timeout'});
      const data = {field: 'test'};
      const message = 'My custom Gateway Timeout Message';

      const defaultGatewayTimeoutError = await clientErrors.GatewayTimeout();
      expect(defaultGatewayTimeoutError.code).toBe(504);
      expect(defaultGatewayTimeoutError.name).toMatch('GATEWAY_TIMEOUT');
      expect(defaultGatewayTimeoutError.error).toMatch('Gateway Timeout');
      expect(defaultGatewayTimeoutError.data).toBeUndefined();
      const GatewayTimeoutWithMessage =  await clientErrors.GatewayTimeout(message);
      expect(GatewayTimeoutWithMessage.code).toBe(504);
      expect(GatewayTimeoutWithMessage.name).toMatch('GATEWAY_TIMEOUT');
      expect(GatewayTimeoutWithMessage.error).toMatch('Gateway Timeout');
      expect(GatewayTimeoutWithMessage.message).toMatch(message);
      expect(GatewayTimeoutWithMessage.data).toBeUndefined();

      const GatewayTimeoutWithMessageData =  await clientErrors.GatewayTimeout(message, data);
      expect(GatewayTimeoutWithMessageData.code).toBe(504);
      expect(GatewayTimeoutWithMessageData.name).toMatch('GATEWAY_TIMEOUT');
      expect(GatewayTimeoutWithMessageData.error).toMatch('Gateway Timeout');
      expect(GatewayTimeoutWithMessageData.message).toMatch(message);
      expect(GatewayTimeoutWithMessageData.data).toMatchObject(data);
});

test('Test 505 - HTTP Version Not Supported', async () => {
    expect(clientErrors.HTTP_VERSION_NOT_SUPPORTED).toEqual({code: 505, name: 'HTTP_VERSION_NOT_SUPPORTED', string: 'HTTP Version Not Supported'});
      const data = {field: 'test'};
      const message = 'My custom HTTP Version Not Supported Message';

      const defaultHTTPVersionNotSupportedError = await clientErrors.HTTPVersionNotSupported();
      expect(defaultHTTPVersionNotSupportedError.code).toBe(505);
      expect(defaultHTTPVersionNotSupportedError.name).toMatch('HTTP_VERSION_NOT_SUPPORTED');
      expect(defaultHTTPVersionNotSupportedError.error).toMatch('HTTP Version Not Supported');
      expect(defaultHTTPVersionNotSupportedError.data).toBeUndefined();
      const HTTPVersionNotSupportedWithMessage =  await clientErrors.HTTPVersionNotSupported(message);
      expect(HTTPVersionNotSupportedWithMessage.code).toBe(505);
      expect(HTTPVersionNotSupportedWithMessage.name).toMatch('HTTP_VERSION_NOT_SUPPORTED');
      expect(HTTPVersionNotSupportedWithMessage.error).toMatch('HTTP Version Not Supported');
      expect(HTTPVersionNotSupportedWithMessage.message).toMatch(message);
      expect(HTTPVersionNotSupportedWithMessage.data).toBeUndefined();

      const HTTPVersionNotSupportedWithMessageData =  await clientErrors.HTTPVersionNotSupported(message, data);
      expect(HTTPVersionNotSupportedWithMessageData.code).toBe(505);
      expect(HTTPVersionNotSupportedWithMessageData.name).toMatch('HTTP_VERSION_NOT_SUPPORTED');
      expect(HTTPVersionNotSupportedWithMessageData.error).toMatch('HTTP Version Not Supported');
      expect(HTTPVersionNotSupportedWithMessageData.message).toMatch(message);
      expect(HTTPVersionNotSupportedWithMessageData.data).toMatchObject(data);
});

test('Test 506 - Variant Also Negotiates', async () => {
    expect(clientErrors.VARIANT_ALSO_NEGOTIATES).toEqual({code: 506, name: 'VARIANT_ALSO_NEGOTIATES', string: 'Variant Also Negotiates'});
      const data = {field: 'test'};
      const message = 'My custom Variant Also Negotiates Message';

      const defaultVariantAlsoNegotiatesError = await clientErrors.VariantAlsoNegotiates();
      expect(defaultVariantAlsoNegotiatesError.code).toBe(506);
      expect(defaultVariantAlsoNegotiatesError.name).toMatch('VARIANT_ALSO_NEGOTIATES');
      expect(defaultVariantAlsoNegotiatesError.error).toMatch('Variant Also Negotiates');
      expect(defaultVariantAlsoNegotiatesError.data).toBeUndefined();
      const VariantAlsoNegotiatesWithMessage =  await clientErrors.VariantAlsoNegotiates(message);
      expect(VariantAlsoNegotiatesWithMessage.code).toBe(506);
      expect(VariantAlsoNegotiatesWithMessage.name).toMatch('VARIANT_ALSO_NEGOTIATES');
      expect(VariantAlsoNegotiatesWithMessage.error).toMatch('Variant Also Negotiates');
      expect(VariantAlsoNegotiatesWithMessage.message).toMatch(message);
      expect(VariantAlsoNegotiatesWithMessage.data).toBeUndefined();

      const VariantAlsoNegotiatesWithMessageData =  await clientErrors.VariantAlsoNegotiates(message, data);
      expect(VariantAlsoNegotiatesWithMessageData.code).toBe(506);
      expect(VariantAlsoNegotiatesWithMessageData.name).toMatch('VARIANT_ALSO_NEGOTIATES');
      expect(VariantAlsoNegotiatesWithMessageData.error).toMatch('Variant Also Negotiates');
      expect(VariantAlsoNegotiatesWithMessageData.message).toMatch(message);
      expect(VariantAlsoNegotiatesWithMessageData.data).toMatchObject(data);
});

test('Test 507 - Insufficient Storage', async () => {
    expect(clientErrors.INSUFFICIENT_STORAGE).toEqual({code: 507, name: 'INSUFFICIENT_STORAGE', string: 'Insufficient Storage'});
      const data = {field: 'test'};
      const message = 'My custom Insufficient Storage Message';

      const defaultInsufficientStorageError = await clientErrors.InsufficientStorage();
      expect(defaultInsufficientStorageError.code).toBe(507);
      expect(defaultInsufficientStorageError.name).toMatch('INSUFFICIENT_STORAGE');
      expect(defaultInsufficientStorageError.error).toMatch('Insufficient Storage');
      expect(defaultInsufficientStorageError.data).toBeUndefined();
      const InsufficientStorageWithMessage =  await clientErrors.InsufficientStorage(message);
      expect(InsufficientStorageWithMessage.code).toBe(507);
      expect(InsufficientStorageWithMessage.name).toMatch('INSUFFICIENT_STORAGE');
      expect(InsufficientStorageWithMessage.error).toMatch('Insufficient Storage');
      expect(InsufficientStorageWithMessage.message).toMatch(message);
      expect(InsufficientStorageWithMessage.data).toBeUndefined();

      const InsufficientStorageWithMessageData =  await clientErrors.InsufficientStorage(message, data);
      expect(InsufficientStorageWithMessageData.code).toBe(507);
      expect(InsufficientStorageWithMessageData.name).toMatch('INSUFFICIENT_STORAGE');
      expect(InsufficientStorageWithMessageData.error).toMatch('Insufficient Storage');
      expect(InsufficientStorageWithMessageData.message).toMatch(message);
      expect(InsufficientStorageWithMessageData.data).toMatchObject(data);
});

test('Test 508 - Loop Detected', async () => {
    expect(clientErrors.LOOP_DETECTED).toEqual({code: 508, name: 'LOOP_DETECTED', string: 'Loop Detected'});
      const data = {field: 'test'};
      const message = 'My custom Loop Detected Message';

      const defaultLoopDetectedError = await clientErrors.LoopDetected();
      expect(defaultLoopDetectedError.code).toBe(508);
      expect(defaultLoopDetectedError.name).toMatch('LOOP_DETECTED');
      expect(defaultLoopDetectedError.error).toMatch('Loop Detected');
      expect(defaultLoopDetectedError.data).toBeUndefined();
      const LoopDetectedWithMessage =  await clientErrors.LoopDetected(message);
      expect(LoopDetectedWithMessage.code).toBe(508);
      expect(LoopDetectedWithMessage.name).toMatch('LOOP_DETECTED');
      expect(LoopDetectedWithMessage.error).toMatch('Loop Detected');
      expect(LoopDetectedWithMessage.message).toMatch(message);
      expect(LoopDetectedWithMessage.data).toBeUndefined();

      const LoopDetectedWithMessageData =  await clientErrors.LoopDetected(message, data);
      expect(LoopDetectedWithMessageData.code).toBe(508);
      expect(LoopDetectedWithMessageData.name).toMatch('LOOP_DETECTED');
      expect(LoopDetectedWithMessageData.error).toMatch('Loop Detected');
      expect(LoopDetectedWithMessageData.message).toMatch(message);
      expect(LoopDetectedWithMessageData.data).toMatchObject(data);
});

test('Test 509 - Bandwidth Limit Exceeded', async () => {
    expect(clientErrors.BANDWIDTH_LIMIT_EXCEEDED).toEqual({code: 509, name: 'BANDWIDTH_LIMIT_EXCEEDED', string: 'Bandwidth Limit Exceeded'});
      const data = {field: 'test'};
      const message = 'My custom Bandwidth Limit Exceeded Message';

      const defaultBandwidthLimitExceededError = await clientErrors.BandwidthLimitExceeded();
      expect(defaultBandwidthLimitExceededError.code).toBe(509);
      expect(defaultBandwidthLimitExceededError.name).toMatch('BANDWIDTH_LIMIT_EXCEEDED');
      expect(defaultBandwidthLimitExceededError.error).toMatch('Bandwidth Limit Exceeded');
      expect(defaultBandwidthLimitExceededError.data).toBeUndefined();
      const BandwidthLimitExceededWithMessage =  await clientErrors.BandwidthLimitExceeded(message);
      expect(BandwidthLimitExceededWithMessage.code).toBe(509);
      expect(BandwidthLimitExceededWithMessage.name).toMatch('BANDWIDTH_LIMIT_EXCEEDED');
      expect(BandwidthLimitExceededWithMessage.error).toMatch('Bandwidth Limit Exceeded');
      expect(BandwidthLimitExceededWithMessage.message).toMatch(message);
      expect(BandwidthLimitExceededWithMessage.data).toBeUndefined();

      const BandwidthLimitExceededWithMessageData =  await clientErrors.BandwidthLimitExceeded(message, data);
      expect(BandwidthLimitExceededWithMessageData.code).toBe(509);
      expect(BandwidthLimitExceededWithMessageData.name).toMatch('BANDWIDTH_LIMIT_EXCEEDED');
      expect(BandwidthLimitExceededWithMessageData.error).toMatch('Bandwidth Limit Exceeded');
      expect(BandwidthLimitExceededWithMessageData.message).toMatch(message);
      expect(BandwidthLimitExceededWithMessageData.data).toMatchObject(data);
});

test('Test 510 - Not Extended', async () => {
    expect(clientErrors.NOT_EXTENDEED).toEqual({code: 510, name: 'NOT_EXTENDEED', string: 'Not Extended'});
      const data = {field: 'test'};
      const message = 'My custom Not Extended Message';

      const defaultNotExtendedError = await clientErrors.NotExtended();
      expect(defaultNotExtendedError.code).toBe(510);
      expect(defaultNotExtendedError.name).toMatch('NOT_EXTENDEED');
      expect(defaultNotExtendedError.error).toMatch('Not Extended');
      expect(defaultNotExtendedError.data).toBeUndefined();
      const NotExtendedWithMessage =  await clientErrors.NotExtended(message);
      expect(NotExtendedWithMessage.code).toBe(510);
      expect(NotExtendedWithMessage.name).toMatch('NOT_EXTENDEED');
      expect(NotExtendedWithMessage.error).toMatch('Not Extended');
      expect(NotExtendedWithMessage.message).toMatch(message);
      expect(NotExtendedWithMessage.data).toBeUndefined();

      const NotExtendedWithMessageData =  await clientErrors.NotExtended(message, data);
      expect(NotExtendedWithMessageData.code).toBe(510);
      expect(NotExtendedWithMessageData.name).toMatch('NOT_EXTENDEED');
      expect(NotExtendedWithMessageData.error).toMatch('Not Extended');
      expect(NotExtendedWithMessageData.message).toMatch(message);
      expect(NotExtendedWithMessageData.data).toMatchObject(data);
});

test('Test 511 - Network Authentication Required', async () => {
    expect(clientErrors.NETWORK_AUTHENTICATION_REQUIRED).toEqual({code: 511, name: 'NETWORK_AUTHENTICATION_REQUIRED', string: 'Network Authentication Required'});
      const data = {field: 'test'};
      const message = 'My custom Network Authentication Required Message';

      const defaultNetworkAuthenticationRequiredError = await clientErrors.NetworkAuthenticationRequired();
      expect(defaultNetworkAuthenticationRequiredError.code).toBe(511);
      expect(defaultNetworkAuthenticationRequiredError.name).toMatch('NETWORK_AUTHENTICATION_REQUIRED');
      expect(defaultNetworkAuthenticationRequiredError.error).toMatch('Network Authentication Required');
      expect(defaultNetworkAuthenticationRequiredError.data).toBeUndefined();
      const NetworkAuthenticationRequiredWithMessage =  await clientErrors.NetworkAuthenticationRequired(message);
      expect(NetworkAuthenticationRequiredWithMessage.code).toBe(511);
      expect(NetworkAuthenticationRequiredWithMessage.name).toMatch('NETWORK_AUTHENTICATION_REQUIRED');
      expect(NetworkAuthenticationRequiredWithMessage.error).toMatch('Network Authentication Required');
      expect(NetworkAuthenticationRequiredWithMessage.message).toMatch(message);
      expect(NetworkAuthenticationRequiredWithMessage.data).toBeUndefined();

      const NetworkAuthenticationRequiredWithMessageData =  await clientErrors.NetworkAuthenticationRequired(message, data);
      expect(NetworkAuthenticationRequiredWithMessageData.code).toBe(511);
      expect(NetworkAuthenticationRequiredWithMessageData.name).toMatch('NETWORK_AUTHENTICATION_REQUIRED');
      expect(NetworkAuthenticationRequiredWithMessageData.error).toMatch('Network Authentication Required');
      expect(NetworkAuthenticationRequiredWithMessageData.message).toMatch(message);
      expect(NetworkAuthenticationRequiredWithMessageData.data).toMatchObject(data);
});
