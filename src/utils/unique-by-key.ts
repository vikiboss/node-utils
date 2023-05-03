/**
 * 按对象的键名去重
 */
export function uniqueByKey<T extends Record<number | string, unknown>>(
  arr: T[],
  key: string | number
) {
  return arr.reduce((acc, cur) => {
    if (!acc.some((e) => e[key] === cur[key])) {
      acc.push(cur)
    }
    return acc
  }, [] as T[]) as T[]
}
