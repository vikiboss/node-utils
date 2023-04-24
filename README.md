# node utils

> Common and useful [Node.js](https://nodejs.org/) utils of **Best Practice** in [pure ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c), especially when developing node scripts.

## Installation

**npm**

```bash
npm install @vmoe/node-utils
```

**pnpm**

```bash
pnpm add @vmoe/node-utils
```

## Usage

**Built-in utils**

```ts
import { base64, time, deepClone, logWithTime } from '@vmoe/node-utils'
import fs from '@vmoe/node-utils/fs'

const en = base64.encode('Hello World')

logWithTime(en)

const _obj = [{ name: 'node-utils' }]
const obj = deepClone(_obj)

_obj[0].name = 'oops'

await fs.writeFile('./demo.txt', time() + en + JSON.stringify(obj))
```

> see [utils](./src/utils) & [functions](./src/functions) folders for all built-in modules.

**External Modules (tree shaking support)**

```ts
import { request } from '@vmoe/node-utils/axios'
import { cron } from '@vmoe/node-utils/cron'
import { execa } from '@vmoe/node-utils/execa'
import { globby } from '@vmoe/node-utils/globby'
import { loading } from '@vmoe/node-utils/ora'
```

> see [modules](./src/modules) folder for all external modules.

## License

[MIT](LICENSE) License © 2023-PRESENT Viki
