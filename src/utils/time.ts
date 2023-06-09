import dayjs from 'dayjs'

export { dayjs }

/**
 * 取当前格式式化时间，使用 dayjs 的 format 函数封装
 * @param {string | undefined} format 格式化模板，默认'YYYY-MM-DD HH:mm'
 * @return {string} 格式化后的时间字符串
 */
export function now(format?: string): string {
  return dayjs().format(format || 'YYYY-MM-DD HH:mm')
}

/**
 * 取毫秒数（默认为当前时间戳，也就是自 1970 年 1 月 1 日 00:00:00 UTC 起至当前时间的总毫秒数）
 * @param {Date | string | undefined} date 可选传入的时间
 * @return {number} 13 位时间戳结果
 */
export function ms(date?: Date | string): number {
  return +normalizeDate(date)
}

/**
 * 取时间戳（自 1970 年 1 月 1 日 00:00:00 UTC 起至当前时间的总毫秒数）
 * @param {'unix' | undefined} type 如果需要 unix 时间戳（10 位），传入 'unix'
 * @return {size} 13 位时间戳
 */
export function timestamp(type?: 'unix'): number {
  return type === 'unix' ? Date.now() / 1000 : Date.now()
}

export function date(date?: Date | string): string {
  return dayjs(normalizeDate(date)).format('MM-DD')
}

export function yDate(date?: Date | string): string {
  return dayjs(normalizeDate(date)).format('YYYY-MM-DD')
}

export function time(date?: Date | string): string {
  return dayjs(normalizeDate(date)).format('HH:mm')
}

export function sTime(date?: Date | string): string {
  return dayjs(normalizeDate(date)).format('HH:mm:ss')
}

export function msTime(date?: Date | string): string {
  return dayjs(normalizeDate(date)).format('HH:mm:ss:SSS')
}

function normalizeDate(date?: Date | string) {
  if (typeof date === 'string' || typeof date === 'number') {
    return new Date()
  } else if (date instanceof Date) {
    return date
  } else {
    return new Date()
  }
}
