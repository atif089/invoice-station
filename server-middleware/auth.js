import { bindKeys } from '@/utils/rapyd'
import 'dotenv/config'

export default function (_req, res, next) {
  const accessKey = String(process.env.RAPYD_ACCESS_KEY)
  const secretKey = String(process.env.RAPYD_SECRET_KEY)

  if (!accessKey || !secretKey) {
    res.statusCode = 401
    res.setHeader('Content-Type', 'application/json')
    res.end(
      JSON.stringify({
        error: 'RAPYD_ACCESS_KEY and RAPYD_SECRET_KEY not found',
      })
    )
    return
  }

  // Memoize this in a better way per sser
  bindKeys(accessKey, secretKey)

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  next()
}
