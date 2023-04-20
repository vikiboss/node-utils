import baseConfig from './tsup.config.base'

import type { Options } from 'tsup'

export default {
  ...baseConfig,
  watch: './src'
} satisfies Options
