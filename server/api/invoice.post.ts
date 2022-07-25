import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import WordArray from 'crypto-js/lib-typedarrays'
import { db } from '@/utils/firestore'

type HTTPResponse = {
  [key: string]: any
}

export default defineEventHandler(async (event) => {
  const response: HTTPResponse = {}

  const body = await useBody(event)
  const userId = event?.context?.user?.userId

  if (!userId) {
    response.error = 'Cannot find user id'
    return response
  }

  if (!body?.invoice_data) {
    response.error = 'Cannot find invoice_data'
    return response
  }

  const invoiceId = WordArray.random(16).toString()

  const invoicePostData = {
    user_id: userId,
    invoice_id: invoiceId,
    related_transactions: '',
    invoice_status: 'pending',
    invoice_data: body?.invoice_data,
    created_at: Timestamp.now(),
  }

  const docRef = doc(db, `invoices`, invoiceId)

  await setDoc(docRef, invoicePostData)

  response.data = invoicePostData

  return response
})
