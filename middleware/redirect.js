export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/') {
    return navigateTo('/auth/login')
  }
})
