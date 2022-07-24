<template>
  <NuxtLayout name="main">
    <div>
      <div class="px-4">
        <div class="mb-6 rounded-2xl bg-white p-4 shadow-lg shadow-gray-200">
          <h3 class="mb-4 text-xl font-bold">Create New Wallet</h3>
          <form action="#">
            <div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div class="col-span-1">
                <div class="mb-4">
                  <label
                    for="first-name"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >First Name</label
                  >
                  <input
                    id="first-name"
                    type="text"
                    name="first-name"
                    class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                    placeholder="Bonnie"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="organization"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >Organization</label
                  >
                  <input
                    id="organization"
                    type="text"
                    name="organization"
                    class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                    placeholder="Company Name"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="department"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >Department</label
                  >
                  <input
                    id="department"
                    type="text"
                    name="department"
                    class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                    placeholder="Development"
                    required
                  />
                </div>
                <div>
                  <label
                    for="city"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >City</label
                  >
                  <input
                    id="city"
                    type="text"
                    name="city"
                    class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                    placeholder="e.g. San Francisco"
                    required
                  />
                </div>
              </div>
              <div class="col-span-1">
                <div class="mb-4">
                  <label
                    for="last-name"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >Last Name</label
                  >
                  <input
                    id="last-name"
                    type="text"
                    name="last-name"
                    class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                    placeholder="Green"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="role"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >Role</label
                  >
                  <input
                    id="role"
                    type="text"
                    name="role"
                    class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                    placeholder="React Developer"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="country"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >Country</label
                  >
                  <input
                    id="country"
                    type="text"
                    name="country"
                    class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                    placeholder="United States"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >Email</label
                  >
                  <input
                    id="email"
                    type="email"
                    name="email"
                    class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                    placeholder="example@company.com"
                    required
                  />
                </div>
              </div>
              <div class="col-span-1">
                <label
                  for="info"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Info</label
                >
                <textarea
                  id="info"
                  name="info"
                  rows="14"
                  class="block w-full rounded-lg border border-gray-300 p-4 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder="Receipt Info (optional)"
                ></textarea>
              </div>
            </div>
            <button
              class="flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
              type="submit"
            >
              Create Wallet
            </button>
          </form>
        </div>
        <div class="rounded-2xl bg-white p-4 shadow-lg shadow-gray-200">
          <FormKit
            type="form"
            submit-label="Create Wallet"
            @submit="createWallet"
          >
            <FormKit
              name="first-name"
              label="First Name"
              validation="required"
            />
            <FormKit name="last-name" label="Last Name" validation="required" />
          </FormKit>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
type CreateWallet = {
  'first-name': string
  'last-name': string
}
const createWallet = (formDetails: CreateWallet) => {
  console.log(formDetails)
}
</script>
