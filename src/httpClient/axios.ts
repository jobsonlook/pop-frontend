/**
 * 网络请求配置
 */

import axios from 'axios'
import { useTranslation } from 'react-i18next'
import './index.scss'
import { getDefalutLanguage } from '@/utils/helper'

const timeout = 100000
const baseURL = import.meta.env.VITE_API_DOMAIN

const defaultLanguage = getDefalutLanguage()

/**
 * 创建 axios 请求实例
 * 注意：get 请求需要传 params，post 请求需要传 data。
 * @see https://axios-http.com/docs/api_intro
 */
const axiosHttp = axios.create({
  baseURL: baseURL, // 基础请求地址
  timeout: timeout, // 请求超时设置
  withCredentials: false, // 跨域请求是否需要携带 cookie
})

/**
 * http request 拦截器
 */
axiosHttp.interceptors.request.use(
  (config: any) => {
    // document.body.classList.add('loading-indicator');
    config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/json',
      lang: defaultLanguage,
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * http response 拦截器
 */
axiosHttp.interceptors.response.use(
  (response) => {
    // document.body.classList.remove('loading-indicator');
    if (response.data.retCode === 0) {
      return response.data.result
    } else {
      console.log('response.data.retCode ==', response.data.retCode)

      return Promise.reject(response.data)
    }
  },
  (error) => {
    console.log('请求出错：', error)

    return Promise.reject(error)
  }
)

export default axiosHttp
