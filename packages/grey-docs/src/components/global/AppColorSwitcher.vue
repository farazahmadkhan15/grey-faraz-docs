<template>
  <span class="inline-flex">
    <button
      class="rounded-md hover:text-primary-500 focus:outline-none transition ease-in-out duration-150"
      aria-label="Color Mode"
      @click="$colorMode.value === 'dark' ? $colorMode.preference = 'light' : $colorMode.preference = 'dark'"
    >
      <client-only>
        <IconLight v-if="$colorMode.value === 'light'" />
        <IconDark v-else />
     
      </client-only>
    </button>
  </span>
</template>
