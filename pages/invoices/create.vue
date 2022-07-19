<template>
  <NuxtLayout name="main">
    <div class="px-4">
      <div class="mb-6 rounded-2xl bg-white p-4 shadow-lg shadow-gray-200">
        <h3 class="mb-4 text-xl font-bold">Create New Invoice</h3>
        <form action="#">
          <div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="col-span-1">
              <div class="mb-4">
                <label
                  for="client-name"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Client's Name</label
                >
                <input
                  id="client-name"
                  type="text"
                  name="client-name"
                  class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div class="mb-4">
                <label
                  for="client-email"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Client's Email</label
                >
                <input
                  id="client-email"
                  type="email"
                  name="client-email"
                  class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder="example@company.com"
                  required
                />
              </div>
              <div class="mb-4">
                <label
                  for="street-address"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Street Address</label
                >
                <input
                  id="street-address"
                  type="text"
                  name="street-address"
                  class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder="Downtown"
                  required
                />
              </div>
              <div class="flex gap-4">
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
                    placeholder="San Francisco"
                    required
                  />
                </div>
                <div>
                  <label
                    for="zip-code"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >Zip Code</label
                  >
                  <input
                    id="zip-code"
                    type="text"
                    name="zip-code"
                    class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                    placeholder="123456"
                    required
                  />
                </div>
                <div>
                  <label
                    for="city"
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
              </div>
            </div>
            <div class="col-span-1">
              <div class="mb-4">
                <label
                  for="invoice-date"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Invoice Date</label
                >
                <input
                  id="invoice-date"
                  type="email"
                  name="invoice-date"
                  class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder="18/07/2022"
                  required
                />
              </div>
              <div class="mb-4">
                <label
                  for="payment-due"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Payment Due</label
                >
                <input
                  id="payment-due"
                  type="text"
                  name="payment-due"
                  class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder=""
                  required
                />
              </div>
              <div class="mb-4">
                <label
                  for="payment-terms"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Payment Terms</label
                >
                <input
                  id="payment-terms"
                  type="text"
                  name="payment-terms"
                  class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="description"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Description</label
                >
                <input
                  id="description"
                  type="text"
                  name="description"
                  class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="col-span-1">
              <div v-for="n in numberOfItems" :key="n" class="border-b-2 py-4">
                <div class="mb-4">
                  <label
                    for="street-address"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >Item Name</label
                  >
                  <input
                    id="street-address"
                    type="text"
                    name="street-address"
                    class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                    placeholder="Glassmorphism UI"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="street-address"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >Item Description</label
                  >
                  <input
                    id="street-address"
                    type="text"
                    name="street-address"
                    class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                    placeholder="Figma template"
                    required
                  />
                </div>
                <div class="flex gap-4">
                  <div>
                    <label
                      for="city"
                      class="mb-2 block text-sm font-medium text-gray-900"
                      >Price</label
                    >
                    <input
                      id="city"
                      type="text"
                      name="city"
                      class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                      placeholder="$99"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="zip-code"
                      class="mb-2 block text-sm font-medium text-gray-900"
                      >Quantity</label
                    >
                    <input
                      id="zip-code"
                      type="text"
                      name="zip-code"
                      class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                      placeholder="1"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="city"
                      class="mb-2 block text-sm font-medium text-gray-900"
                      >Discount</label
                    >
                    <input
                      id="country"
                      type="text"
                      name="country"
                      class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                      placeholder="25%"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="flex items-center">
                <button
                  class="mt-6 flex items-center rounded-lg border border-cyan-600 bg-white px-5 py-2.5 text-center text-sm font-medium text-cyan-600 hover:bg-cyan-700 hover:text-white focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
                  @click="numberOfItems++"
                >
                  Add New Item
                </button>
                <button
                  class="ml-4 mt-6 flex items-center rounded-lg border border-cyan-600 bg-white px-5 py-2.5 text-center text-sm font-medium text-cyan-600 hover:bg-cyan-700 hover:text-white focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
                  @click="numberOfItems > 0 && numberOfItems--"
                >
                  <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <button
            class="flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
            type="submit"
          >
            Create Invoice
          </button>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
const numberOfItems = ref<number>(1)
const formObj = reactive({})
</script>
