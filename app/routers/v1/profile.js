import BaseRouter from '../baseRouter'

export default class ProfileRouter extends BaseRouter {

  @Inject authMiddleware

  @Inject jsonParser

  @Inject router

  constructor(component) {
    super(component)
    this.router.use(this.authMiddleware.run())
    this.router.get('/profile', this.route(this.getProfile))
  }

  async getProfile(req, res) {
    const { token } = req.authorization || {}
    this.onSuccess(res, {
      token: token
    })
  }
}
