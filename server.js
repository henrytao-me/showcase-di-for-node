require('import-export')
require('dagger-compiler')

module.exports = require('./app')
  .catch(err => {
    console.log(err)
    throw new Error(err)
  })
