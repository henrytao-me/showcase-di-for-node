export default class UtilService {

  isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item) && item !== null)
  }

  merge(...args) {
    const target = args[0]
    args
      .filter((value, key) => key > 0)
      .map(value => this._mergeAPair(target, value))
    return target
  }

  _mergeAPair(target, source) {
    target = target || {}
    source = source || {}
    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach(key => {
        if (this.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, { [key]: {} })
          }
          this._mergeAPair(target[key], source[key])
        } else {
          Object.assign(target, { [key]: source[key] })
        }
      })
    }
    return target
  }
}
