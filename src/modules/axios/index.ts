import https from 'node:https'
import axios from 'axios'

import type { AxiosInstance } from 'axios'

export const EdgeUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edg/112.0.0.0'
export const ChromeUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/112.0.0.0'
export const ChromeMobileUA = 'Mozilla/5.0 (Linux; Android 12; Xiaomi 10) Chrome/112.0.0.0 Mobile'

export const request = axios.create({
  headers: { 'User-Agent': ChromeUA },
  timeout: 6000,
  validateStatus: () => true,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
}) as AxiosInstance

export * from 'axios'
