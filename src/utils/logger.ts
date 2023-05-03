import * as colors from './colors'
import { msTime, yDate } from './time'

export function log(...args: any[]) {
  console.log(...addStyle(args, 'blue'))
}

export function logWithTime(...args: any[]) {
  console.log(`🕒 ${colors.dim(msTime())}`, ...addStyle(args, 'blue'))
}

export function logWithDate(...args: any[]) {
  console.log(`🕒 ${colors.dim(yDate())} ${colors.dim(msTime())}`, ...addStyle(args, 'blue'))
}

function addStyle(value: unknown, color: string) {
  const isPrim = (e: unknown) => typeof e === 'string' || typeof e === 'number'

  if (isPrim(value)) {
    return colors[color](value)
  }

  if (Array.isArray(value)) {
    return value.map((e) => (isPrim(e) ? colors[color](e) : e))
  }

  return value
}
