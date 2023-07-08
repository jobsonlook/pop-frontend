import axiosHttp from './axios'
import i18n from '@/i18n/i18n'
import { Divider, Toast } from 'antd-mobile'

import { getSign } from '@/utils/utils'

export default {
  async request(options: any, toast = true, needSign = false) {
    if (needSign) {
      let { data } = options
      const now = new Date().getTime()
      data['timestamp'] = now
      let sign: any = getSign(data)

      options['data']['signData'] = sign
      options['data']['timestamp'] = now
    }

    const startTime = Date.now()
    const t = setTimeout(() => {
      console.error(
        'unresponsiveRequests,options:',
        options,
        ',totalTime:',
        Date.now() - startTime
      )
    }, 1000 * 10)
    try {
      const res = await axiosHttp.request(options)
      const totalTime = Date.now() - startTime
      if (totalTime > 10000) {
        console.error(
          'slowRequests,options:',
          options,
          ',totalTime:',
          Date.now() - startTime
        )
      }

      clearTimeout(t)
      return res
    } catch (error: any) {
      if (toast) {
        if (error.retCode !== 0) {
          let content = ''
          switch (error.retCode) {
            case 410000001:
            case 410000011:
              content = i18n.t('network.unknowerror')
              break
            case 410000002:
              content = i18n.t('network.invalidParams')
              break
            case 410000004:
              content = i18n.t('network.serverMaintaining')
              break
            case 410000012:
              content = i18n.t('network.grpctTimeout')
              break
            default:
              content = i18n.t('share.networkerror')
              break
          }
          Toast.show({
            icon: 'fail',
            content: content,
            position: 'top',
          })
        } else {
          Toast.show({
            icon: 'fail',
            content: i18n.t('share.networkerror'),
            position: 'top',
          })
        }
      }

      console.log('请求出错：', error)
      clearTimeout(t)
      return Promise.reject(error)
    }
  },
}
