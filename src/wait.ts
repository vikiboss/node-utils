/**
 * 异步延时函数
 * @param {number} ms 等待毫秒数
 * @return {Promise<void>}
 */
export async function wait(ms: number): Promise<void> {
  return new Promise<void>(resolve => setTimeout(resolve, ms))
}

// aliases to wait
export const sleep = wait
export const delay = wait
