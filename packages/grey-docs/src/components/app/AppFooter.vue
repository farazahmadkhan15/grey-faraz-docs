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
    <section class="py-4">
      <div class="container px-2 mx-auto">
        <div class="flex flex-wrap justify-between items-center -mx-4">
          <div class="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
            <NuxtLink
              to="/"
              class="flex-shrink-0 flex-1 font-bold text-xl"
              :aria-label="`Grey Software's Logo`"
            >
              <GreySoftwareLogoLight class="light-img" />
              <GreySoftwareLogoDark class="dark-img" />
            </NuxtLink>
            <p class="hidden lg:block mt-3 text-sm text-gray-400">
              Made with Love, Joy, and Hope!
            </p>
          </div>
          <div
            class="
              w-full
              lg:w-1/2
              px-4
              flex flex-wrap
              items-center
              lg:justify-end
            "
          >
            <ul
              class="
                w-full
                lg:w-auto
                inline-flex
                flex-wrap
                mb-4
                lg:mb-0
                lg:mr-12
              "
            >
              <li class="mr-6 mb-2 md:mb-0">
                <a
                  class="
                    text-sm text-gray-900
                    dark:text-gray-300
                    hover:text-gray-700
                  "
                  href="https://learn.grey.software/"
                  target="_blank"
                  >Learn</a
                >
              </li>
              <li class="mr-6 mb-2 md:mb-0">
                <a
                  class="
                    text-sm text-gray-900
                    dark:text-gray-300
                    hover:text-gray-700
                  "
                  href="https://resources.grey.software/"
                  target="_blank"
                  >Resources</a
                >
              </li>
              <li class="mr-6 mb-2 md:mb-0">
                <a
                  class="
                    text-sm text-gray-900
                    dark:text-gray-300
                    hover:text-gray-700
                  "
                  href="https://onboarding.grey.software/"
                  target="_blank"
                  >Onboarding</a
                >
              </li>
              <li class="mb-2 md:mb-0">
                <a
                  class="
                    text-sm text-gray-900
                    dark:text-gray-300
                    hover:text-gray-700
                  "
                  href="https://org.grey.software/"
                  target="_blank"
                  >Organization</a
                >
              </li>
            </ul>
          </div>
        </div>
        <p class="mt-6 lg:hidden text-sm text-gray-400">
          Made with Love, Joy, and Hope
        </p>
      </div>
    </section>
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
