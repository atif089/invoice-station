import { doc, getDoc, setDoc } from 'firebase/firestore'
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

  const docRef = doc(db, `users`, userId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const oldData = docSnap.data()
    const newData = {
      first_name: body?.first_name || oldData.first_name,
      last_name: body?.last_name || oldData.last_name,
      email: body?.email || oldData.email,
      user_data: body?.user_data || oldData.user_data,
      country: body?.country || oldData.country,
      city: body?.city || oldData.city,
      address: body?.address || oldData.address,
      phone_number: body?.phone_number || oldData.phone_number,
      birthday: body?.birthday || oldData.birthday,
      organization: body?.organization || oldData.organization,
      role: body?.role || oldData.role,
      department: body?.department || oldData.department,
      zip_code: body?.zip_code || oldData.zip_code,
      access_key: body?.access_key || oldData.access_key,
      secret_key: body?.secret_key || oldData.secret_key,
    }
    await setDoc(docRef, newData)
  } else {
    response.error = 'Cannot find user id in db'
  }

  return response
})
