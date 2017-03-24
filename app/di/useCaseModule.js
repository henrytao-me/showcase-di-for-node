import AuthUseCase from '../usecases/authUseCase'

@Module
export default class UseCaseModule {

  @Singleton
  @Provides('authUseCase')
  provideAuthUseCase(authService, errorService) {
    return new AuthUseCase(...arguments)
  }
}
