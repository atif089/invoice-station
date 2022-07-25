import { doc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/utils/firestore'

type HTTPResponse = {
  [key: string]: any
}

export default defineEventHandler(async (event) => {
  const response: HTTPResponse = {}

  const queryString = useQuery(event)
  const userId = queryString.user_id || event?.context?.user?.userId

  if (!userId) {
    response.error = 'Cannot find user id'
    return response
  }

  const invoicesRef = collection(db, 'invoices')
  const q = query(invoicesRef, where('user_id', '==', userId))
  const qSnap = await getDocs(q)

  const invoices = []

  for (const doc of qSnap.docs) {
    invoices.push({ ...doc.data(), id: doc.id })
  }

  if (invoices.length > 0) {
    response.invoices = invoices
  } else {
    response.error = `No invoices found for user ${userId}`
  }

  return response
})
