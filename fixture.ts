import { to, delay } from './src'

async function main() {
  const [err, res] = await to(delay(100))
  console.log(err, res)
}

main()
