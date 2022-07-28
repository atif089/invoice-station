<template>
  <NuxtLayout name="main">
    <Transition name="fade" mode="out-in">
      <div
        v-if="getProfile.loading"
        class="flex min-h-[60vh] items-center justify-center"
      >
        <div role="status">
          <svg
            class="mr-2 inline h-20 w-20 animate-spin fill-cyan-600 text-gray-200"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div
        v-else
        class="mx-auto grid max-w-screen-2xl grid-cols-1 xl:grid-cols-2 xl:gap-6"
      >
        <div class="col-span-full mb-4 xl:mb-0">
          <h1 class="text-xl font-semibold text-gray-800 sm:text-2xl">
            Profile settings
          </h1>
        </div>

        <div class="col-span-2">
          <div class="mb-6 rounded-2xl bg-white p-4 shadow-lg shadow-gray-200">
            <h3 class="mb-4 text-xl font-bold text-gray-900">
              General Information
            </h3>
            <FormKit
              :value="getProfile.profile"
              type="form"
              submit-label="Update Profile"
              @submit="update"
            >
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <FormKit
                    name="first_name"
                    label="First Name"
                    placeholder="John"
                    validation="alpha_spaces:latin|length:3"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <FormKit
                    name="last_name"
                    label="Last Name"
                    placeholder="Doe"
                    validation="alpha_spaces:latin|length:3"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <FormKit
                    name="country"
                    label="Country"
                    placeholder="United States"
                    validation="alpha_spaces:latin|length:4"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <FormKit
                    name="city"
                    label="City"
                    placeholder="e.g San Francisco"
                    validation="alpha_spaces:latin|length:4"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <FormKit
                    name="address"
                    label="Address"
                    placeholder="e.g  Mcallister St"
                    validation=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <FormKit
                    name="email"
                    label="Email Address"
                    placeholder="johndoe@gmail.com"
                    type="email"
                    validation="email"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <FormKit
                    name="phone_number"
                    label="Phone Number"
                    placeholder="e.g. +(12)3456 789"
                    type="number"
                    validation="number|length:10,12"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <FormKit
                    name="birthday"
                    label="Birthday"
                    placeholder="13/05/2001"
                    type="date"
                    validation=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <FormKit
                    name="organization"
                    label="Organization"
                    placeholder="Company Name"
                    validation="alpha_spaces:latin|length:4"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <FormKit
                    name="role"
                    label="Role"
                    placeholder="React Developer"
                    validation="alpha_spaces:latin|length:4"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <FormKit
                    name="department"
                    label="Department"
                    placeholder="Development"
                    validation="alpha_spaces:latin|length:4"
                  />
                </div>
                <div class="col-span-6 mb-6 sm:col-span-3">
                  <FormKit
                    name="zip_code"
                    label="Zip/Postal Code"
                    placeholder="123456"
                    type="number"
                    validation="length:6"
                  />
                </div>
              </div>
            </FormKit>
          </div>
          <div class="mb-6 rounded-2xl bg-white p-4 shadow-lg shadow-gray-200">
            <h3 class="mb-4 text-xl font-bold">Password information</h3>
            <form action="#">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="current-password"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >Current password</label
                  >
                  <input
                    id="current-password"
                    type="text"
                    name="current-password"
                    class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="new-password"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >New password</label
                  >
                  <input
                    id="new-password"
                    type="text"
                    name="new-password"
                    class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="confirm-password"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >Confirm password</label
                  >
                  <input
                    id="confirm-password"
                    type="text"
                    name="confirm-password"
                    class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div class="col-span-full">
                  <div class="text-sm font-medium">Password requirements:</div>
                  <div class="mb-1 text-sm font-normal text-gray-500">
                    Ensure that these requirements are met:
                  </div>
                  <ul class="space-y-1 pl-4 text-gray-500">
                    <li class="text-xs font-normal">
                      At least 10 characters (and up to 100 characters)
                    </li>
                    <li class="text-xs font-normal">
                      At least one lowercase character
                    </li>
                    <li class="text-xs font-normal">
                      Inclusion of at least one special character, e.g., ! @ # ?
                    </li>
                    <li class="text-xs font-normal">Some text here zoltan</li>
                  </ul>
                </div>
                <div class="sm:col-full col-span-6">
                  <button
                    class="flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
                    type="submit"
                  >
                    Save all
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useProfileStore, Profile } from '@/store/profile'

const { getProfile, fetchProfile, UpdateProfile } = useProfileStore()
fetchProfile()
const update = async (formData: Profile) => {
  await UpdateProfile(formData)
  alert('Profile Updated Successfully!')
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in -0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
