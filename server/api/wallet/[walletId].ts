import { rapydFetch, bindKeys, RapydFetchResponse } from '@/utils/rapyd'

import 'dotenv/config'

const accessKey = String(process.env.RAPYD_ACCESS_KEY)
const secretKey = String(process.env.RAPYD_SECRET_KEY)

bindKeys(accessKey, secretKey)

type MyHTTPResponse = {
  status: RapydFetchResponse['status'] | string
  data?: RapydFetchResponse['data']
  error?: string
}

export default defineEventHandler(async (event) => {
  const walletId = event?.context?.params?.walletId

  const response: MyHTTPResponse = { status: '' }

  if (!walletId) {
    response.status = `400`
    response.error = `Missing walletId`
    return response
  }

  const rapydResponse = await rapydFetch(`/v1/user/${walletId}`, {
    httpMethod: `get`,
  })

  if (rapydResponse.status.status === `SUCCESS`) {
    response.data = rapydResponse.data
  }
  response.status = rapydResponse.status

  return response
})
