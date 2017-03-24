import fs from 'fs'
import path from 'path'

export default {
  load(component) {
    const server = component.getServer()
    fs.readdirSync(__dirname).forEach(version => {
      const dir = path.join(__dirname, version)
      if (!fs.lstatSync(dir).isDirectory()) {
        return
      }
      fs.readdirSync(dir).forEach(filename => {
        const Router = require(path.join(dir, filename))
        const router = new Router(component)
        if (!!router.router) {
          server.use(`/${version}`, router.router)
        }
      })
    })
  }
}
