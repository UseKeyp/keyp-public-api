import publicApi from '@usekeyp/public-api'
import serverless from 'serverless-http'

import { db } from 'src/lib/db'

export const handler = serverless(
  publicApi(db, {
    APP_DOMAIN: process.env.APP_DOMAIN,
    routes: { introspection: '/oauth/token/introspect' },
  })
)
