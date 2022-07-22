import { rapydFetch, bindKeys } from '@/utils/rapyd'

import 'dotenv/config'

const accessKey = String(process.env.RAPYD_ACCESS_KEY)
const secretKey = String(process.env.RAPYD_SECRET_KEY)

bindKeys(accessKey, secretKey)

export default defineEventHandler(async () => {
  const rapydResponse = await rapydFetch(`/v1/user/wallets`, {
    httpMethod: `get`,
  })

  const response = {
    status: rapydResponse.status,
  }
  
  if(rapydResponse.status.status === `SUCCESS`) {
    response.data = rapydResponse.data,
  }

  return response
})
