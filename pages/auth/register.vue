<template>
  <div
    class="pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 pt-8 md:h-screen"
  >
    <NuxtLink
      to="/"
      class="mb-6 flex items-center text-2xl font-bold text-gray-700 md:text-4xl lg:ml-2.5"
    >
      <img
        src="https://demo.themesberg.com/windster/images/logo.svg"
        class="mr-2 h-6"
        alt="Windster Logo"
      />
      <p class="self-center whitespace-nowrap font-serif tracking-widest">
        Invoice<span class="links">Station</span>
      </p>
    </NuxtLink>
    <!-- Card -->
    <div
      class="w-full rounded-lg bg-white shadow sm:max-w-screen-sm md:mt-0 xl:p-0"
    >
      <div class="space-y-8 p-6 sm:p-8 lg:p-16">
        <h2 class="text-2xl font-bold text-gray-900 lg:text-3xl">
          Create a Free Account
        </h2>
        <form class="mt-8 space-y-6" action="#">
          <div>
            <label
              for="email"
              class="mb-2 block text-sm font-medium text-gray-900"
              >Your email</label
            >
            <input
              id="email"
              type="email"
              name="email"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="mb-2 block text-sm font-medium text-gray-900"
              >Your password</label
            >
            <input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              for="confirm-password"
              class="mb-2 block text-sm font-medium text-gray-900"
              >Confirm password</label
            >
            <input
              id="confirm-password"
              type="password"
              name="confirm-password"
              placeholder="••••••••"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
              required
            />
          </div>
          <div class="flex items-start">
            <div class="flex h-5 items-center">
              <input
                id="remember"
                aria-describedby="remember"
                name="remember"
                type="checkbox"
                class="focus:ring-3 h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-cyan-200"
                required
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="remember" class="font-medium text-gray-900"
                >I accept the
                <a href="#" class="links text-teal-500 hover:underline"
                  >Terms and Conditions</a
                ></label
              >
            </div>
          </div>
          <button
            type="submit"
            class="w-full rounded-lg bg-cyan-600 px-5 py-3 text-center text-base font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:w-auto"
          >
            Create account
          </button>
          <div class="text-sm font-medium text-gray-500">
            Already have an account?
            <NuxtLink to="./login" class="links text-teal-500 hover:underline"
              >Login here</NuxtLink
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
