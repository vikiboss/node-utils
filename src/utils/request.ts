import axios, { AxiosInstance } from 'axios'
import https from 'node:https'

const ChromeUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/111.0.0.0'

const request = axios.create({
  headers: { 'User-Agent': ChromeUA },
  timeout: 12000,
  validateStatus: () => true,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
}) as AxiosInstance

export { axios, request }

export * from 'axios'