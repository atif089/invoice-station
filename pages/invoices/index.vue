<template>
  <NuxtLayout name="main">
    <div>
      <div class="mb-6 flex max-w-screen-2xl items-center justify-between">
        <h1 class="text-xl font-semibold text-gray-800 sm:text-2xl">
          Invoices
        </h1>
        <NuxtLink
          to="/invoices/create"
          class="mr-8 flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex md:mr-32"
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
          <table class="whitespace-no-wrap w-full">
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
              <tr class="text-gray-700">
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
                      <NuxtLink to="/invoices/43" class="font-semibold"
                        >Hans Burger</NuxtLink
                      >
                      <p class="text-xs text-gray-600">#94D47A</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$ 863.45</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700"
                  >
                    Approved
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">18/17/2022</td>
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
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">Jolina Angelie</p>
                      <p class="text-xs text-gray-600">#94D47A</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$ 369.95</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="rounded-full bg-orange-100 px-2 py-1 font-semibold leading-tight text-orange-700"
                  >
                    Pending
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">18/17/2022</td>
                <td class="px-4 py-3">
                  <div class="flex items-center space-x-4 text-sm">
                    <button
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
                        src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">Sarah Curry</p>
                      <p class="text-xs text-gray-600">#94D47A</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$ 86.00</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="rounded-full bg-red-100 px-2 py-1 font-semibold leading-tight text-red-700"
                  >
                    Denied
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">18/17/2022</td>
                <td class="px-4 py-3">
                  <div class="flex items-center space-x-4 text-sm">
                    <button
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
                        src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">Rulia Joberts</p>
                      <p class="text-xs text-gray-600">#94D47A</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$ 1276.45</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700"
                  >
                    Approved
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">18/17/2022</td>
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
                        src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">Wenzel Dashington</p>
                      <p class="text-xs text-gray-600">#94D47A</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$ 863.45</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="rounded-full bg-gray-100 px-2 py-1 font-semibold leading-tight text-gray-700"
                  >
                    Expired
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">18/17/2022</td>
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
                        src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8377ca9f985d80264279f277f3a67f5"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">Dave Li</p>
                      <p class="text-xs text-gray-600">#94D47A</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$ 863.45</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700"
                  >
                    Approved
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">18/17/2022</td>
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
                        src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">Maria Ramovic</p>
                      <p class="text-xs text-gray-600">#94D47A</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$ 863.45</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700"
                  >
                    Approved
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">18/17/2022</td>
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
                        src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">Hitney Wouston</p>
                      <p class="text-xs text-gray-600">#94D47A</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$ 863.45</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700"
                  >
                    Approved
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">18/17/2022</td>
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
                      <p class="font-semibold">Hans Burger</p>
                      <p class="text-xs text-gray-600">#94D47A</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$ 863.45</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700"
                  >
                    Approved
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">18/17/2022</td>
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
        <div
          class="grid border-t bg-gray-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:grid-cols-9"
        >
          <span class="col-span-3 flex items-center">
            Showing 21-30 of 100
          </span>
          <span class="col-span-2"></span>
          <!-- Pagination -->
          <span class="col-span-4 mt-2 flex sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul class="inline-flex items-center">
                <li>
                  <button
                    class="focus:shadow-outline-cyan rounded-md rounded-l-lg px-3 py-1 focus:outline-none"
                    aria-label="Previous"
                  >
                    <svg
                      class="h-4 w-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    class="focus:shadow-outline-cyan rounded-md px-3 py-1 focus:outline-none"
                  >
                    1
                  </button>
                </li>
                <li>
                  <button
                    class="focus:shadow-outline-cyan rounded-md px-3 py-1 focus:outline-none"
                  >
                    2
                  </button>
                </li>
                <li>
                  <button
                    class="focus:shadow-outline-cyan rounded-md border border-r-0 border-cyan-600 bg-cyan-600 px-3 py-1 text-white transition-colors duration-150 focus:outline-none"
                  >
                    3
                  </button>
                </li>
                <li>
                  <button
                    class="focus:shadow-outline-cyan rounded-md px-3 py-1 focus:outline-none"
                  >
                    4
                  </button>
                </li>
                <li>
                  <span class="px-3 py-1">...</span>
                </li>
                <li>
                  <button
                    class="focus:shadow-outline-cyan rounded-md px-3 py-1 focus:outline-none"
                  >
                    8
                  </button>
                </li>
                <li>
                  <button
                    class="focus:shadow-outline-cyan rounded-md px-3 py-1 focus:outline-none"
                  >
                    9
                  </button>
                </li>
                <li>
                  <button
                    class="focus:shadow-outline-cyan rounded-md rounded-r-lg px-3 py-1 focus:outline-none"
                    aria-label="Next"
                  >
                    <svg
                      class="h-4 w-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
