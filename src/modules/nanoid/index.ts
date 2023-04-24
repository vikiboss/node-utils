import { customAlphabet } from 'nanoid'
import { nanoid as fastId, customAlphabet as fastCustomAlphabet } from 'nanoid/non-secure'

const alphabet = '1234567890abcdefghijklmnopqrstuvwxyz'

const randomId = customAlphabet(alphabet, 8)
const fastRandomId = fastCustomAlphabet(alphabet, 8)

export { randomId, fastRandomId, fastId }
export * from 'nanoid'
