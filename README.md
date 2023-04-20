# node utils

> Common and useful [Node.js](https://nodejs.org/) utils of **Best Practice**.

> NOTE: this package is [pure ESM][pure esm] now.

## Installation

**npm**

```bash
npm install @vmoe/node-utils
```

**or pnpm**

```bash
pnpm add @vmoe/node-utils
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

## Utils List

see [here](https://github.com/vikiboss/node-utils/blob/main/src/index.ts) for full utils list.

## Thanks

> in alphabetical order

**Packages**

- await-to-js
- axios
- boxen
- colorette
- dayjs
- deepmerge
- execa
- globby
- gradient-string
- kind-of
- mkdirp
- mri
- nanoid
- node-cron
- ora
- prompts
- rfdc
- rimraf
- rollup
- semver
- tinycolor2
- yargs

**People**

- [antfu](https://antfu.me)

## License

[MIT](LICENSE) License © 2023-PRESENT Viki

[pure ESM][https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c]
