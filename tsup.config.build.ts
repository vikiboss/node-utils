import baseConfig from './tsup.config.base'

import type { Options } from 'tsup'

export default {
  ...baseConfig,
  minify: true,
  minifyIdentifiers: true,
  minifyWhitespace: true,
  minifySyntax: true
} satisfies Options
