import dayjs from 'dayjs'

export { dayjs }

/**
 * 取格式化时间，默认当前时间，使用 dayjs 的 format 函数封装
 * @param {string | undefined} format 格式化模板，默认'YYYY-MM-DD HH:mm'
 * @param {Date | undefined} date 待格式化的时间，默认当前时间
 * @return {string} 格式化后的时间字符串
 */
export function time(format?: string, date?: Date): string {
  return dayjs(date || new Date()).format(format || 'YYYY-MM-DD HH:mm')
}
