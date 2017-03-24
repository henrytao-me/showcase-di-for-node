import AuthMiddleware from '../middlewares/authMiddleware'

@Module
export default class MiddlewareModule {

  @Singleton
  @Provides('authMiddleware')
  provideAuthMiddleware(authService, errorService) {
    return new AuthMiddleware(...arguments)
  }
}
