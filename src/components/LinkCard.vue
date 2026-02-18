<script setup>
const props = defineProps({
  title: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String, default: '' },
  icon: { type: String, default: 'flag' },
})

const icons = {
  flag: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" class="h-6 w-6 transition-transform duration-300 group-hover:rotate-6">
      <path d="M4 22V4" />
      <path d="M4 4h14l-1.5 4L18 12H4" />
    </svg>
  `,
  code: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      stroke-width="1.5" stroke="currentColor" class="h-6 w-6 transition-transform duration-300 group-hover:rotate-6">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M17.25 6.75L21 12l-3.75 5.25M6.75 17.25L3 12l3.75-5.25M14.25 6.75l-4.5 10.5" />
    </svg>
  `,
  briefcase: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      stroke-width="1.5" stroke="currentColor" class="h-6 w-6 transition-transform duration-300 group-hover:rotate-6">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M20.25 7.5H3.75A2.25 2.25 0 001.5 9.75v7.5A2.25 2.25 0 003.75 19.5h16.5A2.25 2.25 0 0022.5 17.25v-7.5A2.25 2.25 0 0020.25 7.5z" />
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M15.75 7.5V6.75A2.25 2.25 0 0013.5 4.5h-3A2.25 2.25 0 008.25 6.75V7.5" />
    </svg>
  `,
  cash: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      stroke-width="1.5" stroke="currentColor" class="h-6 w-6 transition-transform duration-300 group-hover:rotate-6">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M2.25 8.25h19.5m-19.5 0A2.25 2.25 0 004.5 6h15A2.25 2.25 0 0121.75 8.25m-19.5 0v9A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25v-9M6 15.75h.008v.008H6v-.008zm3 0h.008v.008H9v-.008z" />
    </svg>
  `,
}
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="relative group flex w-full items-center gap-4 rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-md shadow-gray-900/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/20 hover:border-green-600"
  >
    <!-- Icon Container -->
    <div
      class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-700 text-green-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white group-hover:shadow-xl group-hover:shadow-green-500/20"
    >
      <span v-html="icons[icon] || icons.flag"></span>
    </div>

    <!-- Text Content -->
    <div class="min-w-0 flex-1">
      <h3 class="font-display truncate font-semibold text-white">
        {{ title }}
      </h3>
      <p class="truncate text-sm text-gray-400">
        {{ description }}
      </p>
    </div>

    <!-- Hover Glow Effect -->
    <div
      class="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    ></div>
  </a>
</template>
