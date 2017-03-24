import BaseMiddleware from './baseMiddleware'

export default class AuthMiddleware extends BaseMiddleware {

  constructor(authService, errorService) {
    super()
    this.authService = authService
    this.errorService = errorService
  }

  use(req, res, next) {
    const authorization = req.headers['authorization'] || ''
    if (authorization.toLowerCase().indexOf('bearer ') !== 0) {
      res.status(401).json(this.errorService.unauthorized().toJSON())
    } else {
      const token = authorization.trim().replace(/(\w+)\s(.+)/, (all, $bearer, $token) => $token)
      this.authService
        .verifyToken(token)
        .then(result => {
          if (!result) {
            throw this.errorService.unauthorized()
          }
        })
        .then(o => {
          req.authorization = Object.assign({}, req.authorization, {
            token: token
          })
          next()
        })
        .catch(err => {
          res.status(401).json(this.errorService.unauthorized().toJSON())
        })
    }
  }
}

