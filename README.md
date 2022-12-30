# Welcome to Keyp Public API 👋

> Public API consumed by Keyp Apps

## Usage 📖

1. Create a new function `v1` and install the package

```bash
yarn add @usekeyp/public-api
```

```js
// api/src/functions/v1.js
import publicApi from '@usekeyp/public-api'
import serverless from 'serverless-http'

import { db } from 'src/lib/db'

export const handler = serverless(
  publicApi(db, {
    APP_DOMAIN: process.env.APP_DOMAIN,
    routes: { introspection: '/oauth/token/introspect' },
  })
)
```

2. Copy the `.env.example` to `.env` and update the values

3. Setup an Nginx proxy.........

## Resources 🧑‍💻

## License 📝

Copyright © 2023 Nifty Chess, Inc.<br />


