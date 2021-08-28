<template>
  <nav
    class="fixed top-0 z-40 w-full py-3 bg-white dark:bg-black-500"
    :class="{ 'shadow border-transparent': scrolled }"
    @click="scrollToTop"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="lg:w-1/5 flex items-center pr-4" @click.stop="noop">
          <NuxtLink
            :to="localePath('/')"
            class="flex-shrink-0 flex-1 font-bold text-xl"
            :aria-label="`${settings.title} Logo`"
          >
            <GreySoftwareLogoLight class="light-img" />
            <GreySoftwareLogoDark class="dark-img" />
          </NuxtLink>
        </div>
        <div
          v-if="settings.layout !== 'single'"
          class="flex-1 flex justify-start mr-20 w-6/12"
        >
          <AppSearch class="hidden lg:block" />
        </div>
        <div
          class="hidden lg:w-1/5 lg:flex items-center pl-4 lg:pl-8"
          :class="{
            'justify-between': lastRelease && settings.layout !== 'single',
            'justify-end': !lastRelease || settings.layout === 'single',
          }"
        >
          <div class="flex items-center">
            <!-- Generating nav link from props -->
            <div
              v-for="(navItem, index) in navItems"
              :key="index"
              class="cursor-pointer dropdown inline-block relative"
            >
              <div class="flex items-center mr-8">
                <p
                  class="
                    dark:text-gray-300
                    hover:text-primary-300
                    dark-hover:text-primary-500
                  "
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  {{ navItem.name }}
                </p>
                <icon-chevron-down class="h-5 w-5" />
              </div>

              <!-- below code is for dropdown with custom class dropdown-menu -->
              <div
                class="
                  absolute
                  bg-white
                  dropdown-menu
                  hidden
                  dark:bg-altblack-500
                  z-40
                  right-2
                  w-96
                  rounded
                  shadow-lg
                "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div v-if="navItem.name == 'Socials'">
                  <div
                    v-for="(socialLink, index) in socialLinks"
                    :key="index"
                    class="flex justify-center flex-col items-center px-9"
                  >
                    <a
                      class="
                        flex
                        justify-between
                        items-center
                        w-80
                        h-14
                        transition-all
                        hover:w-96
                        hover:px-8
                        border-r-0 border-l-0 border-t-0
                        hover:bg-gray-100
                        dark-hover:bg-black-600
                        border
                        dark:border-altwhite-900
                      "
                      :href="socialLink.link"
                      target="blank"
                    >
                      <div
                        class="dark:text-white text-gray-700 block py-4 text-sm"
                      >
                        {{ socialLink.name }}
                      </div>
                      <icon-chevron-right
                        class="h-5 w-5 text-gray-700 dark:text-white"
                      />
                    </a>
                  </div>
                </div>

                <div v-else>
                  <div
                    v-for="(ecosystemLink, index) in ecosystemLinks"
                    :key="index"
                    class="flex justify-center flex-col items-center px-9"
                  >
                    <a
                      class="
                        flex
                        justify-between
                        items-center
                        w-80
                        h-14
                        transition-all
                        hover:w-96
                        hover:px-8
                        border-r-0 border-l-0 border-t-0
                        hover:bg-gray-100
                        dark-hover:bg-black-600
                        border
                        dark:border-altwhite-900
                      "
                      :href="ecosystemLink.link"
                      target="blank"
                    >
                      <div
                        class="dark:text-white text-gray-700 block py-4 text-sm"
                      >
                        {{ ecosystemLink.name }}
                      </div>
                      <icon-chevron-right
                        class="h-5 w-5 text-gray-700 dark:text-white"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center mr-8">
              <nuxt-link
                to="/credits"
                class="
                  dark:text-gray-300
                  hover:text-primary-300
                  dark-hover:text-primary-500
                "
              >
                Credits
              </nuxt-link>
            </div>

            <!-- <button class="dark:border-white w-28 h-11 ml-6 rounded-md btn-cta">
              <a href="">Support us</a>
            </button> -->
            <cta-button
              link="https://github.com/sponsors/grey-software"
              text="Support Us"
            />

            <div class="flex items-center ml-12">
              <AppLangSwitcher />
              <AppColorSwitcher />
            </div>
          </div>
        </div>
        <button
          v-if="settings.layout !== 'single'"
          class="
            lg:hidden
            p-2
            rounded-md
            text-gray-700
            dark:text-gray-300
            focus:outline-none
            -mr-2
          "
          aria-label="Menu"
          @click.stop="menu = !menu"
        >
          <IconX v-if="menu" class="w-5 h-5" />
          <IconMenu v-else class="w-5 h-5" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import CtaButton from "../global/CtaButton.vue";
import IconChevronRight from "../global/IconChevronRight.vue";

export default {
  components: { IconChevronRight, CtaButton },
  data() {
    return {
      navItems: [
        {
          name: "Ecosystem",
        },
        {
          name: "Socials",
        },
      ],

      socialLinks: [
        {
          name: "Follow on Twitter",
          link: "https://twitter.com/grey_software",
        },
        {
          name: "Visit GitHub",
          link: "https://github.com/grey-software",
        },
        {
          name: "Check GitLab",
          link: "https://gitlab.com/grey-software",
        },
        {
          name: "Join our Discord",
          link: "https://discord.com/invite/2CGKQEe9xw",
        },
        {
          name: "Follow on LinkedIn",
          link: "https://www.linkedin.com/company/grey-software/",
        },
      ],

      ecosystemLinks: [
        {
          name: "Learn",
          link: "https://learn.grey.software/",
        },
        {
          name: "Resources",
          link: "https://resources.grey.software/",
        },
        {
          name: "Onboarding",
          link: "https://onboarding.grey.software/",
        },
        {
          name: "Organization",
          link: "https://org.grey.software/",
        },
        {
          name: "Glossary",
          link: "https://glossary.grey.software/",
        },
      ],
      scrolled: 0,
      isOpen: false,
    };
  },
  computed: {
    ...mapGetters(["settings", "githubUrls", "lastRelease"]),
    menu: {
      get() {
        return this.$store.state.menu.open;
      },
      set(val) {
        this.$store.commit("menu/toggle", val);
      },
    },
    logo() {
      if (!this.settings.logo) {
        return;
      }

      if (typeof this.settings.logo === "object") {
        return this.settings.logo;
      }

      return {
        light: this.settings.logo,
        dark: this.settings.logo,
      };
    },
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    scrollToTop() {
      if (window.innerWidth >= 1280) {
        return;
      }
      window.scrollTo(0, 0);
    },
    noop() {},
  },
};
</script>
