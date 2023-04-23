import axios from 'axios'
import https from 'node:https'

import type { AxiosInstance } from 'axios'

export const EdgeUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edg/112.0.0.0'
export const ChromeUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/112.0.0.0'
export const ChromeMobileUA = 'Mozilla/5.0 (Linux; Android 12; Mi 10) Chrome/112.0.0.0 Mobile'

export const request = axios.create({
  headers: {
    'User-Agent': ChromeUA,
    common: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  },
  timeout: 6000,
  withCredentials: true,
  validateStatus: () => true,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
}) as AxiosInstance

export * from 'axios'
export { default as axios } from 'axios'
