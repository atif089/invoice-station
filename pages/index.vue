<template>
    <div class="flex items-center justify-center h-screen flex-col">
        <NuxtLink
            to="/"
            class="font-bold flex items-center text-gray-700 mb-6 text-4xl"
        >
            <img
                src="https://demo.themesberg.com/windster/images/logo.svg"
                class="h-6 mr-2"
                alt="Windster Logo"
            />
            <span
                class="self-center whitespace-nowrap font-serif tracking-widest"
                >Invoice<span class="links">Station </span></span
            >
        </NuxtLink>
        <h1 class="text-2xl mb-5 text-center">
            Galaxy's first cross planetary invoicing system
        </h1>
        <NuxtLink
            to="/auth/login"
            class="sm:inline-flex text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-xl px-8 py-2.5 text-center items-center"
        >
            Login
        </NuxtLink>
    </div>
</template>
<style>
body {
    @apply bg-gray-50;
}
.links {
    color: #0694a2 !important;
}
</style>
