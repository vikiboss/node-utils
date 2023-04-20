import { msTime } from '.'
import * as colors from './colors'

function addStyle(value: any[] | string, color: string) {
  if (typeof value === 'string') {
    return colors[color](value)
  }

  return value.map((e) => (typeof e === 'string' ? colors[color](e) : e))
}

export async function log(...args: any[]) {
  console.log(...addStyle(args, 'blue'))
}

export async function logWithTime(...args: any[]) {
  console.log(`🕒 ${msTime()} `, ...addStyle(args, 'blue'))
}
