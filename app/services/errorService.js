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

class Unauthorized extends BaseError {
  constructor() {
    super(401, 'unauthorized', 'Unauthorized')
  }
}

export default class ErrorService {

  unauthorized() {
    return new Unauthorized()
  }
}
