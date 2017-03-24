@Module
class TestModule {

  @Singleton
  @Provides('authUseCase')
  provideAuthUseCase() {
    return {
      auth: () => { }
    }
  }

  @Singleton
  @Provides('errorService')
  provideErrorService() {
    return {
      invalidPassword: () => { },
      somethingWentWrong: () => { },
      unauthorized: () => { }
    }
  }

  @Singleton
  @Provides('logger')
  provideLogger() {
    return {
      fatal: () => { },
      error: () => { },
      warn: () => { },
      info: () => { },
      debug: () => { },
      trace: () => { }
    }
  }

  @Singleton
  @Provides('router')
  provideRouter() {
    return {
      get: () => { },
      post: () => { },
      use: () => { }
    }
  }

  @Singleton
  @Provides('urlencodedParser')
  provideUrlencodedParser() {
    return {}
  }
}

@Component(modules = [TestModule])
export default class TestComponent {

}
