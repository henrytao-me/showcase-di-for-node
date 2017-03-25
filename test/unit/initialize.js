require('app-module-path').addPath(require('path').resolve(__dirname, '../../'))
require('import-export')
require('dagger-compiler')

global.expect = require('chai').expect
global.sinon = require('sinon')

global.ARGS = {
  interface: {

  }
}

class Mock {

  constructor(keys = [], provider = () => {}) {
    this.mocks = []
    this.params = []
    keys.forEach(key => this.add(key, provider(key)))
  }

  add(key, value) {
    this.params.push(value)
    this[key] = sinon.mock(value)
    this.mocks.push(this[key])
  }

  restore() {
    this.mocks.forEach(mock => mock.restore())
  }

  verify() {
    this.mocks.forEach(mock => mock.verify())
  }
}
global.Mock = Mock
