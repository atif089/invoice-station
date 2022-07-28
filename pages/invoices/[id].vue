<template>
  <NuxtLayout name="main">
    <div
      class="flex w-full max-w-screen-2xl items-center justify-start space-y-4 sm:space-x-4 sm:space-y-0"
    >
      <div
        class="ml-4 inline-block cursor-pointer text-cyan-600 hover:text-cyan-500"
        @click="goBack"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="mb-1 h-12 w-12"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </div>
      <div class="mx-auto flex flex-1 gap-4">
        <div class="ml-auto">
          <a
            href="#"
            class="flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
          >
            <svg
              class="mr-2 -ml-1 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Download Invoice
          </a>
        </div>
        <div class="mr-auto">
          <a
            href="#"
            class="transition-transformsm:w-auto inline-flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white py-2 px-3 text-center text-sm font-medium text-gray-900 hover:scale-[1.02] hover:bg-gray-100"
          >
            <svg
              class="mr-2 -ml-1 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Print
          </a>
        </div>
      </div>
    </div>

    <Transition name="fade" mode="out-in">
      <div>
        <div v-show="getInvoice?.loading">
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
        <div
          v-show="!getInvoice?.loading"
          class="mx-auto flex w-full flex-wrap items-start justify-center gap-4"
        >
          <div
            class="w-full max-w-[880px] flex-1 rounded-2xl bg-white p-4 shadow-xl shadow-gray-200 lg:my-6 2xl:col-span-8 2xl:col-start-3"
          >
            <div class="space-y-6 overflow-hidden p-4">
              <div class="sm:flex">
                <div class="mb-5 text-sm font-bold sm:mb-0 sm:text-lg">
                  Invoice #{{ invoice?.invoice_id }}
                </div>
                <div class="space-y-3 text-left sm:ml-auto sm:text-right">
                  <svg
                    class="h-10 w-10 sm:ml-auto"
                    viewBox="0 0 39 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38.1622 1.47093L22.6807 5.26078C22.5339 5.29495 22.3817 5.2995 22.2331 5.27414C22.0844 5.24879 21.9424 5.19404 21.8152 5.11312L14.4967 0.331871C14.3629 0.244902 14.2118 0.187926 14.0539 0.164864C13.896 0.141802 13.7349 0.153201 13.5819 0.198277L0.915185 3.92484C0.799036 3.95271 0.695356 4.01814 0.620271 4.11096C0.545186 4.20379 0.502904 4.3188 0.5 4.43812V12.0178L13.5819 8.17171C13.7349 8.12664 13.896 8.11524 14.0539 8.1383C14.2118 8.16136 14.3629 8.21834 14.4967 8.30531L21.8152 13.0795C21.941 13.1635 22.0831 13.2201 22.2322 13.2455C22.3814 13.271 22.5342 13.2647 22.6807 13.2272L38.5 9.36V1.72406C38.4982 1.65256 38.4684 1.5846 38.4172 1.53469C38.3659 1.48477 38.2971 1.45685 38.2256 1.45687L38.1622 1.47093Z"
                      fill="#FF7F66"
                    ></path>
                    <path
                      d="M28.8241 19.7311L22.6808 21.2077C22.5341 21.2435 22.3816 21.2488 22.2327 21.2234C22.0838 21.198 21.9417 21.1424 21.8152 21.06L14.4967 16.2788C14.4675 16.2581 14.4344 16.2437 14.3995 16.2364C14.3645 16.2291 14.3284 16.2291 14.2934 16.2364C14.2584 16.2436 14.2253 16.258 14.1961 16.2786C14.1669 16.2992 14.1423 16.3256 14.1237 16.3561C14.0913 16.3957 14.0739 16.4455 14.0745 16.4967V23.6897C14.0742 23.7776 14.096 23.8642 14.1378 23.9415C14.1796 24.0189 14.2401 24.0846 14.3137 24.1327L21.8152 29.0545C21.9422 29.1358 22.0846 29.1901 22.2334 29.2143C22.3823 29.2385 22.5345 29.232 22.6808 29.1952L29.176 27.6413C30.2256 27.388 31.1601 26.7905 31.8298 25.9441C32.4995 25.0977 32.8659 24.0515 32.8704 22.9725V22.8248C32.8574 21.9645 32.5034 21.1445 31.8859 20.5447C31.2685 19.9449 30.4381 19.6144 29.5771 19.6256C29.323 19.6331 29.0705 19.6685 28.8241 19.7311Z"
                      fill="#FF7F66"
                    ></path>
                    <path
                      d="M28.8241 35.678L22.6808 37.1545C22.5339 37.1887 22.3817 37.1933 22.2331 37.1679C22.0845 37.1426 21.9424 37.0878 21.8152 37.0069L14.4967 32.2256C14.4676 32.2057 14.4349 32.1916 14.4004 32.1844C14.3658 32.1771 14.3302 32.1767 14.2956 32.1832C14.2609 32.1898 14.2279 32.2031 14.1984 32.2224C14.1689 32.2418 14.1435 32.2668 14.1237 32.296C14.0917 32.3386 14.0745 32.3904 14.0745 32.4436V39.6366C14.0742 39.7245 14.096 39.8111 14.1378 39.8884C14.1796 39.9658 14.24 40.0315 14.3137 40.0795L21.8152 45.0014C21.941 45.0854 22.0831 45.142 22.2322 45.1674C22.3814 45.1929 22.5342 45.1866 22.6808 45.1491L29.1759 43.5881C30.2268 43.3372 31.1626 42.7402 31.8328 41.8934C32.5029 41.0465 32.8684 39.999 32.8704 38.9194V38.7717C32.8574 37.9114 32.5034 37.0914 31.8859 36.4916C31.2685 35.8918 30.4381 35.5612 29.5771 35.5725C29.3227 35.5766 29.0698 35.612 28.8241 35.678Z"
                      fill="#FF7F66"
                    ></path>
                    <path
                      opacity="0.32"
                      d="M22.2163 29.1881V21.2498C22.3695 21.2815 22.5276 21.2815 22.6808 21.2498L25.3267 20.5467L26.8748 28.1405L22.6526 29.167C22.5103 29.205 22.3616 29.2122 22.2163 29.1881ZM28.423 35.7483L22.6808 37.1545C22.5276 37.1862 22.3695 37.1862 22.2163 37.1545V45.1561C22.3695 45.1877 22.5276 45.1877 22.6808 45.1561L29.9711 43.3702L28.423 35.7483ZM22.2163 13.2483C22.3695 13.2799 22.5276 13.2799 22.6808 13.2483L23.7856 12.9811L22.2163 5.27484V13.2483Z"
                      fill="#111928"
                    ></path>
                    <g opacity="0.16">
                      <path
                        opacity="0.16"
                        d="M14.0745 8.1436C14.2237 8.17206 14.3667 8.22682 14.4967 8.30532L21.8152 13.0866C21.936 13.1668 22.0729 13.2196 22.2163 13.2413V5.26782C22.0729 5.24617 21.936 5.19337 21.8152 5.11314L14.4967 0.331885C14.3667 0.253384 14.2237 0.198624 14.0745 0.170166V8.1436Z"
                        fill="#111928"
                      ></path>
                      <path
                        opacity="0.16"
                        d="M22.2163 37.1686C22.0738 37.14 21.9377 37.0851 21.8152 37.0069L14.4967 32.2256C14.436 32.1856 14.3619 32.1713 14.2907 32.1858C14.2194 32.2003 14.1569 32.2424 14.1167 32.303C14.089 32.3447 14.0743 32.3936 14.0745 32.4436V39.6366C14.0742 39.7245 14.096 39.8111 14.1378 39.8884C14.1796 39.9658 14.24 40.0315 14.3137 40.0795L21.8152 45.0014C21.9387 45.0763 22.0745 45.1287 22.2163 45.1561V37.1686Z"
                        fill="#111928"
                      ></path>
                      <path
                        opacity="0.16"
                        d="M14.4967 16.2788C14.436 16.2388 14.3619 16.2244 14.2907 16.2389C14.2194 16.2534 14.1569 16.2956 14.1167 16.3561C14.089 16.3978 14.0743 16.4467 14.0745 16.4968V23.6897C14.0742 23.7776 14.096 23.8642 14.1378 23.9416C14.1796 24.0189 14.24 24.0846 14.3137 24.1327L21.8152 29.0546C21.9376 29.1317 22.0738 29.1843 22.2163 29.2093V21.2499C22.0725 21.2257 21.9356 21.1705 21.8152 21.0882L14.4967 16.2788Z"
                        fill="#111928"
                      ></path>
                    </g>
                  </svg>
                  <div class="space-y-1 capitalize">
                    <div class="text-lg font-semibold capitalize text-gray-900">
                      {{ invoice?.invoice_data?.freelancer?.last_name }}
                      {{ invoice?.invoice_data?.freelancer?.first_name }}
                    </div>
                    <address class="text-base font-normal text-gray-500">
                      {{ invoice?.invoice_data?.freelancer?.address }} <br />
                      {{ invoice?.invoice_data?.freelancer?.city }},
                      {{ invoice?.invoice_data?.freelancer?.country }}
                    </address>
                  </div>
                  <div class="text-md font-semibold text-gray-700">
                    {{ invoice?.invoice_data?.invoice_date }}
                  </div>
                </div>
              </div>
              <div>
                <h1 class="text-center text-lg font-semibold text-gray-900">
                  VIBAN Account No:
                  {{ invoice?.iban }} <br />
                  Issuing Id:
                  {{ invoice?.issuing_id }} <br />
                </h1>
              </div>
              <div class="capitalize sm:w-72">
                <div class="mb-4 text-base font-bold uppercase text-gray-900">
                  Bill to
                </div>
                <div class="text-lg font-semibold text-gray-900">
                  {{ invoice?.invoice_data?.client_name }}
                </div>
                <address class="text-base font-normal text-gray-500">
                  {{ invoice?.invoice_data?.street_address }} <br />
                  {{ invoice?.invoice_data?.city }},
                  {{ invoice?.invoice_data?.country }}
                </address>
              </div>

              <div class="my-8 flex flex-col">
                <div class="overflow-x-auto border-b border-gray-200">
                  <div class="inline-block min-w-full align-middle">
                    <div class="overflow-hidden shadow-lg">
                      <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50 text-gray-900">
                          <tr>
                            <th
                              scope="col"
                              class="p-4 text-left text-xs font-semibold uppercase tracking-wider"
                            >
                              Item
                            </th>
                            <th
                              scope="col"
                              class="p-4 text-left text-xs font-semibold uppercase tracking-wider"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              class="p-4 text-left text-xs font-semibold uppercase tracking-wider"
                            >
                              Qty
                            </th>
                            <th
                              scope="col"
                              class="p-4 text-left text-xs font-semibold uppercase tracking-wider"
                            >
                              Off
                            </th>
                            <th
                              scope="col"
                              class="p-4 text-left text-xs font-semibold uppercase tracking-wider"
                            >
                              Total
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white text-gray-900">
                          <tr
                            v-for="(item, index) in invoice?.invoice_data
                              ?.items"
                            :key="index"
                          >
                            <td
                              class="whitespace-nowrap p-4 text-sm font-normal"
                            >
                              <div class="text-base font-semibold capitalize">
                                {{ item?.name }}
                              </div>
                              <div
                                class="text-sm font-normal capitalize text-gray-500"
                              >
                                {{ item?.description }}
                              </div>
                            </td>
                            <td
                              class="whitespace-nowrap p-4 text-base font-normal text-gray-500"
                            >
                              €{{ item?.cost?.price }}
                            </td>
                            <td
                              class="whitespace-nowrap p-4 text-base font-semibold text-gray-900"
                            >
                              {{ item?.cost?.quantity }}
                            </td>
                            <td
                              class="whitespace-nowrap p-4 text-base font-normal"
                            >
                              {{ item?.cost?.discount }}%
                            </td>
                            <td
                              class="whitespace-nowrap p-4 text-base font-semibold"
                            >
                              €{{ item?.cost?.total }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-3 sm:ml-auto sm:w-72 sm:text-right">
                <div class="flex justify-between">
                  <div class="text-sm font-medium uppercase text-gray-500">
                    Subtotal
                  </div>
                  <div class="text-base font-medium text-gray-900">
                    €{{ invoice?.invoice_data?.cost?.subTotal }}
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="text-sm font-medium uppercase text-gray-500">
                    Tax rate
                  </div>
                  <div class="text-base font-medium text-gray-900">5%</div>
                </div>
                <div class="flex justify-between">
                  <div class="text-sm font-medium uppercase text-gray-500">
                    Discount
                  </div>
                  <div class="text-base font-medium text-gray-900">
                    €{{ invoice?.invoice_data?.cost?.discounts }}
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="text-base font-semibold uppercase text-gray-900">
                    Total
                  </div>
                  <div class="text-base font-bold text-gray-900">
                    €{{ invoice?.invoice_data?.cost?.grandTotal }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="
              getInvoice.transactionsPending === false &&
              transactions.length > 0
            "
            class="w-full flex-1 rounded-lg bg-white p-4 shadow sm:p-6 lg:my-6 xl:w-auto xl:p-8"
          >
            <div class="mb-4 flex items-center justify-between">
              <div>
                <h3 class="mb-2 text-xl font-bold text-gray-900">
                  Transactions
                </h3>
                <span class="text-base font-normal text-gray-500"
                  >List of transactions for this wallet</span
                >
              </div>
              <div class="flex-shrink-0">
                <a
                  href="#"
                  class="rounded-lg p-2 text-sm font-medium text-cyan-600 hover:bg-gray-100"
                  >View all</a
                >
              </div>
            </div>

            <div class="mt-8 flex flex-col">
              <div class="overflow-x-auto rounded-lg">
                <div class="inline-block min-w-full align-middle">
                  <div class="overflow-hidden shadow sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            class="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 xl:w-[470px]"
                          >
                            Transaction
                          </th>
                          <th
                            scope="col"
                            class="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            Date &amp; Time
                          </th>
                          <th
                            scope="col"
                            class="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white">
                        <tr
                          v-for="(transaction, index) in transactions"
                          :Key="transaction?.id"
                          :class="{ 'bg-gray-50': index % 2 === 0 }"
                          class="h-[80px] cursor-pointer transition-all"
                        >
                          <td
                            class="rounded-left group whitespace-nowrap rounded-lg p-4 text-sm font-normal text-gray-900"
                          >
                            <p class="">
                              Payment Deposited to
                              <span class="font-semibold">{{
                                transaction.data.bank_account.beneficiary_name
                              }}</span>
                            </p>

                            <div class="hidden group-hover:block">
                              Transaction Id:
                              <span class="font-semibold">{{
                                transaction.data.issuing_transaction_id
                              }}</span>
                            </div>
                          </td>
                          <td
                            class="whitespace-nowrap p-4 text-sm font-normal text-gray-500"
                          >
                            {{
                              new Date(
                                transaction.created_at * 1000
                              ).toLocaleString()
                            }}
                          </td>
                          <td
                            class="whitespace-nowrap p-4 text-sm font-semibold text-gray-900"
                          >
                            €{{ transaction.amount }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useSingleInvoiceStore } from '@/store/invoices/invoice'
const { getInvoice, getById } = useSingleInvoiceStore()
const route = useRoute()
const invoiceId: string | any = route?.params?.id
getById(invoiceId)

const invoice = computed(() => getInvoice?.singleInvoice)

const transactions = computed(() => getInvoice.transactions.transactions)

console.log(transactions)
const router = useRouter()
const goBack = () => router.back()
</script>
