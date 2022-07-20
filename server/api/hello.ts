import { rapydFetch, bindKeys } from '@/utils/rapyd'

import 'dotenv/config'

const accessKey = String(process.env.RAPYD_ACCESS_KEY)
const secretKey = String(process.env.RAPYD_SECRET_KEY)

bindKeys(accessKey, secretKey)

export default defineEventHandler(async () => {
  const response = await rapydFetch(`/v1/data/countries`, { httpMethod: `get` })
  return {
    response,
  }
})
