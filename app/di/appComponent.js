import AppModule from './appModule'
import MiddlewareModule from './middlewareModule'
import ServiceModule from './serviceModule'
import UseCaseModule from './useCaseModule'

@Component(modules = [AppModule, MiddlewareModule, ServiceModule, UseCaseModule])
export default class AppComponent {

}
