<template>
  <div class="flex w-2/3 bg-white font-sans dark:bg-gray-800 px-6 py-2 mb-8 rounded-xl shadow-xl ">
    <div class="flex-auto px-2">
      <div class="flex flex-wrap items-center">
        <p
          class="flex-auto text-3xl font-semibold text-gray-700 dark:text-white"
        >
        {{ name }}
        
        </p>
        <div class="text-xs text-gray-500 text-gray-500 dark:text-gray-500">
          {{ amount }}
        </div>
        <div
          class="
            w-full
            flex-none
            -mt-6
            font-extralight
            text-sm text-grey-700
            dark:text-gray-300
          "
        >
        {{ sponsorSince }}
          
        </div>
      </div>
      <div class="flex py-2 items-center">
        <span class="relative pr-1">
          <IconGithub class="h-4 w-4" />
        </span>
        <a :href="githubUrl" class="text-md text-black dark:text-white">Github</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    amount: String,
    sponsorSince: String,
    githubUrl: String,
  },
};
</script>

<style>
</style>