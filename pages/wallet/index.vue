<template>
  <NuxtLayout name="main">
    <div
      class="mx-auto mb-6 flex max-w-screen-2xl items-center justify-between"
    >
      <h1 class="text-xl font-semibold text-gray-800 sm:text-2xl">Wallets</h1>
      <NuxtLink
        to="/wallet/create"
        class="flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex 2xl:mr-20"
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
    <Transition name="fade" mode="out-in">
      <div
        v-if="getAllWallets.loading"
        class="flex min-h-[70vh] items-center justify-center"
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
      <div v-else class="shadow-xs w-full overflow-hidden rounded-lg">
        <div class="w-full overflow-x-auto">
          <table class="whitespace-no-wrap mx-auto w-full max-w-screen-2xl">
            <thead>
              <tr
                class="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
              >
                <th class="px-4 py-3">Wallet</th>
                <th class="px-4 py-3">Defaults</th>
                <th class="px-4 py-3">Status</th>
                <th class="px-4 py-3">Type</th>
              </tr>
            </thead>
            <tbody class="divide-y bg-white">
              <tr
                v-for="wallet in getAllWallets.walletList.data"
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
                    class="rounded-full bg-amber-100 px-2 py-1 font-semibold leading-tight text-amber-700"
                    :class="{
                      'bg-green-100 text-green-700':
                        wallet.verification_status === 'verified',
                    }"
                  >
                    {{ wallet.verification_status }}
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">{{ wallet.type }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Transition>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useWalletStore } from '@/store/wallets'

const { getAllWallets, fetchAllWallets } = useWalletStore()
fetchAllWallets()
</script>
