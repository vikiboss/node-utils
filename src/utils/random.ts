/**
 * 生成随机整数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @return {number} 随机范围内的整数
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 取数组内随机一项
 * @param {Array<T>} arr 待操作数组
 * @return {T} 数组内的随机一项
 */
export function randomItem<T = unknown>(arr: T[]): T {
  if (!Array.isArray(arr)) {
    throw new Error('argument should be an array')
  }

  if (!arr.length) {
    throw new Error('array cannot be empty')
  }

  return arr[randomInt(0, arr.length - 1)]
}
