// @from https://github.com/rollup/rollup/blob/c4cb2642efb9934735200eff98cfafb6888c1e6f/src/utils/colors.ts

import { env } from 'node:process'
import { createColors } from 'colorette'

const useColor = env.FORCE_COLOR !== '0' && !env.NO_COLOR

export const { bold, cyan, dim, gray, green, red, underline, yellow } = createColors({ useColor })

export { default as gradient } from 'gradient-string'

export function escapeColor(coloredText: string) {
  return coloredText.replace(/\u001b\[\d+m/gu, '')
}

export * from 'colorette'
