import { dirname as getDirname } from 'node:path'
import { fileURLToPath } from 'node:url'

export function dirname(importMeta: { url: string }) {
  return getDirname(fileURLToPath(importMeta.url))
}

export function filename(importMeta: { url: string }) {
  return fileURLToPath(importMeta.url)
}

// aliases
export const __dirname = dirname
export const __filename = filename
