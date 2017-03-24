import AuthService from '../services/authService'
import ConfigService from '../services/configService'
import ErrorService from '../services/errorService'
import UtilService from '../services/utilService'

@Module
export default class ServiceModule {

  @Singleton
  @Provides('authService')
  provideAuthService() {
    return new AuthService(...arguments)
  }

  @Singleton
  @Provides('configService')
  provideConfigService(env) {
    return new ConfigService(...arguments)
  }

  @Singleton
  @Provides('errorService')
  provideErrorService() {
    return new ErrorService(...arguments)
  }

  @Singleton
  @Provides('utilService')
  provideUtilService() {
    return new UtilService(...arguments)
  }
}
