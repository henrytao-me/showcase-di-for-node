import AppComponent from './di/appComponent'
import Router from './routers'

// Build the DI graph
const appComponent = new Dagger.Builder(AppComponent).build()

// Load router
// Router.load(appComponent)

// Start server
export default new Promise((resolve, reject) => {
  const server = appComponent.getServer()
  const config = appComponent.getConfigService()

  server.listen(config.getServerPort(), () => {
    appComponent.getLogger().info(`Server is listening on port ${config.getServerPort()}`)
    resolve(server)
  })
})
