import httpClient from '@/httpClient'


const debug = true


export function getTokens(params: any) {
  return httpClient.request({
    url: `/bitverse/wallet/v1/public/token/search`,
    method: 'post',
    data: params,
  })
}
