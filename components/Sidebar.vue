<template>
  <div>
    <aside
      id="sidebar"
      :class="[sidebarActive ? 'flex' : 'hidden']"
      class="fixed top-0 left-0 z-20 h-full w-64 flex-shrink-0 flex-col pt-16 transition-width duration-75 lg:flex"
      aria-label="Sidebar"
    >
      <div
        class="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white pt-0"
      >
        <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div class="flex-1 space-y-1 divide-y bg-white px-3">
            <ul class="space-y-2 pb-2">
              <li>
                <form action="#" method="GET" class="lg:hidden">
                  <label for="mobile-search" class="sr-only">Search</label>
                  <div class="relative">
                    <div
                      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                      <svg
                        class="h-5 w-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      id="mobile-search"
                      type="text"
                      name="email"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:ring-cyan-600"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </li>
              <li>
                <NuxtLink
                  to="/overview"
                  :class="{
                    'bg-gray-100': $route.fullPath === '/overview',
                  }"
                  class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <svg
                    :class="{
                      'text-gray-900': $route.fullPath === '/overview',
                    }"
                    class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path
                      d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                    ></path>
                  </svg>
                  <span class="ml-3">Dashboard</span>
                </NuxtLink>
              </li>
              <li>
                <a
                  target="_blank"
                  class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <svg
                    class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    ></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">Kanban</span>
                  <span
                    class="ml-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800"
                    >Pro</span
                  >
                </a>
              </li>
              <li>
                <NuxtLink
                  to="/wallet"
                  :class="{
                    'bg-gray-100': $route.fullPath === '/wallet',
                  }"
                  class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    :class="{
                      'text-gray-900': $route.fullPath === '/wallet',
                    }"
                    class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  >
                    <path
                      d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"
                    />
                    <path
                      d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"
                    />
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">Wallet</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/profile"
                  :class="{
                    'bg-gray-100': $route.fullPath === '/profile',
                  }"
                  class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <svg
                    :class="{
                      'text-gray-900': $route.fullPath === '/profile',
                    }"
                    class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">Profile</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/bank-accounts"
                  :class="{
                    'bg-gray-100': $route.fullPath === '/bank-accounts',
                  }"
                  class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <svg
                    :class="{
                      'text-gray-900': $route.fullPath === '/bank-accounts',
                    }"
                    class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                    ></path>
                    <path
                      d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                    ></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap"
                    >Bank Accounts</span
                  >
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/invoices"
                  :class="{
                    'bg-gray-100': /\/invoices(\/.)?/.test($route.fullPath),
                  }"
                  class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <svg
                    :class="{
                      'text-gray-900': /\/invoices(\/.)?/.test($route.fullPath),
                    }"
                    class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
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
                  <span class="ml-3 flex-1 whitespace-nowrap">Invoices </span>
                </NuxtLink>
              </li>

              <li>
                <button
                  class="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                  @click="logout() && $router.replace('/')"
                >
                  <svg
                    class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-3 w-full flex-1 whitespace-nowrap text-left"
                    >Log out</span
                  >
                </button>
              </li>
            </ul>
            <div class="space-y-2 pt-2">
              <a
                class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100"
              >
                <svg
                  class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="gem"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                  ></path>
                </svg>
                <span class="ml-4">Upgrade to Pro</span>
              </a>
              <a
                target="_blank"
                class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100"
              >
                <svg
                  class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
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
                <span class="ml-3">Documentation</span>
              </a>

              <a
                target="_blank"
                class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100"
              >
                <svg
                  class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="ml-3">Help</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <div
      id="sidebarBackdrop"
      :class="{ hidden: !sidebarActive }"
      class="fixed inset-0 z-10 bg-gray-900 opacity-50 lg:hidden"
      @click="sidebarActive = false"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const sidebarActive = inject('sidebarActive')

const logout = () => {
  if (confirm('Are you sure you want to logout ?')) return true
  return false
}
</script>
