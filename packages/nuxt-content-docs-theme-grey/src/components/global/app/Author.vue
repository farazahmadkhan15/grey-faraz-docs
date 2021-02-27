<template>
  <div class="flex items-center justify-between rounded-md p-2">
    <div class="flex items-center">
      <img
        :alt="`${name}'s avatar`"
        class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
        :src="avatarUrl"
      />
      <div class="flex flex-col">
        <span class="prose text-gray-700 dark:text-gray-300">
          {{ name }}
        </span>
        <span class="prose text-gray-700 dark:text-gray-300">{{ desc }}</span>
      </div>
    </div>
    <div class="flex items-center space-x-4 mr-4">
      <a
        :href="`https://twitter.com/${twitter}`"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
        name="Twitter"
        class="inline-flex text-gray-700 dark:text-gray-300 hover:text-primary-500"
      >
        <IconTwitter class="w-5 h-5" />
      </a>
      <a
        :href="githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
        name="Github"
        class="inline-flex text-gray-700 dark:text-gray-300 hover:text-primary-500"
      >
        <IconGithub class="w-5 h-5" />
      </a>
      <a
        v-if="gitlabUrl"
        :href="gitlabUrl"
        target="_blank"
        rel="noopener noreferrer"
        title="Gitlab"
        name="Gitlab"
        class="inline-flex text-gray-700 dark:text-gray-300 hover:text-primary-500"
      >
        <IconGitlab class="w-5 h-5" />
      </a>
      <a
        v-if="linkedinUrl"
        :href="linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        title="Discord"
        name="Discord"
        class="inline-flex text-gray-700 dark:text-gray-300 hover:text-primary-500"
      >
        <IconLinkedin class="w-5 h-5" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    desc: String,
    linkedinUrl: String,
    githubUrl: String,
    gitlabUrl: String,
    twitter: String,
    avatarUrl: String,
  },
};
</script>