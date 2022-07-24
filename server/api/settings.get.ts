type HTTPResponse = {
  status: string
  [key: string]: any
}

export default defineEventHandler((event) => {
  const response: HTTPResponse = {
    status: 'success',
  }

  response.user = event?.context?.user || null

  return response
})
