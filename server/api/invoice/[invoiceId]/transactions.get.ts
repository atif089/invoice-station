import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '@/utils/firestore'

type HTTPResponse = {
  [key: string]: any
}

export default defineEventHandler(async (event) => {
  // TODO: fix route
  // TODO: it should be event?.context?.params?.issuingId
  const issuingId = event?.context?.params?.invoiceId
  const response: HTTPResponse = { status: '' }

  if (!issuingId) {
    response.status = `400`
    response.error = `Missing invoiceId`
    return response
  }

  const invoicesRef = collection(db, 'transactions')
  const q = query(invoicesRef, where('issuing_id', '==', issuingId))
  const qSnap = await getDocs(q)

  const transactions = []

  for (const doc of qSnap.docs) {
    transactions.push({ ...doc.data(), id: doc.id })
  }

  return {
    transactions,
  }
})
