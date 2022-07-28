import { defineStore } from 'pinia'

export interface Profile {
  first_name: string
  last_name: string
  country: string
  city: string
  address: string
  email: string
  phone_number: number
  dob: string
  organization: string
  role: string
  department: string
  zip_code: number
}

export interface ProfileState {
  profile: Profile
  loading: boolean
}
const state = (): ProfileState => ({
  profile: {} as Profile,
  loading: true,
})

const getters = {
  getProfile: (state: ProfileState) => state,
}
const actions = {
  fetchProfile() {
    try {
      const { data: profile, pending } = useFetch('/api/settings')
      // @ts-ignore
      this.profile = profile
      // @ts-ignore
      this.loading = pending
    } catch (error) {}
  },
  async UpdateProfile(formData: Profile) {
    console.log(formData)
    try {
      const response = await $fetch('/api/settings', {
        method: 'POST',
        body: formData,
      })
      console.log(response)
      alert('Profile Updated Successfully!')
    } catch (error) {
      console.error(error)
      alert('Something Went Wrong')
    }
  },
}

export const useProfileStore = defineStore('ProfileStore', {
  state,
  getters,
  actions,
})
