import { Options } from 'tsup'

export default {
  entry: ['src/index.ts'],
  outDir: 'lib',
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  minifyIdentifiers: true,
  minifyWhitespace: true,
  minifySyntax: true
} satisfies Options
