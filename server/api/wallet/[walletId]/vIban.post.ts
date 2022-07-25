import { rapydFetch, RapydFetchResponse } from '@/utils/rapyd'

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

  const rapydResponse = await rapydFetch(`/v1/issuing/bankaccounts`, {
    httpMethod: `post`,
    body: {
      country: 'DE',
      currency: 'EUR',
      ewallet: walletId,
    },
  })

  if (rapydResponse.status.status === `SUCCESS`) {
    response.data = rapydResponse.data
  }
  response.status = rapydResponse.status

  return response
})
