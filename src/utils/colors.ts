import { createColors } from 'colorette'
import { env } from 'node:process'

import type { Colorette } from 'colorette'

const useColor = env.FORCE_COLOR !== '0' && !env.NO_COLOR
const pattern = createColors({ useColor }) as Colorette

// color
export const { green, red, blue, yellow, magenta, cyan, gray, white } = pattern
// style
export const { dim, bold, underline, italic, reset, hidden } = pattern

export { default as gradient } from 'gradient-string'
