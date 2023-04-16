/** 打乱字符串 */
export function shuffleString(str: string) {
  return str
    .split('')
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .join('')
}

/** 打乱数组 */
export function shuffleArray<T = unknown>(arr: T[]): T[] {
  return arr.sort(() => (Math.random() > 0.5 ? 1 : -1))
}
