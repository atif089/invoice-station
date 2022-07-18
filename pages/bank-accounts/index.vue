<template>
    <NuxtLayout name="main">
        <div class="p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Bank Accounts</h3>
            <div class="w-full overflow-hidden rounded-lg shadow-xs">
                <div class="w-full overflow-x-auto">
                    <table class="w-full whitespace-no-wrap">
                        <thead>
                            <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50"
                            >
                                <th class="px-4 py-3">Bank Name</th>
                                <th class="px-4 py-3">Acc No</th>
                                <th class="px-4 py-3">Status</th>
                                <th class="px-4 py-3">IFSC Code</th>
                                <th class="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y">
                            <tr class="text-gray-700">
                                <td class="px-4 py-3">
                                    <div class="flex items-center text-sm">
                                        <!-- Avatar with inset shadow -->
                                        <div
                                            class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                        >
                                            <img
                                                class="object-cover w-full h-full rounded-full"
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
                                            <p class="font-semibold">
                                                Bank of America
                                            </p>
                                            <p class="text-xs text-gray-600">
                                                #94D47A
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    9170100000000319
                                </td>
                                <td class="px-4 py-3 text-xs">
                                    <span
                                        class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full"
                                    >
                                        Primary
                                    </span>
                                </td>
                                <td class="px-4 py-3 text-sm">CNRB0000278</td>
                                <td class="px-4 py-3">
                                    <div
                                        class="flex items-center space-x-4 text-sm"
                                    >
                                        <NuxtLink
                                            to="/invoices/43"
                                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-cyan-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                                            aria-label="Edit"
                                        >
                                            <svg
                                                class="w-5 h-5"
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
                                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-cyan-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                                            aria-label="Delete"
                                        >
                                            <svg
                                                class="w-5 h-5"
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
                                            class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                        >
                                            <img
                                                class="object-cover w-full h-full rounded-full"
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
                                            <p class="font-semibold">
                                                HSBC Bank
                                            </p>
                                            <p class="text-xs text-gray-600">
                                                #94D47A
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    9170100000000319
                                </td>
                                <td class="px-4 py-3 text-xs">
                                    <span
                                        class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full"
                                    >
                                        Secondary
                                    </span>
                                </td>
                                <td class="px-4 py-3 text-sm">CNRB0000278</td>
                                <td class="px-4 py-3">
                                    <div
                                        class="flex items-center space-x-4 text-sm"
                                    >
                                        <button
                                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-cyan-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                                            aria-label="Edit"
                                        >
                                            <svg
                                                class="w-5 h-5"
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
                                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-cyan-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                                            aria-label="Delete"
                                        >
                                            <svg
                                                class="w-5 h-5"
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
                                            class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                        >
                                            <img
                                                class="object-cover w-full h-full rounded-full"
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
                                            <p class="font-semibold">
                                                DBS Bank
                                            </p>
                                            <p class="text-xs text-gray-600">
                                                #94D47A
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    9170100000000319
                                </td>
                                <td class="px-4 py-3 text-xs">
                                    <span
                                        class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full"
                                    >
                                        Denied
                                    </span>
                                </td>
                                <td class="px-4 py-3 text-sm">CNRB0000278</td>
                                <td class="px-4 py-3">
                                    <div
                                        class="flex items-center space-x-4 text-sm"
                                    >
                                        <button
                                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-cyan-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                                            aria-label="Edit"
                                        >
                                            <svg
                                                class="w-5 h-5"
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
                                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-cyan-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                                            aria-label="Delete"
                                        >
                                            <svg
                                                class="w-5 h-5"
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
                                            class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                        >
                                            <img
                                                class="object-cover w-full h-full rounded-full"
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
                                            <p class="font-semibold">
                                                HDFC Bank
                                            </p>
                                            <p class="text-xs text-gray-600">
                                                #94D47A
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    9170100000000319
                                </td>
                                <td class="px-4 py-3 text-xs">
                                    <span
                                        class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full"
                                    >
                                        Primary
                                    </span>
                                </td>
                                <td class="px-4 py-3 text-sm">CNRB0000278</td>
                                <td class="px-4 py-3">
                                    <div
                                        class="flex items-center space-x-4 text-sm"
                                    >
                                        <button
                                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-cyan-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                                            aria-label="Edit"
                                        >
                                            <svg
                                                class="w-5 h-5"
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
                                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-cyan-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                                            aria-label="Delete"
                                        >
                                            <svg
                                                class="w-5 h-5"
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
