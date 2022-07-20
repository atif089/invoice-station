import WordArray from 'crypto-js/lib-typedarrays'
import Hex from 'crypto-js/enc-hex'
import HmacSHA256 from 'crypto-js/hmac-sha256'
import Base64 from 'crypto-js/enc-base64'
import Utf8 from 'crypto-js/enc-utf8'

interface signatureParameters {
  urlPath: string
  httpMethod: string
  data: string
  timestamp: string
  salt: WordArray
}

let accessKey = ''
let secretKey = ''

const bindKeys = (userAccessKey: string, userSecretKey: string) => {
  accessKey = userAccessKey
  secretKey = userSecretKey
}

const getSignature = (S: signatureParameters) => {
  const toSign =
    S.httpMethod +
    S.urlPath +
    S.salt +
    S.timestamp +
    accessKey +
    secretKey +
    S.data
  let signature = Hex.stringify(HmacSHA256(toSign, secretKey))
  signature = Base64.stringify(Utf8.parse(signature))
  return signature
}

const rapydFetch = async (urlPath: string, options?: any) => {
  const salt = WordArray.random(12)
  const timestamp = (Math.floor(new Date().getTime() / 1000) - 10).toString()
  const httpMethod = options?.httpMethod ?? 'get' // get|put|post|delete - must be lowercase.
  const data = options?.data ?? '' // Stringified JSON without whitespace.

  const signature = getSignature({
    urlPath,
    httpMethod,
    data,
    salt,
    timestamp,
  })

  const headers = {
    access_key: accessKey,
    signature,
    salt,
    timestamp,
    'Content-Type': `application/json`,
  }

  const url = `https://sandboxapi.rapyd.net` + urlPath

  const request = {
    url,
    headers,
    method: httpMethod,
    data,
  }

  // @ts-expect-error because request contains custom headers
  const response = await $fetch(url, request)

  return response
}

export { bindKeys, rapydFetch }
