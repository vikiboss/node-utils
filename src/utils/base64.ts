export function encode(str: string): string {
  const buffer = Buffer.from(str)
  return buffer.toString('base64')
}

export function decode(str: string): string {
  const buffer = Buffer.from(str, 'base64')
  return buffer.toString()
}
