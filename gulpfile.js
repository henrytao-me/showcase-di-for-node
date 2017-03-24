const gulp = require('gulp')
const mocha = require('gulp-mocha')
const nodemon = require('gulp-nodemon')
const runSequence = require('run-sequence')

gulp.task('server', () => {
  nodemon({
    script: './server.js',
    ext: 'js json',
    ignore: ['./test/'],
    execMap: {
      js: "node --harmony"
    }
  })
})

gulp.task('test', done => {
  runSequence('test:unit', done)
})

gulp.task('test:unit', () => {
  process.env.NODE_ENV = process.env.NODE_ENV || 'test'
  gulp.src(['./test/unit/initialize.js', process.env.SPECS || './test/unit/**/*.spec.js'], {
    read: false
  })
    .pipe(mocha({
      harmony: true,
      reporter: 'spec'
    }))
})
