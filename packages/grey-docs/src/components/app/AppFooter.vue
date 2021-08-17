<template>
  <footer
    class="
      h-16
      relative
      w-full
      border-t
      dark:border-gray-800
      bg-white
      dark:bg-black-500
      z-20
    "
  >
    <div
      class="
        h-full
        w-full
        container
        mx-auto
        px-4
        lg:px-8
        flex
        items-center
        justify-between
      "
    >
      <a
        href="https://grey.software"
        target="_blank"
        rel="noopener"
        class="flex items-center"
      >
        <span class="prose text-gray-700 dark:text-gray-300"
          >Built with Love, Joy, and Hope</span
        >
      </a>
      <div class="flex items-center space-x-4">
        <AppLangSwitcher />
        <AppColorSwitcher />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>
