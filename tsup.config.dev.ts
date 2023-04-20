import { Options } from 'tsup'
import baseConfig from './tsup.config.base'

export default {
  ...baseConfig,
  watch: './src'
} satisfies Options
