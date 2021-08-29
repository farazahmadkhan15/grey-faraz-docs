<template>
  <a
    :href="link"
    class="
      transition-all
      focus:outline-none
      dark:text-white
      text-md
      py-3
      px-5
      w-32
      rounded-md
      border border-black-300
      hover:border-black-800
      dark:border-gray-400
      dark-hover:border-gray-50
    "
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: String,
    link: String,
  },
}
</script>
