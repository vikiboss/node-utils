type Falsy = false | null | undefined

export function ensureArray<T = unknown>(items: (T | Falsy)[] | T | Falsy): T[] {
  if (Array.isArray(items)) {
    return items.filter(Boolean) as T[]
  }

  if (items) {
    return [items]
  }

  return []
}
