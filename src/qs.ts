/**
 * JS 对象转换成 `urlencoded` 格式字符串 { name: 'Bob', age: 18 } => name=Bob&age=18
 * @param {Record<number | string, any>} obj JS 对象
 * @return {string} 转换后的字符串
 */
export function qs(obj: Record<number | string, any>): string {
  return new URLSearchParams(obj).toString()
}

/** 解析形如 name=Viki&age=1 成对象 {name: 'Viki', age: 1 } */
export function parseQs(query: string): Record<number | string, any> {
  return Object.fromEntries(new URLSearchParams(query))
}
