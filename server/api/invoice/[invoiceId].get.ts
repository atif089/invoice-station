import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/utils/firestore'

type HTTPResponse = {
  [key: string]: any
}

export default defineEventHandler(async (event) => {
  const response: HTTPResponse = {}

  const invoiceId = event?.context?.params?.invoiceId

  if (!invoiceId) {
    response.error = 'Cannot find invoice Id'
    return response
  }

  const docRef = doc(db, `invoices`, invoiceId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return { ...docSnap.data() }
  } else {
    response.error = 'Cannot find invoice id in db'
  }

  return response
})
