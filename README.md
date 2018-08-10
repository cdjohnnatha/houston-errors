# Houston "we have a problem"
The Houston creates http errors (is also used to create custom errors) in a node application. The idea is to centralize all errors in a function, have a easy access to default http errors getting code, string and name, show in console and the best, given you a freedom  to handle the errors as you want. It also have an option to handle errors from [Sequelize](http://docs.sequelizejs.com/) pattern.

[![Code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)
![node (scoped with tag)](https://img.shields.io/node/v/@stdlib/stdlib/latest.svg)


<!-- toc -->

- [Houston](#houston)
  - [`DefaultError(houstonError, [optionals])`](#user-content-defaulterrorhoustonerror-optionals)
    - [Usage Example](#user-content-usage-example)
  - [CustomError([optionals])](#user-content-customerroroptionals)
    - [Usage Example](#user-content-usage-example-1)
  - [HoustonErrorEvents](#user-content-houstonerrorevents)
    - [Usage Example](#user-content-usage-example-2)
- [HoustonClientErrors](#user-content-houstonclienterrors)
  - [Object Usage Example](#user-content-usage-example-3)
  - [Functions Usage Example](#user-content-functionnameoptionals)
- [HoustonServerErrors](#user-content-houstonservererrors)
  - [Object Usage Example](#user-content-usage-example-5)
  - [Functions Usage Example](#user-content-functionnameoptionals-1)

<!-- tocstop -->


## Houston
All function listed above use on of DefaultError from houston module.

### DefaultError(houstonError, [optionals])

It will create a JS Error object, add name, code, error and the optionals (message, data). All the functions will returns the DefaultError.

- `houstonError` - Objects which can ben found in in houstonClientErrors, houstonServerErrors.
- `optionals` - optional object where:
	- `message` is a custom message which will be show in error.
    - `data` - additional error information (it can be object or string).

#### Usage Example

```
    const houston = require('houston');
    const sendMessage = 'This is Houston. Say again, please';
    houston.DefaultError(houston.BAD_REQUEST, {
        message: sendMessage,
        data: '{Lousma: houston, we have a problem.}',
    });
```

### CustomError([optionals])
It is also possible create your custom errors setting things like code, error, name, message and data.
- `optionals` - optional object where:
	- `code` is the code of error (default: 500).
	- `error` is the error type (default: Internal Server Error).
	- `name` the name of error (default: INTERNAL_SERVER_ERROR).
	- `message` is a custom message (default: if not defined it will be removed of object).
    - `data` - additional error information (it can be object or string, default: if not defined it will be removed of object).

#### Usage Example

```
    const houston = require('houston');
    const sendMessage = 'This is Houston. Say again, please';
    const lovellData = {lovell: 'We have had a MAIN B BUS UNDERVOLT'};
    const errorDef = 'houston, we have a problem';
    houston.CustomError({
        code: 406,
        error: errorDef,
        name:'Lousma',
        message: sendMessage,
        data: lovellData,
    });
```

### HoustonErrorEvents

You can also listen the HoustonErrorEvents which will emit all houstonError by the event 'weHaveAProblem' then handle it for whatever you want for a better custom application.

#### Usage Example
```
    const { HoustonErrorEvent } = require('houston');

    HoustonErrorEvent.on('weHaveAProblem', (error) => {
      //..code
    });
```

## HoustonClientErrors
It is possible to import the the client errors by the name bellow and you get get any of them. They are an object with code, string and name.  

Code | String                          | Name
---  | ---                             | ---
400  | Bad Request                     | BAD_REQUEST
401  | Unauthorized                    | UNAUTHORIZED
402  | Payment Required                | PAYMENT_REQUIRED
403  | Forbidden                       | FORBIDDEN
404  | Not Found                       | NOT_FOUND
405  | Method Not Allowed              | METHOD_NOT_ALLOWED
406  | Not Acceptable                  | NOT_ACCEPTABLE
407  | Proxy Authentication Required   | PROXY_AUTHENTICATION_REQUIRED
408  | Request Timeout                 | REQUEST_TIMEOUT
409  | Conflict                        | CONFLICT
410  | Gone                            | GONE
411  | Length Required                 | LENGTH_REQUIRED
412  | Precondition Failed             | PRECONDITION_FAILED
413  | Payload Too Large               | PAYLOAD_TOO_LARGE
414  | Uri Too long                    | URI_TOO_LONG
415  | Unsupported Media Type          | UNSUPPORTED_MEDIA_TYPE
416  | Range Not Satisfiable           | RANGE_NOT_SATISFIABLE
417  | Expectation Failed              | EXPECTATION_FAILED
418  | Im a Teapot                     | IM_A_TEAPOT
421  | Misdirected Request             | MISDIRECTED_REQUEST
422  | Unprocessable Entity            | UNPROCESSABLE_ENTITY
423  | Locked                          | LOCKED
424  | Failed Dependency               | FAILED_DEPENDENCY
425  | Unordered Collection            | UNORDERED_COLLECTION
426  | Upgrade Required                | UPGRADE_REQUIRED
428  | Precondition Required           | PRECONDITION_REQUIRED
429  | Too Many Requests               | TOO_MANY_REQUESTS
431  | Request Header Fields Too Large | REQUEST_HEADER_FIELDS_TOO_LARGE
451  | Unavailable for Legal Reqsons   | UNAVAILABLE_FOR_LEGAL_REASONS

### Usage example

```
  const { NOT_FOUND } = require('houston');
  console.log(`code: ${NOT_FOUND.code}, name: ${NOT_FOUND.name}, error: ${NOT_FOUND.error} `);
```

It is also possible use functions which returns a [JavaScript Error](https://nodejs.org/api/errors.html#errors_class_error) and contains keys like **name, error, code, message and data.** By default, those methods just returns code, name and error. The available functions are listed bellow.

FunctionName                           |
---------------------------------------|
BadRequest                             |
Unauthorized                           |
PaymentRequired                        |
Forbidden                              |
NotFound                               |
MethodNotAllowed                       |
NotAcceptable                          |
ProxyAuthenticationRequired            |
RequestTimeout                         |
Conflict                               |
Gone                                   |
LengthRequired                         |
PreconditionFailed                     |
PayloadTooLarge                        |
UriTooLong                             |
UnsupportedMediaType                   |
RangeNotSatisfiable                    |
ExpectionFailed                        |
ImATeapot                              |
MisdirectedRequest                     |
UnprocessableEntity                    |
Locked                                 |
FailedDependency                       |
UnorderedCollection                    |
UpgradeRequired                        |
PreconditionRequired                   |
TooManyRequests                        |
RequestHeaderFieldsTooLarge            |
UnavailableForLegalReasons             |

All those functions above returns a DefaultError and have the structure like: 

### FunctionName([optionals])
- `optionals` - optional object where:
	- `message` is a custom message which will be show in error.
    - `data` - additional error information (it can be object or string).

### Usage example

```
const { NotFound } = require('houston');

try {
    NotFound();
  } catch (error) {
    console.log(error.code)
  }
```

Setting message and data.
```
const { NotFound } = require('houston');

try {
    NotFound({message: 'custom message', data: 'some custom object or message'});
  } catch (error) {
    console.log(error.message);
  }
```


## HoustonServerErrors
It is possible to import the the server errors by the name bellow and you get get any of them. They are an object with code, string and name.  

Code | String                          | Name
---  | ---                             | ---
500  | Internal Server Error           | INTERNAL_SERVER_ERROR
501  | Not Implemented                 | NOT_IMPLEMENTED
502  | Bad Gateway                     | BAD_GATEWAY
503  | Service Unavailable             | SERVICE_UNAVAILABLE
504  | Gateway Timeout                 | GATEWAY_TIMEOUT
505  | HTTP Version Not Supported      | HTTP_VERSION_NOT_SUPPORTED
506  | Variant Also Negotiates         | VARIANT_ALSO_NEGOTIATES
507  | Insufficient Storage            | INSUFFICIENT_STORAGE
508  | Loop Detected                   | LOOP_DETECTED
509  | Bandwidth Limit Exceeded        | BANDWIDTH_LIMIT_EXCEEDED
510  | Not Extended                    | NOT_EXTENDEED
511  | Network Authentication Required | NETWORK_AUTHENTICATION_REQUIRED

### Usage example

```
  const { INTERNAL_SERVER_ERROR } = require('houston');
  console.log(`code: ${INTERNAL_SERVER_ERROR.code}, name: ${INTERNAL_SERVER_ERROR.name}, error: ${INTERNAL_SERVER_ERROR.error} `);
```

It is also possible use functions which returns a [JavaScript Error](https://nodejs.org/api/errors.html#errors_class_error) and contains keys like **name, error, code, message and data.** By default, those methods just returns code, name and error. The available functions are listed bellow.

FunctionName                           |
---------------------------------------|
Internal Server Error                  |
Not Implemented                        |
Bad Gateway                            |
Service Unavailable                    |
Gateway Timeout                        |
HTTP Version Not Supported             |
Variant Also Negotiates                |
Insufficient Storage                   |
Loop Detected                          |
Bandwidth Limit Exceeded               |
Not Extended                           |
Network Authentication Required        |

All those functions above returns a DefaultError and have the structure like: 

### FunctionName([optionals])
- `optionals` - optional object where:
	- `message` is a custom message which will be show in error.
    - `data` - additional error information (it can be object or string).

### Usage example

```
const { InternalServerError } = require('houston');

try {
    InternalServerError();
  } catch (error) {
    console.log(error.code)
  }
```

Setting message and data.
```
const { InternalServerError } = require('houston');

try {
    InternalServerError({message: 'custom message', data: 'some custom object or message'});
  } catch (error) {
    console.log(error.message);
  }
```
