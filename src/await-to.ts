// @from https://github.com/scopsy/await-to-js/blob/59811c1338a3b7879222360cff71d3a9c6453104/src/await-to-js.ts

/**
 * @param { Promise } promise
 * @param { object } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export async function to<T, U = Error>(
  promise: Promise<T>,
  errorExt?: object
): Promise<[U, undefined] | [null, T]> {
  try {
    return [null, await promise] as [null, T]
  } catch (err) {
    if (errorExt) {
      return [Object.assign({}, err, errorExt), undefined]
    }
    return [err, undefined] as [U, undefined]
  }
}
