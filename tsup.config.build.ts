import { Options } from 'tsup'
import baseConfig from './tsup.config.base'

export default {
  ...baseConfig,
  minify: true,
  minifyIdentifiers: true,
  minifyWhitespace: true,
  minifySyntax: true
} satisfies Options
