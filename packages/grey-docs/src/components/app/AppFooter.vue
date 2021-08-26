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
      p-4
    "
  >
    <div>
      <NuxtLink
        to="/"
        class="flex-shrink-0 flex-1 font-bold text-xl"
        :aria-label="`Grey Software's Logo`"
      >
        <GreySoftwareLogoLight class="light-img" />
        <GreySoftwareLogoDark class="dark-img" />
      </NuxtLink>
      <p class="mt-2 lg:hidden text-sm text-black-600 dark:text-white">
        Made with Love, Joy, and Hope
      </p>
    </div>
    <div
      class="
        flex flex-wrap
        items-center
        lg:justify-center
        max-w-xs
        lg:max-w-none
      "
    >
      <ul class="xs:flex-col xs:pr-4 flex flex-wrap flex-row-reverse">
        <li v-for="link in links" :key="link.text" class="mb-2 ml-4 md:mb-0">
          <a
            class="text-sm text-gray-900 dark:text-gray-300 hover:text-gray-700"
            :href="link.href"
            target="_blank"
            >{{ link.text }}</a
          >
        </li>
      </ul>
    </div>
    <div class="hidden lg:flex justify-end">
      <p class="text-sm text-black-600 dark:text-white">
        Made with Love, Joy, and Hope!
      </p>
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
  data() {
    return {
      links: [
        { text: "Organization", href: "https://org.grey.software/" },
        { text: "Learn", href: "https://learn.grey.software/" },
        { text: "Resources", href: "https://resources.grey.software/" },
        { text: "Onboarding", href: "https://onboarding.grey.software/" },
        { text: "Glossary", href: "https://glossary.grey.software/" },
      ],
    };
  },
};
</script>
