import { dirname as getDirname } from 'node:path'
import { fileURLToPath } from 'node:url'

export function dirname(importMeta: { url: string }) {
  return getDirname(fileURLToPath(importMeta.url))
}
