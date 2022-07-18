<template>
    <div
        class="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0"
    >
        <NuxtLink
            to="/"
            class="font-bold flex items-center lg:ml-2.5 text-gray-700 mb-6 text-4xl"
        >
            <img
                src="https://demo.themesberg.com/windster/images/logo.svg"
                class="h-6 mr-2"
                alt="Windster Logo"
            />
            <span
                class="self-center whitespace-nowrap font-serif tracking-widest"
                >Pay<span class="links">Local</span></span
            >
        </NuxtLink>
        <!-- Card -->
        <div
            class="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0"
        >
            <div class="p-6 sm:p-8 lg:p-16 space-y-8">
                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900">
                    Create a Free Account
                </h2>
                <form class="mt-8 space-y-6" action="#">
                    <div>
                        <label
                            for="email"
                            class="text-sm font-medium text-gray-900 block mb-2"
                            >Your email</label
                        >
                        <input
                            type="email"
                            name="email"
                            id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            placeholder="name@company.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="password"
                            class="text-sm font-medium text-gray-900 block mb-2"
                            >Your password</label
                        >
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="confirm-password"
                            class="text-sm font-medium text-gray-900 block mb-2"
                            >Confirm password</label
                        >
                        <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            required
                        />
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input
                                id="remember"
                                aria-describedby="remember"
                                name="remember"
                                type="checkbox"
                                class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
                                required
                            />
                        </div>
                        <div class="text-sm ml-3">
                            <label
                                for="remember"
                                class="font-medium text-gray-900"
                                >I accept the
                                <a
                                    href="#"
                                    class="links text-teal-500 hover:underline"
                                    >Terms and Conditions</a
                                ></label
                            >
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
                    >
                        Create account
                    </button>
                    <div class="text-sm font-medium text-gray-500">
                        Already have an account?
                        <NuxtLink
                            to="./login"
                            class="links text-teal-500 hover:underline"
                            >Login here</NuxtLink
                        >
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
