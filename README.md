# request-validator
The request validator join http errors and json validations to create help methods to use in your node application. Here you can find two
files **InputValidator** and **HttpErrors**. Have a option Error which uses [Sequelize](http://docs.sequelizejs.com/) pattern to show a error.

[![Code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)
![node (scoped with tag)](https://img.shields.io/node/v/@stdlib/stdlib/latest.svg)

## Dependencies

* [jsonschema: ^1.2.4](https://www.npmjs.com/package/jsonschema)

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

## InputValidator
The input validator uses the [jsonschema](https://www.npmjs.com/package/jsonschema) to validate a request comparing with a json file. The methods check the required fields, throw a json Error joining all errors from jsonschema in a message.

### Usage Example

```
const { CommonError } = require('../lib/HttpErrors');
// I recommend put your json schemas in a separeted folder.

let jsonTest = {
    { 
      "id": "/users",
      "type": "object",
      "properties":{
        "login": { "type": "string" },
        "password": { "type": "string" },
        "first_name": { "type": "string" },
        "last_name": { "type": "string" },
        "lang": { "type": "string" },
        "active": { "type": "boolean" }
      },
      "required": [
        "login",
        "password",
        "first_name",
        "last_name",
        "lang",
        "active"
      ]
    }
}

exports.create = async (request, response) => {
    try {
        const { NotAcceptable } = require('./HttpErrors');
        await ValidateRequestInput(requestParams, jsonTest);
        return 'worked';
    } catch (error) {
        CommonError(error);
    }
}
```


