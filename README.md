# HttpErrors
The http errors to creates a helper which join http codes all together in a node application. It also have an option Error which uses [Sequelize](http://docs.sequelizejs.com/) pattern to show a error.

[![Code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)
![node (scoped with tag)](https://img.shields.io/node/v/@stdlib/stdlib/latest.svg)

## HttpErrors
The HttpErrors can help you to have the most common http errors in same place and using functions to throw node Errors. 

There it is possible to import any of those errors below and also get a name string or their code.
* UNPROCESSABLE_ENTITY
* NOT_FOUND
* BAD_REQUEST
* UNAUTHORIZED
* PAYMENT_REQUIRED
* FORBIDDEN
* METHOD_NOT_ALLOWED
* NOT_ACCEPTABLE
* ERR_INVALID_TOKEN
* EMPTY_PARAM
* UNAUTHORIZED_DOMAIN
* EXPIRED_TOKEN
* ERR_NO_TOKEN

It is also possible use the method functions to throw an Node Error, like below:
* CustomError
* SequelizeError
* JsonValidationError
* BadRequest
* Unauthorized
* PaymentRequired
* Forbidden
* NotFound
* MethodNotAllowed
* NotAcceptable
* UnprocessableEntity
* CommonError

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



