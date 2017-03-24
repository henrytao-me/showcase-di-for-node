export default class BaseMiddleware {

  run() {
    return this.use.bind(this)
  }

  use(req, res, next) {
    // Intent to be extended
  }
}
