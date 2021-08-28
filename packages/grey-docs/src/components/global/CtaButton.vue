<template>
  <a
    :href="link"
    class="
      transition-all
      focus:outline-none
      text-black-500
      dark:text-white
      text-md
      py-2
      px-5
      w-32
      rounded-md
      border border-black-800
      dark:border-white
      hover:text-white
      hover:bg-black-500
      dark-hover:text-black-500 dark-hover:bg-gray-50
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
};
</script>

