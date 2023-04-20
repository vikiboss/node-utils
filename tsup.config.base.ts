import type { Options } from 'tsup'

export default {
  entry: ['src/index.ts', 'src/modules/*/index.ts'],
  outDir: 'lib',
  sourcemap: true,
  dts: true,
  format: 'esm',
  splitting: false,
  clean: true
} satisfies Options
