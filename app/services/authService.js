const TOKEN = 'this-is-my-secret-token'

export default class AuthService {

  constructor(errorService) {
    this.errorService = errorService
  }

  createToken(username) {
    return Promise.resolve(TOKEN)
  }

  verifyPassword(username, password) {
    return new Promise((resolve, reject) => {
      if (username !== 'henrytao' || password !== '123456') {
        throw this.errorService.invalidPassword()
      }
      resolve(true)
    })
  }

  verifyToken(token) {
    return new Promise((resolve, reject) => {
      if (token !== TOKEN) {
        throw this.errorService.unauthorized()
      }
      resolve(true)
    })
  }
}
