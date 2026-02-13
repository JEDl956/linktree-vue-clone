<script setup>
import { ref } from 'vue'
import LinkCard from '@/componets/Linkcard/vue'

</script>

const profile = ref({
  name: 'Jonathan E De Leon ',
  slogan: 'Compute Technician and student ',
  avatar: '',
})

<template>
  <main class="flex min-h-screen flex-col items-center px-4 py-8">
    <div>
      <img src="" alt="" />
      <h1>Jonathan E De Leon</h1>
      <p>Slogan</p>
    </div>
  </main>
</template>
