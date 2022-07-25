<template>
  <NuxtLayout name="main">
    <div>
      <div class="mb-6 flex items-center justify-between">
        <h1 class="text-xl font-semibold text-gray-800 sm:text-2xl">Wallets</h1>
        <NuxtLink
          to="/wallet/create"
          class="flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex md:mr-4 md:-translate-x-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            class="h-5 w-5 flex-shrink-0 text-white transition duration-75"
          >
            <path
              d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"
            />
            <path
              d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"
            />
          </svg>
          Create Wallet
        </NuxtLink>
      </div>

      <div class="shadow-xs w-full overflow-hidden rounded-lg">
        <div class="w-full overflow-x-auto">
          <table class="whitespace-no-wrap w-full">
            <thead>
              <tr
                class="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
              >
                <th class="px-4 py-3">Wallet</th>
                <th class="px-4 py-3">Defaults</th>
                <th class="px-4 py-3">Status</th>
                <th class="px-4 py-3">Type</th>
                <th class="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y bg-white">
              <tr
                v-for="wallet in allWallets"
                :key="wallet.id"
                class="text-gray-700"
              >
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <!-- Avatar with inset shadow -->
                    <div
                      class="relative mr-3 hidden h-8 w-8 rounded-full md:block"
                    >
                      <img
                        class="h-full w-full rounded-full object-cover"
                        src="~/assets/images/wallet.png"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <NuxtLink to="/invoices/43" class="font-semibold">{{
                        wallet.first_name || wallet.last_name || 'John Doe'
                      }}</NuxtLink>
                      <p class="text-xs text-gray-600">
                        {{ wallet.email || 'No email provided' }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">
                  {{ wallet.ewallet_reference_id || 'Secondary' }}
                </td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700"
                  >
                    {{ wallet.verification_status }}
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">{{ wallet.type }}</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useWalletStore } from '@/store/wallets/wallets'

const { fetchAllWallets, getAllWallets } = useWalletStore()
await fetchAllWallets()
const allWallets = getAllWallets
</script>
