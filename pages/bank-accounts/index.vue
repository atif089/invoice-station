<template>
  <NuxtLayout name="main">
    <div>
      <div class="mb-6 flex items-center justify-between">
        <h1 class="text-xl font-semibold text-gray-800 sm:text-2xl">
          Virtual IBAN Accounts
        </h1>
        <NuxtLink
          to="/invoices/create"
          class="flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex md:mr-4 md:-translate-x-full"
        >
          <svg
            class="h-5 w-5 flex-shrink-0 text-white transition duration-75"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path
              fill-rule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Create New Account
        </NuxtLink>
      </div>
      <div class="shadow-xs w-full overflow-hidden rounded-lg">
        <div class="w-full overflow-x-auto">
          <label
            for="default"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
            >Default select</label
          >
          <select
            id="default"
            class="shadow-lg-sm block w-full max-w-sm rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
          >
            <option selected>Choose a wallet</option>
            <option
              v-for="wallet in allWallets"
              :key="wallet.id"
              :value="wallet.id"
            >
              {{ wallet.id }}
            </option>
          </select>
          <table class="whitespace-no-wrap w-full">
            <thead>
              <tr
                class="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
              >
                <th class="px-4 py-3">Bank Name</th>
                <th class="px-4 py-3">Acc No</th>
                <th class="px-4 py-3">Status</th>
                <th class="px-4 py-3">IFSC Code</th>
                <th class="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y bg-white">
              <tr class="text-gray-700">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <!-- Avatar with inset shadow -->
                    <div
                      class="relative mr-3 hidden h-8 w-8 rounded-full md:block"
                    >
                      <img
                        class="h-full w-full rounded-full object-cover"
                        src="assets/images/bank.png"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">Bank of America</p>
                      <p class="text-xs text-gray-600">#94D47A</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">9170100000000319</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700"
                  >
                    Primary
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">CNRB0000278</td>
                <td class="px-4 py-3">
                  <div class="flex items-center space-x-4 text-sm">
                    <NuxtLink
                      to="/invoices/43"
                      class="focus:shadow-outline-gray flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium leading-5 text-cyan-600 focus:outline-none"
                      aria-label="Edit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </NuxtLink>
                    <button
                      class="focus:shadow-outline-gray flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium leading-5 text-cyan-600 focus:outline-none"
                      aria-label="Delete"
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
                </td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <!-- Avatar with inset shadow -->
                    <div
                      class="relative mr-3 hidden h-8 w-8 rounded-full md:block"
                    >
                      <img
                        class="h-full w-full rounded-full object-cover"
                        src="assets/images/bank.png"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">HSBC Bank</p>
                      <p class="text-xs text-gray-600">#94D47A</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">9170100000000319</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="rounded-full bg-orange-100 px-2 py-1 font-semibold leading-tight text-orange-700"
                  >
                    Secondary
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">CNRB0000278</td>
                <td class="px-4 py-3">
                  <div class="flex items-center space-x-4 text-sm">
                    <button
                      class="focus:shadow-outline-gray flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium leading-5 text-cyan-600 focus:outline-none"
                      aria-label="Edit"
                    >
                      <svg
                        class="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      class="focus:shadow-outline-gray flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium leading-5 text-cyan-600 focus:outline-none"
                      aria-label="Delete"
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
                </td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <!-- Avatar with inset shadow -->
                    <div
                      class="relative mr-3 hidden h-8 w-8 rounded-full md:block"
                    >
                      <img
                        class="h-full w-full rounded-full object-cover"
                        src="assets/images/bank.png"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">DBS Bank</p>
                      <p class="text-xs text-gray-600">#94D47A</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">9170100000000319</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="rounded-full bg-red-100 px-2 py-1 font-semibold leading-tight text-red-700"
                  >
                    Denied
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">CNRB0000278</td>
                <td class="px-4 py-3">
                  <div class="flex items-center space-x-4 text-sm">
                    <button
                      class="focus:shadow-outline-gray flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium leading-5 text-cyan-600 focus:outline-none"
                      aria-label="Edit"
                    >
                      <svg
                        class="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      class="focus:shadow-outline-gray flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium leading-5 text-cyan-600 focus:outline-none"
                      aria-label="Delete"
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
                </td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <!-- Avatar with inset shadow -->
                    <div
                      class="relative mr-3 hidden h-8 w-8 rounded-full md:block"
                    >
                      <img
                        class="h-full w-full rounded-full object-cover"
                        src="assets/images/bank.png"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">HDFC Bank</p>
                      <p class="text-xs text-gray-600">#94D47A</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">9170100000000319</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700"
                  >
                    Primary
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">CNRB0000278</td>
                <td class="px-4 py-3">
                  <div class="flex items-center space-x-4 text-sm">
                    <button
                      class="focus:shadow-outline-gray flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium leading-5 text-cyan-600 focus:outline-none"
                      aria-label="Edit"
                    >
                      <svg
                        class="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      class="focus:shadow-outline-gray flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium leading-5 text-cyan-600 focus:outline-none"
                      aria-label="Delete"
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useWalletStore } from '@/store/wallets/wallets'

const { getAllWallets } = useWalletStore()
const allWallets = getAllWallets
console.log(allWallets)
</script>
