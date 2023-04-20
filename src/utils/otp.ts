/** one time password */
export function OTP(length: number) {
  if (length < 0 || length > 16) {
    throw Error('This is merely for OTP whose length is within 6 and 16')
  }

  return String(Math.random()).slice(2, length + 2)
}
