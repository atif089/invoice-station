import WordArray from 'crypto-js/lib-typedarrays'
import Hex from 'crypto-js/enc-hex'
import HmacSHA256 from 'crypto-js/hmac-sha256'
import Base64 from 'crypto-js/enc-base64'
import Utf8 from 'crypto-js/enc-utf8'

type signatureParams = {
  urlPath: string
  httpMethod: string
  data?: string
  timestamp: string
  salt: WordArray
  [key: string]: any
}

type RapydFetchResponse = {
  status: {
    status: string
  }
  data?: any
  [key: string]: any
}

type RequestHeader = {
  [key: string]: any
}

type Request = {
  [key: string]: any
}

let accessKey = ''
let secretKey = ''

const bindKeys = (userAccessKey: string, userSecretKey: string) => {
  accessKey = userAccessKey
  secretKey = userSecretKey
}

const getSignature = ({
  httpMethod,
  urlPath,
  salt,
  timestamp,
  data = '',
}: signatureParams) => {
  // this order is important
  const toSign =
    httpMethod + urlPath + salt + timestamp + accessKey + secretKey + data
  let signature = Hex.stringify(HmacSHA256(toSign, secretKey))
  signature = Base64.stringify(Utf8.parse(signature))
  return signature
}

const rapydFetch = (
  urlPath: string,
  options?: any
): Promise<RapydFetchResponse> => {
  const salt = WordArray.random(12)
  const timestamp = (Math.floor(new Date().getTime() / 1000) - 10).toString()
  const httpMethod = options?.httpMethod ?? 'get' // get|put|post|delete - must be lowercase.
  const body = options?.body ?? '' // Stringified JSON without whitespace.

  const sigParams: signatureParams = {
    httpMethod,
    urlPath,
    salt,
    timestamp,
  }

  if (body) {
    sigParams.data = JSON.stringify(body)
  }

  const signature: string = getSignature(sigParams)

  const headers: RequestHeader = {
    access_key: accessKey,
    signature,
    salt: salt as any,
    timestamp,
    'Content-Type': `application/json`,
  }

  const url = `https://sandboxapi.rapyd.net` + urlPath

  const request: Request = {
    headers,
    method: httpMethod,
  }

  if (body) {
    request.body = body
  }

  return $fetch(url, request)
}

export { bindKeys, rapydFetch, RapydFetchResponse }
