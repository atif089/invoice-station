<template>
  <div>
    <Navbar />
    <div class="flex overflow-hidden bg-white pt-16">
      <Sidebar />
      <div
        id="main-content"
        class="relative w-full overflow-y-auto bg-gray-50 lg:ml-64"
      >
        <main class="min-h-[70vh] p-2 md:p-5">
          <slot />
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const sidebarActive = ref<boolean>(false)

provide('sidebarActive', sidebarActive)

// const router = useRouter()

// router.beforeEach((to, from) => {
//   const conditionIsMet = false
//   if (to.path === '/original/path' && !conditionIsMet) {
//     return '/redirect/to/path'
//   }
// })
</script>

<style>
html {
  scroll-behavior: smooth;
  overflow: auto;
}
body {
  @apply bg-gray-50;
}
.links {
  color: #0694a2 !important;
}

.formkit-input {
  @apply block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-50 sm:text-sm;
  font-family: inherit;
}
.formkit-input[type='submit'] {
  width: max-content;
  @apply flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:inline-flex;
}
.formkit-label {
  @apply mb-2 block text-sm font-medium text-gray-900;
}
[data-message-type='validation'] {
  @apply ml-2 mt-2 text-sm text-red-700;
}
</style>
