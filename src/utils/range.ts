export function range(min: number, max?: number, step?: number) {
  typeof max === 'undefined' && ([max, min] = [min, 1])

  step ||= 1

  const res: number[] = []

  for (let value = min; (max - value) * step >= 0; value += step) {
    res.push(value)
  }

  return res
}
