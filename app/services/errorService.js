class BaseError extends Error {

  constructor(code, type, message, data) {
    super()
    this.code = code
    this.type = type
    this.message = message
    this.data = data
  }

  toJSON() {
    return {
      code: this.code,
      type: this.type,
      message: this.message,
      data: this.data
    }
  }
}

class InvalidPassword extends BaseError {
  constructor() {
    super(500, 'invalid_password', 'Invalid password')
  }
}

class SomethingWentWrong extends BaseError {
  constructor() {
    super(500, 'something_went_wrong', 'Sorry! Something went wrong.')
  }
}

class Unauthorized extends BaseError {
  constructor() {
    super(401, 'unauthorized', 'Unauthorized')
  }
}

export default class ErrorService {

  invalidPassword() {
    return new InvalidPassword()
  }

  somethingWentWrong() {
    return new SomethingWentWrong()
  }

  unauthorized() {
    return new Unauthorized()
  }
}
