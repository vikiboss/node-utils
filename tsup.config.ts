import { Options } from 'tsup'

export default {
  entry: ['src/index.ts'],
  outDir: 'lib',
  dts: true,
  format: 'esm',
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  minifyIdentifiers: true,
  minifyWhitespace: true,
  minifySyntax: true
} satisfies Options
