<template>
  <NuxtLayout name="main">
    <div>
      <h1 class="text-xl font-semibold text-gray-800 sm:text-2xl">
        Bank Accounts
      </h1>
      <div class="shadow-xs w-full overflow-hidden rounded-lg">
        <div class="w-full overflow-x-auto">
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
                        class="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                        ></path>
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
