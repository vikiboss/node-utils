import { promisify } from 'node:util'
import { rimraf } from 'rimraf'

export const removeSync = rimraf
export const remove = promisify(rimraf)
