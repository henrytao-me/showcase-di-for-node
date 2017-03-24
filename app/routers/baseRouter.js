export default class BaseRouter {

  @Inject logger

  @Inject errorService

  constructor(component) {
    component.inject(this)
  }

  onError(res, error) {
    let json = null
    if (error.toJSON) {
      json = error.toJSON()
    } else {
      this.logger.error(error)
      json = this.errorService.somethingWentWrong()
    }
    res.status(json.code).json(json)
  }

  onSuccess(res, object, extras = {}) {
    if (!!object.toJSON) {
      object = object.toJSON()
    }
    res.json({
      code: 200,
      results: Object.assign({ object }, extras)
    })
  }

  route(func) {
    func = func.bind(this)
    return (req, res) => func(req, res)
      .catch(err => this.onError(res, err))
  }
}
