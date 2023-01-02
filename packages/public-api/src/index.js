import assert from 'assert'
import path from 'path'

import bodyParser from 'body-parser'
import express from 'express'
import fetch from 'node-fetch'

const app = (db, settings) => {
  // Express docs https://expressjs.com/en/5x/api.html#app.settings.table
  const expressApp = express()
  expressApp.set('trust proxy', true)
  expressApp.set('view engine', 'ejs')
  expressApp.set('views', path.resolve(__dirname, 'views'))

  const parse = bodyParser.urlencoded({ extended: false })

  // TODO: set cache policy

  // Validate Access Token locally
  function authenticate(req, res, next) {
    res.set('Pragma', 'no-cache')
    res.set('Cache-Control', 'no-cache, no-store')
    next()
  }

  // Token Introspection

  // Validate scope

  // Process request

  // leave the rest of the requests to be handled by oidc-provider, there's a catch all 404 there

  return expressApp
}

export default app
