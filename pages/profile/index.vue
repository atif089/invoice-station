<template>
  <NuxtLayout name="main">
    <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-6">
      <div class="col-span-full mb-4 xl:mb-0">
        <h1 class="text-xl font-semibold text-gray-800 sm:text-2xl">
          Profile settings
        </h1>
      </div>

      <div class="col-span-full xl:col-auto">
        <div class="mb-6 rounded-2xl bg-white p-4 shadow-lg shadow-gray-200">
          <div
            class="items-center sm:flex sm:space-x-4 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4"
          >
            <img
              class="mb-4 h-28 w-28 rounded-lg shadow-lg shadow-gray-300 sm:mb-0 xl:mb-4 2xl:mb-0"
              src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/jese-leos-2x.png"
              alt="Jese picture"
            />
            <div>
              <h3 class="mb-1 text-2xl font-bold text-gray-900">
                Alec Thompson
              </h3>
              <div class="mb-4 text-base font-normal text-gray-500">
                CEO / Co-Founder
              </div>
              <a
                href="#"
                class="flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
              >
                <svg
                  class="mr-2 -ml-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
                  ></path>
                  <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                </svg>
                Change picture
              </a>
            </div>
          </div>
        </div>
        <div class="mb-6 rounded-2xl bg-white p-4 shadow-lg shadow-gray-200">
          <h3 class="mb-4 text-xl font-bold">Language &amp; Time</h3>
          <div class="mb-4">
            <label
              for="settings-language"
              class="mb-2 block text-sm font-medium text-gray-900"
              >Select language</label
            >
            <select
              id="settings-language"
              name="countries"
              class="block w-full rounded-lg border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
            >
              <option>English (US)</option>
              <option>Italiano</option>
              <option>Français (France)</option>
              <option>正體字</option>
              <option>Español (España)</option>
              <option>Deutsch</option>
              <option>Português (Brasil)</option>
            </select>
          </div>
          <div class="mb-6">
            <label
              for="settings-timezone"
              class="mb-2 block text-sm font-medium text-gray-900"
              >Time Zone</label
            >
            <select
              id="settings-timezone"
              name="countries"
              class="block w-full rounded-lg border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
            >
              <option>GMT+0 Greenwich Mean Time (GMT)</option>
              <option>GMT+1 Central European Time (CET)</option>
              <option>GMT+2 Eastern European Time (EET)</option>
              <option>GMT+3 Moscow Time (MSK)</option>
              <option>GMT+5 Pakistan Standard Time (PKT)</option>
              <option>GMT+8 China Standard Time (CST)</option>
              <option>GMT+10 Eastern Australia Standard Time (AEST)</option>
            </select>
          </div>
          <div>
            <button
              class="flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
            >
              Save all
            </button>
          </div>
        </div>
        <div class="mb-6 rounded-2xl bg-white p-4 shadow-lg shadow-gray-200">
          <div class="flow-root">
            <h3 class="text-xl font-bold">Social accounts</h3>
            <ul class="divide-y divide-gray-200">
              <li class="py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      ></path>
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <span
                      class="block truncate text-base font-semibold text-gray-900"
                    >
                      Facebook account
                    </span>
                    <a
                      href="#"
                      class="block truncate text-sm font-normal text-cyan-500 hover:underline"
                    >
                      www.facebook.com/themesberg
                    </a>
                  </div>
                  <div class="inline-flex items-center">
                    <a
                      href="#"
                      class="mr-3 mb-3 rounded-lg border border-gray-300 bg-white py-2 px-3 text-center text-sm font-medium text-gray-900 transition-transform hover:scale-[1.02] hover:bg-gray-100"
                      >Disconnect</a
                    >
                  </div>
                </div>
              </li>
              <li class="py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <span
                      class="block truncate text-base font-semibold text-gray-900"
                    >
                      Twitter account
                    </span>
                    <a
                      href="#"
                      class="block truncate text-sm font-normal text-cyan-500 hover:underline"
                    >
                      www.twitter.com/themesberg
                    </a>
                  </div>
                  <div class="inline-flex items-center">
                    <a
                      href="#"
                      class="mr-3 mb-3 rounded-lg border border-gray-300 bg-white py-2 px-3 text-center text-sm font-medium text-gray-900 transition-transform hover:scale-[1.02] hover:bg-gray-100"
                      >Disconnect</a
                    >
                  </div>
                </div>
              </li>
              <li class="py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="github"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      ></path>
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <span
                      class="block truncate text-base font-semibold text-gray-900"
                    >
                      Github account
                    </span>
                    <span
                      class="block truncate text-sm font-normal text-gray-500"
                    >
                      Not connected
                    </span>
                  </div>
                  <div class="inline-flex items-center">
                    <a
                      href="#"
                      class="flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
                      >Connect</a
                    >
                  </div>
                </div>
              </li>
              <li class="pt-4 pb-6">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="dribbble"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"
                      ></path>
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <span
                      class="block truncate text-base font-semibold text-gray-900"
                    >
                      Dribbble account
                    </span>
                    <span
                      class="block truncate text-sm font-normal text-gray-500"
                    >
                      Not connected
                    </span>
                  </div>
                  <div class="inline-flex items-center">
                    <a
                      href="#"
                      class="flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
                      >Connect</a
                    >
                  </div>
                </div>
              </li>
            </ul>
            <div>
              <button
                class="flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
              >
                Save all
              </button>
            </div>
          </div>
        </div>
        <div class="mb-6 rounded-2xl bg-white p-4 shadow-lg shadow-gray-200">
          <div class="flow-root">
            <h3 class="text-xl font-bold">Other accounts</h3>
            <ul class="mb-6 divide-y divide-gray-200">
              <li class="py-4">
                <div
                  class="align-center flex justify-between xl:block 2xl:flex 2xl:space-x-4"
                >
                  <div class="flex space-x-4 xl:mb-4 2xl:mb-0">
                    <div>
                      <img
                        class="h-6 w-6 rounded-full"
                        src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png"
                        alt="Bonnie image"
                      />
                    </div>
                    <div class="min-w-0 flex-1">
                      <p
                        class="mb-0.5 truncate text-base font-semibold leading-none text-gray-900"
                      >
                        Bonnie Green
                      </p>
                      <p
                        class="mb-1 truncate text-sm font-normal text-cyan-600"
                      >
                        New York, USA
                      </p>
                      <p class="text-xs font-medium text-gray-500">
                        Last seen: 1 min ago
                      </p>
                    </div>
                  </div>
                  <div
                    class="inline-flex w-auto items-center xl:w-full 2xl:w-auto"
                  >
                    <a
                      href="#"
                      class="w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200"
                      >Disconnect</a
                    >
                  </div>
                </div>
              </li>
              <li class="py-4">
                <div
                  class="align-center flex justify-between xl:block 2xl:flex 2xl:space-x-4"
                >
                  <div class="flex space-x-4 xl:mb-4 2xl:mb-0">
                    <div>
                      <img
                        class="h-6 w-6 rounded-full"
                        src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/jese-leos.png"
                        alt="Jese image"
                      />
                    </div>
                    <div class="min-w-0 flex-1">
                      <p
                        class="mb-0.5 truncate text-base font-semibold leading-none text-gray-900"
                      >
                        Jese Leos
                      </p>
                      <p
                        class="mb-1 truncate text-sm font-normal text-cyan-600"
                      >
                        California, USA
                      </p>
                      <p class="text-xs font-medium text-gray-500">
                        Last seen: 2 min ago
                      </p>
                    </div>
                  </div>
                  <div
                    class="inline-flex w-auto items-center xl:w-full 2xl:w-auto"
                  >
                    <a
                      href="#"
                      class="w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200"
                      >Disconnect</a
                    >
                  </div>
                </div>
              </li>
              <li class="py-4">
                <div
                  class="align-center flex justify-between xl:block 2xl:flex 2xl:space-x-4"
                >
                  <div class="flex space-x-4 xl:mb-4 2xl:mb-0">
                    <div>
                      <img
                        class="h-6 w-6 rounded-full"
                        src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/thomas-lean.png"
                        alt="Thomas image"
                      />
                    </div>
                    <div class="min-w-0 flex-1">
                      <p
                        class="mb-0.5 truncate text-base font-semibold leading-none text-gray-900"
                      >
                        Thomas Lean
                      </p>
                      <p
                        class="mb-1 truncate text-sm font-normal text-cyan-600"
                      >
                        Texas, USA
                      </p>
                      <p class="text-xs font-medium text-gray-500">
                        Last seen: 1 hour ago
                      </p>
                    </div>
                  </div>
                  <div
                    class="inline-flex w-auto items-center xl:w-full 2xl:w-auto"
                  >
                    <a
                      href="#"
                      class="w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200"
                      >Disconnect</a
                    >
                  </div>
                </div>
              </li>
              <li class="pt-4">
                <div
                  class="align-center flex justify-between xl:block 2xl:flex 2xl:space-x-4"
                >
                  <div class="flex space-x-4 xl:mb-4 2xl:mb-0">
                    <div>
                      <img
                        class="h-6 w-6 rounded-full"
                        src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/lana-byrd.png"
                        alt="Lana image"
                      />
                    </div>
                    <div class="min-w-0 flex-1">
                      <p
                        class="mb-0.5 truncate text-base font-semibold leading-none text-gray-900"
                      >
                        Lana Byrd
                      </p>
                      <p
                        class="mb-1 truncate text-sm font-normal text-cyan-600"
                      >
                        Texas, USA
                      </p>
                      <p class="text-xs font-medium text-gray-500">
                        Last seen: 1 hour ago
                      </p>
                    </div>
                  </div>
                  <div
                    class="inline-flex w-auto items-center xl:w-full 2xl:w-auto"
                  >
                    <a
                      href="#"
                      class="w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200"
                      >Disconnect</a
                    >
                  </div>
                </div>
              </li>
            </ul>
            <div>
              <button
                class="flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
              >
                Save all
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div class="mb-6 rounded-2xl bg-white p-4 shadow-lg shadow-gray-200">
          <h3 class="mb-4 text-xl font-bold text-gray-900">
            General Information
          </h3>
          <form action="#">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
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
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="last-name"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Last Name</label
                >
                <input
                  id="last-name"
                  type="text"
                  name="last-name"
                  class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder="Green"
                  required
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
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
              <div class="col-span-6 sm:col-span-3">
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
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="adress"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Adress</label
                >
                <input
                  id="adress"
                  type="text"
                  name="adress"
                  class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder="e.g. California"
                  required
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
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
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="phone-number"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Phone Number</label
                >
                <input
                  id="phone-number"
                  type="number"
                  name="phone-number"
                  class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder="e.g. +(12)3456 789"
                  required
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="birthday"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Birthday</label
                >
                <input
                  id="birthday"
                  type="number"
                  name="birthday"
                  class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder="15/08/1990"
                  required
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
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
              <div class="col-span-6 sm:col-span-3">
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
              <div class="col-span-6 sm:col-span-3">
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
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="zip-code"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Zip/postal code</label
                >
                <input
                  id="zip-code"
                  type="number"
                  name="zip-code"
                  class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder="123456"
                  required
                />
              </div>
              <div class="sm:col-full col-span-6">
                <button
                  class="flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
                  type="submit"
                >
                  Save all
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="mb-6 rounded-2xl bg-white p-4 shadow-lg shadow-gray-200">
          <h3 class="mb-4 text-xl font-bold">Password information</h3>
          <form action="#">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="current-password"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Current password</label
                >
                <input
                  id="current-password"
                  type="text"
                  name="current-password"
                  class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="new-password"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >New password</label
                >
                <input
                  id="new-password"
                  type="text"
                  name="new-password"
                  class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="confirm-password"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Confirm password</label
                >
                <input
                  id="confirm-password"
                  type="text"
                  name="confirm-password"
                  class="shadow-lg-sm block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div class="col-span-full">
                <div class="text-sm font-medium">Password requirements:</div>
                <div class="mb-1 text-sm font-normal text-gray-500">
                  Ensure that these requirements are met:
                </div>
                <ul class="space-y-1 pl-4 text-gray-500">
                  <li class="text-xs font-normal">
                    At least 10 characters (and up to 100 characters)
                  </li>
                  <li class="text-xs font-normal">
                    At least one lowercase character
                  </li>
                  <li class="text-xs font-normal">
                    Inclusion of at least one special character, e.g., ! @ # ?
                  </li>
                  <li class="text-xs font-normal">Some text here zoltan</li>
                </ul>
              </div>
              <div class="sm:col-full col-span-6">
                <button
                  class="flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
                  type="submit"
                >
                  Save all
                </button>
              </div>
            </div>
          </form>
        </div>
        <div
          class="mb-4 rounded-2xl bg-white p-4 shadow-lg shadow-gray-200 xl:mb-0"
        >
          <div class="flow-root">
            <h3 class="text-xl font-bold">Sessions</h3>
            <ul class="divide-y divide-gray-200">
              <li class="py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="truncate text-base font-semibold text-gray-900">
                      California 123.123.123.123
                    </p>
                    <p class="truncate text-sm font-normal text-gray-500">
                      Chrome on macOS
                    </p>
                  </div>
                  <div class="inline-flex items-center">
                    <a
                      href="#"
                      class="mr-3 mb-3 rounded-lg border border-gray-300 bg-white py-2 px-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200"
                      >Revoke</a
                    >
                  </div>
                </div>
              </li>
              <li class="pt-4 pb-6">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="truncate text-base font-semibold text-gray-900">
                      Rome 24.456.355.98
                    </p>
                    <p class="truncate text-sm font-normal text-gray-500">
                      Safari on iPhone
                    </p>
                  </div>
                  <div class="inline-flex items-center">
                    <a
                      href="#"
                      class="mr-3 mb-3 rounded-lg border border-gray-300 bg-white py-2 px-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200"
                      >Revoke</a
                    >
                  </div>
                </div>
              </li>
            </ul>
            <div>
              <button
                class="flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
              >
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
