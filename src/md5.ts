import { createHash } from 'node:crypto'

import type { BinaryLike, BinaryToTextEncoding } from 'node:crypto'

export function md5(data: BinaryLike): string
export function md5(data: BinaryLike, type: BinaryToTextEncoding): string
export function md5(data: BinaryLike, type: 'buffer'): Buffer
export function md5(data: BinaryLike, type: 'buffer' | BinaryToTextEncoding = 'hex') {
  const hash = createHash('md5').update(data)

  if (type === 'buffer') {
    return hash.digest()
  }

  return hash.digest(type)
}
