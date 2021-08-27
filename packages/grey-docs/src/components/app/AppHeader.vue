<template>
  <nav
    class="
      fixed
      top-0
      z-40
      w-full
      py-3
      border-b
      dark:border-gray-800
      bg-white
      dark:bg-black-500
    "
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
            'justify-end': !lastRelease || settings.layout === 'single'
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
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
                  rounded-lg
                  shadow-lg
                  border border-black-900
                "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div>
                  <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                  <div
                    v-for="(dropItem, index) in dropItems"
                    :key="index"
                    class="flex justify-center flex-col items-center px-9"
                  >
                    <div
                      class="
                        flex
                        justify-between
                        items-center
                        w-80
                        h-14
                        hover:w-96
                        hover:px-8
                        border-r-0
                        border-l-0
                        border-t-0
                        hover:bg-gray-100
                        hover:border-black-900
                        hover:border-r
                        hover:border-l
                        hover:border-b-0
                        dark-hover:border-r-0
                        dark-hover:border-l-0
                        dark-hover:bg-black-600
                        border dark:border-altblacks-900"
                    >
                      <nuxt-link
                        to="/apps"
                        class="dark:text-white text-gray-700 block py-4 text-sm"
                      >
                        {{ dropItem.name }}</nuxt-link
                      >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-700 dark:text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center mr-8">
              <p
                class="
                  dark:text-gray-300
                  hover:text-primary-300
                  dark-hover:text-primary-500
                "
              >
                Credits
              </p>
            </div>

            <button
              class=" dark:border-white w-28 h-11 ml-6 rounded-md btn-custom "
            >
              Support us
            </button>
            <div class="flex items-center ml-12 ">
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

export default {
  data() {
    return {
      navItems: [
        {
          name: "Ecosystem",
          link: "/"
        },

        {
          name: "Socials",
          link: "/"
        }
      ],

      dropItems: [
        {
          name: "Follow on twitter",
          link: "/"
        },
        {
          name: "Visit GitHub",
          link: "/"
        },
        {
          name: "Check GitLab",
          link: "/"
        },
        {
          name: "Join our Discord",
          link: "/"
        },
        {
          name: "Follow on LinkedIn",
          link: "/"
        }
      ],
      scrolled: 0,
      isOpen: false
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
      }
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
        dark: this.settings.logo
      };
    }
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
    noop() {}
  }
};
</script>
