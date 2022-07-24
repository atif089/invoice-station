import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from 'firebase/firestore'
import { firebaseApp } from '@/utils/firestore'

type HTTPResponse = {
  status: string
  [key: string]: any
}

export default defineEventHandler(async (event) => {
  const response: HTTPResponse = {
    status: '',
  }

  const userId = event?.context?.user?.userId

  if (!userId) {
    response.status = '401'
    response.error = 'Cannot find user id'
    return response
  }

  const db = getFirestore(firebaseApp)

  const settingsRef = collection(db, 'users')
  const q = query(settingsRef, where('user_id', '==', userId))
  const querySnapshot = await getDocs(q)
  let userData = {}

  querySnapshot.forEach((doc) => {
    userData = doc.data()
  })

  response.user = userData

  return response
})
