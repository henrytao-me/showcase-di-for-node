import ConfigService from '../services/configService'
import UtilService from '../services/utilService'

@Module
export default class ServiceModule {

  @Singleton
  @Provides('configService')
  provideConfigService(env) {
    return new ConfigService(...arguments)
  }

  @Singleton
  @Provides('utilService')
  provideUtilService() {
    return new UtilService(...arguments)
  }
}
