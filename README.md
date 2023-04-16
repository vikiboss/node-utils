# node utils

A collection of common and useful node utils of the **Best Practice**.

> This package is [pure ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

## Installation

```bash
npm install @vmoe/node-utils
```

## Usage

```ts
import path from 'node:path'
import { fs, qs, to, now, wait, colors, dirname, removeSync } from '@vmoe/node-utils'

const file = path.join(dirname(import.meta), 'data.json')
const data = JSON.stringify({ name: 'node-utils', author: 'Viki' })

const [err, result] = await to(fs.writeFile(file, data))

if (err) {
  console.log(colors.red('have no access to write `data.json`'))
  process.exit(1)
}

console.log(colors.gradient(['blue', 'green'])('write data.json successfully'))

await wait(1000)

// use dayjs
console.log(now()) // 2023-04-16 23:30

console.log(qs(JSON.parse(data))) // "name=node-utils&author=Viki"

// use rimraf but support async
removeSync(file)
```

## Full Utils

see [here](https://github.com/vikiboss/node-utils/blob/main/src/index.ts) for full utils list.

## Thanks

> in alphabetical order

**Packages**

- await-to-js
- axios
- colorette
- dayjs
- gradient-string
- kind-of
- mkdirp
- mri
- nanoid
- node-cron
- rimraf
- rollup
- tinycolor2
- yargs

**People**

- [antfu](https://antfu.me)

## License

[MIT](LICENSE) License © 2023-PRESENT Viki
