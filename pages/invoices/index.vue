<template>
  <NuxtLayout name="main">
    <div class="ml-0 2xl:ml-20">
      <div class="mb-6 flex max-w-screen-2xl items-center justify-between">
        <h1 class="text-xl font-semibold text-gray-800 sm:text-2xl">
          Invoices
        </h1>
        <NuxtLink
          to="/invoices/create"
          class="flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex md:mr-12"
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
          Create Invoice
        </NuxtLink>
      </div>

      <div class="shadow-xs w-full overflow-hidden rounded-lg">
        <div class="w-full overflow-x-auto">
          <Transition name="fade" mode="out-in">
            <div>
              <div v-show="getAllInvoices?.loading">
                <div
                  class="flex min-h-[50vh] items-center justify-center"
                  role="status"
                >
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
              <div v-show="!getAllInvoices?.loading">
                <table class="whitespace-no-wrap w-full max-w-screen-2xl">
                  <thead>
                    <tr
                      class="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
                    >
                      <th class="px-4 py-3">Client</th>
                      <th class="px-4 py-3">Amount</th>
                      <th class="px-4 py-3">Status</th>
                      <th class="px-4 py-3">Date</th>
                      <th class="px-4 py-3">Actions</th>
                    </tr>
                  </thead>

                  <tbody class="divide-y bg-white">
                    <tr
                      v-for="invoice in orderedInvoices"
                      :key="invoice?.invoice_id"
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
                              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <NuxtLink
                              :to="`/invoices/${invoice?.invoice_id}`"
                              class="font-semibold capitalize hover:text-cyan-600"
                              >{{ invoice?.invoice_data?.client_name }}
                              <p
                                class="text-xs text-gray-600 hover:text-cyan-600"
                              >
                                {{ invoice?.invoice_id }}
                              </p>
                            </NuxtLink>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        ${{
                          (
                            +invoice?.invoice_data?.cost?.grandTotal || 1000
                          ).toFixed(2)
                        }}
                      </td>
                      <td class="px-4 py-3 text-xs">
                        <span
                          class="rounded-full bg-gray-300 px-2 py-1 font-semibold leading-tight text-gray-700"
                          :class="
                            invoice?.invoice_status === 'paid'
                              ? 'bg-green-200 text-green-700'
                              : 'bg-amber-200 text-amber-700'
                          "
                        >
                          {{ invoice?.invoice_status }}
                        </span>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        {{ invoice?.invoice_data?.invoice_date }}
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex items-center space-x-4 text-sm">
                          <NuxtLink
                            :to="`/invoices/${invoice?.invoice_id}`"
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
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useInvoiceStore } from '@/store/invoices'
const { getAllInvoices, fetchInvoices } = useInvoiceStore()
fetchInvoices()
const orderedInvoices = computed(() => {
  if (!getAllInvoices.invoiceList?.invoices) return []
  return getAllInvoices.invoiceList?.invoices.sort(
    (a: any, b: any) => b.created_at?.seconds - a.created_at?.seconds
  )
})
</script>
