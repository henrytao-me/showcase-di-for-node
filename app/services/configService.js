export default class ConfigService {

  constructor(env) {
    this.env = env
  }

  getAppName() {
    return this.env['name']
  }

  getLogLevel() {
    return this.env['log']['level']
  }

  getServerPort() {
    return this.env['server']['port']
  }
}
