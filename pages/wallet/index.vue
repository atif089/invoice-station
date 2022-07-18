<template>
  <NuxtLayout name="main">
    <div class="mb-6 grid grid-cols-1 xl:grid-cols-2 xl:gap-6">
      <div class="col-span-full mb-4 xl:mb-0">
        <h1 class="text-xl font-semibold text-gray-800 sm:text-2xl">
          Wallet Details
        </h1>
      </div>
      <div
        class="mb-4 rounded-2xl bg-white p-4 shadow-lg shadow-gray-200 xl:mb-0"
      >
        <a href="" class="mb-6 flex items-center text-2xl font-bold">
          <img
            src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/logo.svg"
            class="mr-4 h-10"
            alt="Creative Tim Logo"
          />
          <span>Invoice Station Subscription</span>
        </a>
        <p class="mb-2 text-base font-normal text-gray-500">
          Switch your subscription to a different type, such as a monthly plan,
          annual plan, or student plan. And see a list of subscription plans
          that Invoice Station offers.
        </p>
        <p class="text-sm font-semibold text-gray-900">
          Next payment of $36 (yearly) occurs on August 13, 2020.
        </p>
        <div class="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-3">
          <div>
            <a
              href="#"
              class="flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
            >
              <svg
                class="mr-2 -ml-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Change Plan
            </a>
          </div>
          <div>
            <a
              href="#"
              class="inline-flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 transition-transform hover:bg-gray-100 sm:w-auto"
            >
              Cancel Subscription
            </a>
          </div>
        </div>
      </div>
      <div class="rounded-2xl bg-white p-4 shadow-lg shadow-gray-200">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="text-xl font-bold text-gray-900">Wallet History</h3>
          <div class="flex-shrink-0">
            <a
              class="rounded-2xl p-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
              href="#"
              >View all</a
            >
          </div>
        </div>

        <div class="flex flex-col">
          <div class="overflow-x-auto rounded-2xl">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden shadow-lg sm:rounded-2xl">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
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
                      <th
                        scope="col"
                        class="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        class="whitespace-nowrap p-4 text-sm font-normal text-gray-900"
                      >
                        Payment from
                        <span class="font-semibold">Mika William</span>
                      </td>
                      <td
                        class="whitespace-nowrap p-4 text-sm font-normal text-gray-500"
                      >
                        Apr 23 ,2021
                      </td>
                      <td
                        class="whitespace-nowrap p-4 text-sm font-semibold text-gray-900"
                      >
                        $2300
                      </td>
                      <td class="whitespace-nowrap p-4">
                        <span
                          class="mr-2 rounded-md bg-gradient-to-br from-green-500 to-green-700 px-2.5 py-1 text-xs font-bold uppercase text-white"
                          >Approved</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="whitespace-nowrap p-4 text-sm font-normal text-gray-900"
                      >
                        Payment refund to
                        <span class="font-semibold">#00910</span>
                      </td>
                      <td
                        class="whitespace-nowrap p-4 text-sm font-normal text-gray-500"
                      >
                        Apr 23 ,2021
                      </td>
                      <td
                        class="whitespace-nowrap p-4 text-sm font-semibold text-gray-900"
                      >
                        -$670
                      </td>
                      <td class="whitespace-nowrap p-4">
                        <span
                          class="mr-2 rounded-md bg-gradient-to-br from-green-500 to-green-700 px-2.5 py-1 text-xs font-bold uppercase text-white"
                          >Approved</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="whitespace-nowrap p-4 pb-0 text-sm font-normal text-gray-900"
                      >
                        Payment failed from
                        <span class="font-semibold">#087651</span>
                      </td>
                      <td
                        class="whitespace-nowrap p-4 pb-0 text-sm font-normal text-gray-500"
                      >
                        Apr 18 ,2021
                      </td>
                      <td
                        class="whitespace-nowrap p-4 pb-0 text-sm font-semibold text-gray-900"
                      >
                        $234
                      </td>
                      <td class="whitespace-nowrap p-4 pb-0">
                        <span
                          class="mr-2 rounded-md bg-gradient-to-br from-red-400 to-red-600 px-2.5 py-1 text-xs font-bold uppercase text-white"
                          >Cancelled</span
                        >
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
                  type="email"
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
        <h3 class="mb-4 text-xl font-bold">Card Details</h3>
        <form action="#">
          <div class="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                for="full-name"
                class="mb-2 block text-sm font-medium text-gray-900"
                >(Full name as displayed on card)*</label
              >
              <input
                id="full-name"
                type="text"
                name="full-name"
                class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                for="last-name"
                class="mb-2 block text-sm font-medium text-gray-900"
                >Card Number *</label
              >
              <input
                id="last-name"
                type="number"
                name="last-name"
                class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                required
              />
            </div>
            <div>
              <label
                for="cvc"
                class="mb-2 block text-sm font-medium text-gray-900"
                >CVC *</label
              >
              <input
                id="cvc"
                type="number"
                name="cvc"
                class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                placeholder="•••"
                required
              />
            </div>
            <div>
              <label
                for="zip-code"
                class="mb-2 block text-sm font-medium text-gray-900"
                >Postal / ZIP code (optional)</label
              >
              <input
                id="zip-code"
                type="text"
                name="zip-code"
                class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                placeholder="e.g. 12345"
                required
              />
            </div>
          </div>
          <button
            class="flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>
