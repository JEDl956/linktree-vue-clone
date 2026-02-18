<script setup>
import { ref } from 'vue'
import LinkCard from '@/components/LinkCard.vue'

const profile = ref({
  name: 'Jonathan E De Leon',
  slogan: 'Computer Support Specialist in Training',
  avatar: 'https://api.dicebear.com/9.x/identicon/svg?seed=JonathanDeLeon',

  links: [
    {
      id: 1,
      title: 'GitHub',
      url: 'https://github.com/JEDl956',
      icon: 'code',
      description: 'Check out my projects on GitHub.',
    },
    {
      id: 2,
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/jonathan-de-leon-774040332',
      icon: 'briefcase',
      description: 'Connect with me professionally.',
    },
    {
      id: 3,
      title: 'Expense Splitter',
      url: 'https://week2-paymnetdirect.jedl956.workers.dev/',
      icon: 'cash',
      description: 'My Expense Splitter project from class.',
    },
  ],
})
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center
           bg-linear-to-b from-slate-950 via-slate-900 to-slate-950
           px-4 py-8"
  >
    <!-- Profile Header -->
    <div class="mt-8 mb-8 flex flex-col items-center text-center">
      <div
        class="mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-green-400 shadow-xl shadow-green-500/20 sm:h-32 sm:w-32"
      >
        <img
          :src="profile.avatar"
          :alt="profile.name"
          class="h-full w-full object-cover"
        />
      </div>

      <h1 class="mb-2 font-display text-2xl font-bold text-white sm:text-3xl">
        {{ profile.name }}
      </h1>

      <p class="max-w-xs text-gray-300 sm:text-lg">
        {{ profile.slogan }}
      </p>
    </div>

    <!-- Link List -->
    <div class="w-full max-w-md">
      <div class="flex w-full flex-col gap-4">
        <LinkCard
          v-for="link in profile.links"
          :key="link.id"
          :title="link.title"
          :url="link.url"
          :description="link.description"
          :icon="link.icon"
        />
      </div>
    </div>

    <!-- About -->
    <RouterLink
      to="/info"
      class="mt-8 text-sm text-gray-400 underline-offset-4 transition-colors duration-200 hover:underline hover:text-green-400"
    >
      About me →
    </RouterLink>
  </main>
</template>
