<template>
  <footer
    class="
      container
      mx-auto
      relative
      w-screen
      bg-white
      dark:bg-black-500
      z-20
      flex
      justify-between
      xs:items-start
      md:items-center
      px-4
      py-8
    "
  >
    <div>
      <NuxtLink to="/" class="flex-shrink-0 flex-1 font-bold text-xl" :aria-label="`Grey Software's Logo`">
        <h1 class="font-extrabold text-2xl  text-black-600 dark:text-white">FARAZ AHMAD KHAN</h1>
          
      </NuxtLink>
      <p class="mt-2 lg:hidden text-sm text-black-600 dark:text-white">Made with Love, Joy, and Hope</p>
    </div>
    <div class="hidden lg:flex justify-end">
      <p class="text-sm text-black-600 dark:text-white">Made with Love, Joy, and Hope!</p>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  data() {
    return {
    }
  },
}
</script>
