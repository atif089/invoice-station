import { bindKeys } from '@/utils/rapyd'
import 'dotenv/config'

export default function (req, res, next) {
  const user = {
    userId: String(process.env.USER_ID),
    accessKey: String(process.env.RAPYD_ACCESS_KEY),
    secretKey: String(process.env.RAPYD_SECRET_KEY),
  }

  if (!user.accessKey || !user.secretKey) {
    res.statusCode = 401
    res.setHeader('Content-Type', 'application/json')
    res.end(
      JSON.stringify({
        error: 'RAPYD_ACCESS_KEY and RAPYD_SECRET_KEY not found',
      })
    )
    return
  }

  // TODO: Use auth-modulewhen ready
  // https://github.com/nuxt-community/auth-module
  bindKeys(user.accessKey, user.secretKey)
  req.event.context.user = user

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  next()
}
