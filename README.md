# Houston "we have a problem"
The Houston creates http errors (is also used to create custom errors) in a node application. The idea is to centralize all errors in a function, have a easy access to default http errors getting code, string and name, show in console and the best, given you a freedom  to handle the errors as you want. It also have an option to handle errors from [Sequelize](http://docs.sequelizejs.com/) pattern.

[![Code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)
![node (scoped with tag)](https://img.shields.io/node/v/@stdlib/stdlib/latest.svg)

## Houston
All function listed above use on of DefaultError from houston module.


Name                                   | Params     | Obs                                                                             |
---------------------------------------|------------|---------------------------------------------------------------------------------|
DefaultError                           | houstonError, {message: message, data: data} | It will create a JS Error object, add name, code, error and the optional data, message. |
Logger                                 | error      | Any Js Error object, it will print on console error message and data |
CustomError                            | message, errorCode, name, stack | It will use the js error to set all those variables        |
ThrowError                             | error      | Uses Logger method to print and just return the error                           |
HoustonErrorEvent                      |            | You can listen houstonError by the event 'weHaveAProblem' and do whatever you want.| 

### Usage Example

#### DefaultError(houstonError, {message = undefined, data = undefined})

All the httpFunction found in houstonClientErrors, houstonServerErrors returns this function.

``
const houston = require('houston');
const sendMessage = 'This is Houston. Say again, please';
houston.DefaultError(houston.BAD_REQUEST, {
    message: sendMessage,
    data: '{Lousma: houston, we have a problem.}',
});

``

#### CustomError({ code = 500, error='Internal Server Error', name='INTERNAL_SERVER_ERROR', message=undefined, data=undefined })


``
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

``


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

It is also possible use the method functions which a returns a [JavaScript Error](https://nodejs.org/api/errors.html#errors_class_error) and contains keys like **name, code, message, stack.** By default, those methods just returns code, name and message. It's also possible set and use them in a custom function called **CustomError** to create you own error, or if you want just throw your error, use **ThrowError** importing the core. 
The available methods are listed bellow.

Name                                   |
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

### Usage example

```
const { NotFound } = require('./lib/HttpErrors');

try {
    // code
  } catch (error) {
    NotFound();
  }
```
It also possible set a message error:

```
const { NotFound } = require('../lib/HttpErrors');

try {
    // ...code
  } catch (error) {
    NotFound('User not Found');
  }
```

Getting message or code and priting.
```
const { NOT_FOUND } = require('./lib/HttpErrors');
console.log(`${NOT_FOUND.string}, ${NOT_FOUND.code}`;
```



