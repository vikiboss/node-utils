export const sum = (...args: number[]) => args.reduce((p, n) => p + n, 0)
export const sumArray = (arr: number[]) => sum(...arr)
