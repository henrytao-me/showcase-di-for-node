export default class AuthUseCase {

  constructor(authService, errorService) {
    this.authService = authService
    this.errorService = errorService
  }

  async auth(username, password) {
    if (await this.authService.verifyPassword(username, password)) {
      return await this.authService.createToken(username)
    }
    throw this.errorService.unauthorized()
  }
}
