import { firebaseApp } from '@/utils/firestore'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      firebaseApp: () => firebaseApp,
    },
  }
})
