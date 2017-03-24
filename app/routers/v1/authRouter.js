import BaseRouter from '../baseRouter'

export default class AuthRouter extends BaseRouter {

  @Inject authUseCase

  @Inject router

  @Inject urlencodedParser

  constructor(component) {
    super(component)
    this.router.post('/auth', [this.urlencodedParser], this.route(this.auth))
  }

  async auth(req, res) {
    const { username, password } = req.body || {}
    this.onSuccess(res, {
      token: await this.authUseCase.auth(username, password)
    })
  }
}
