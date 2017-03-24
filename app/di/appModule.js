import bodyParser from 'body-parser'
import bunyanPretty from 'bunyan-pretty'
import bunyan from 'bunyan'
import express from 'express'

@Module
export default class AppModule {

  @Singleton
  @Provides('env')
  provideEnv(utilService) {
    const defaultEnv = require('../../env/default.json')
    const env = require(`../../env/${process.env.NODE_ENV || 'dev'}.json`)
    return utilService.merge({}, defaultEnv, env, {
      isDev: !process.env.NODE_ENV || process.env.NODE_ENV === 'dev',
      isTest: process.env.NODE_ENV === 'test'
    })
  }

  @Singleton
  @Provides('express')
  provideExpress() {
    return express
  }

  @Singleton
  @Provides('jsonParser')
  provideJsonParser() {
    return bodyParser.json()
  }

  @Singleton
  @Provides('logger')
  provideLogger(configService, env) {
    // fatal, error, warn, info, debug, trace
    return bunyan.createLogger({
      name: configService.getAppName(),
      stream: env.isDev && process.stdout.isTTY ? bunyanPretty() : process.stdout,
      level: configService.getLogLevel()
    })
  }

  @Provides('router')
  provideRouter(express) {
    return express.Router()
  }

  @Singleton
  @Provides('server')
  provideServer(express) {
    return express()
  }

  @Singleton
  @Provides('urlencodedParser')
  provideUrlencodedParser() {
    return bodyParser.urlencoded({ extended: false })
  }
}
