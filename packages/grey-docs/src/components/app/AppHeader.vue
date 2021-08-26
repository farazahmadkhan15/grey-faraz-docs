<template>
  <nav
    class="
      fixed
      top-0
      z-40
      w-full
      border-b
      dark:border-gray-800
      bg-white
      dark:bg-black-500
      
    "
    :class="{ 'shadow border-transparent': scrolled }"
    @click="scrollToTop"
  >
    <div class="container mx-auto flex-1 px-4 lg:px-8">
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
          class="flex-1 flex justify-start p w-6/12"
        >
          <AppSearch class="hidden lg:block" />
        </div>
        <div
          class="lg:w-1/5 flex items-center pl-4 lg:pl-8"
          :class="{
            'justify-between': lastRelease && settings.layout !== 'single',
            'justify-end': !lastRelease || settings.layout === 'single'
          }"
        >
          <div class="flex items-center">
            <!-- Generating nav link from props -->
            <div v-for="(Navitem, index) in Navitems" :key="index" class="dropdown inline-block relative">
              <div class="flex items-center mr-10">
                <p
                  class=" dark:text-gray-300
                          hover:text-primary-300
                          dark-hover:text-primary-500
                        "
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  {{ Navitem.name }}
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
                class="absolute
                bg-white
                dropdown-menu
                hidden
                dark:bg-gray-900
                z-40
                right-2 drop z-40 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div>
                  <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                  <div v-for="(Dropitem, index) in Dropitems" :key="index" class="dd">
                    <div
                      class="flex justify-around items-center  hover:bg-gray-100 dark-hover:bg-gray-700 "
                    >
                      <nuxt-link
                        to="/apps"
                        class="dark:text-white  text-gray-700 block py-4 text-sm"
                      >
                        {{ Dropitem.name }}</nuxt-link
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

            <button
              class="bg-transparent mr-3 px-8 dark:text-white text-black py-1 border border-gray-600 dark:border-white rounded "
            >
              Social
            </button>
            <div class="flex items-center ml-2 -mr-20">
              <AppLangSwitcher />
              <AppColorSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Frame2",

  data() {
    return {
      Navitems: [
        {
          name: "Organization",
          link: "/"
        },

        {
          name: "Ecosystem",
          link: "/"
        },
        {
          name: "supporters",
          link: "/supporters"
        }
      ],
      Dropitems: [
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
          link: "/supporters"
        },
        {
          name: "Join our Discord",
          link: "/supporters"
        },
        {
          name: "Follow on LinkedIN",
          link: "/supporters"
        }
      ],
      scrolled: 0,
      isOpen: false,
      isOpenDrop: false
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
    },
    getHover() {
      this.isOpenDrop = !this.isOpenDrop;
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
    noop() {},
    toggleDrop() {
      this.isOpenDrop = !this.isOpenDrop;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isOpenDrop = false;
      }
    }
  },

  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  }
};
</script>

<style scoped>
.bg-drop {
  background: #2d2d2d !important;
}

/* logic for dropdown */
.dropdown:hover .dropdown-menu {
  display: block !important;
}

.drop {
  margin-top: 6px !important;
  width: 400px !important;
}

.dd {
  outline-color: tomato !important;
}

.dd:focus {
  outline: 0 !important;
}
</style>
