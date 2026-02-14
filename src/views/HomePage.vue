<script setup>
import { ref } from 'vue'
//import LinkCard from '@/componets/Linkcard/vue'

const profile = ref({
  name: 'Jonathan E De Leon ',
  slogan: 'Computer Technician and student ',
  avatar: 'https://api.dicebear.com/9.x/avataaars/svg?topProbability=0',
})
</script>

<template>
  <main class="flex min-h-screen flex-col items-center px-4 py-8">
    <!-- Profile Header -->
    <div class="m-8 flex flex-col items-center text-center">
      <div
        class="mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-green-400 shadow-green-500/20 sm:w-32"
      >
        <img :src="profile.avatar" alt="avatar" />
      </div>

      <h1 class="mb-2 font-display text-2x1 font-bold text-white sm:text-3xl">{{ profile.name }}</h1>
      <p class= "max-w-xs text-gray-300sm:text-lg"> {{ profile.slogan }}</p>
    </div>
  </main>
</template>
