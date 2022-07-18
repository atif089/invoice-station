<template>
  <div class="flex h-screen flex-col items-center justify-center">
    <NuxtLink
      to="/"
      class="mb-6 flex items-center text-4xl font-bold text-gray-700"
    >
      <img
        src="https://demo.themesberg.com/windster/images/logo.svg"
        class="mr-2 h-6"
        alt="Windster Logo"
      />
      <span class="self-center whitespace-nowrap font-serif tracking-widest"
        >Invoice<span class="links">Station </span></span
      >
    </NuxtLink>
    <h1 class="mb-5 text-center text-2xl">
      Galaxy's first cross planetary invoicing system
    </h1>
    <NuxtLink
      to="/auth/login"
      class="items-center rounded-lg bg-cyan-600 px-8 py-2.5 text-center text-xl font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex"
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
