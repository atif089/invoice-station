import { rapydFetch, RapydFetchResponse } from '@/utils/rapyd'

type MyHTTPResponse = {
  status: RapydFetchResponse['status'] | string
  data?: RapydFetchResponse['data']
}

export default defineEventHandler(async () => {
  const rapydResponse = await rapydFetch(`/v1/user/wallets`, {
    httpMethod: `get`,
  })

  const response: MyHTTPResponse = {
    status: rapydResponse.status,
  }

  if (rapydResponse.status.status === `SUCCESS`) {
    response.data = rapydResponse.data
  }

  return response
})
