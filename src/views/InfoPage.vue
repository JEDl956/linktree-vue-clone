<script setup>
import { ref } from 'vue'

const bio = ref({
  name: 'Jonathan E De Leon',
  avatar: 'https://api.dicebear.com/9.x/identicon/svg?seed=JonathanDeLeon',
  about:
    "Computer Support Specialist in training with hands-on experience troubleshooting hardware, software, and network issues. Strong background in Windows environments, user support, and problem resolution.",
  skills: [
    'Hardware troubleshooting',
    'PC and laptop repair',
    'Windows installation and configuration',
    'macOS support',
    'Linux basics',
    'Network troubleshooting',
    'TCP/IP',
    'DNS',
    'DHCP',
    'Active Directory',
    'User account management',
    'Software installation and updates',
    'Driver installation',
    'Virus and malware removal',
    'System imaging and deployment',
    'Backup and recovery',
    'Printer and peripheral setup',
    'Remote support',
  ],
  email: 'jdele218@stu.southtexascollege.edu',
  location: 'Laredo, TX',
})
</script>

<template>
  <main class="flex min-h-screen flex-col items-center px-4 py-8 sm:py-12">
    <RouterLink
      to="/"
      class="my-8 self-start text-sm text-gray-400 underline-offset-4 transition-colors duration-200 hover:underline hover:text-green-400"
    >
      ← Back to Links
    </RouterLink>

    <!-- Profile Card -->
    <div
      class="w-full max-w-lg rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-xl shadow-gray-900/50 sm:p-8"
    >
      <!-- Header -->
      <div class="mb-6 flex flex-col items-center text-center sm:flex-row sm:text-left">
        <div
          class="mb-4 h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-green-400 sm:mb-0 sm:mr-6"
        >
          <img
            :src="bio.avatar"
            :alt="bio.name"
            class="h-full w-full object-cover"
          />
        </div>

        <div>
          <h1 class="font-display mb-1 text-2xl font-bold text-white">
            {{ bio.name }}
          </h1>

          <p class="text-sm text-gray-400">
            📍 {{ bio.location }}
          </p>
        </div>
      </div>

      <!-- About -->
      <div class="mb-6">
        <h2 class="mb-3 text-lg font-semibold text-white">About</h2>
        <p class="leading-relaxed text-gray-300">
          {{ bio.about }}
        </p>
      </div>

      <!-- Skills -->
      <div class="mb-6">
        <h2 class="mb-3 text-lg font-semibold text-white">Skills</h2>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in bio.skills"
            :key="skill"
            class="rounded-full bg-green-950 px-3 py-1 text-sm text-green-300"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Contact -->
      <div>
        <h2 class="mb-3 text-lg font-semibold text-white">Get in touch</h2>

        <a
          :href="`mailto:${bio.email}`"
          class="group inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-medium text-white shadow-lg shadow-green-500/30 transition-all duration-200 hover:scale-[1.02] hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/40 active:scale-95"
        >
          <!-- Envelope Icon (Heroicons style) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-5 w-5 transition-transform duration-200 group-hover:rotate-12"
          >
            <path
              d="M1.5 8.67v8.58A2.25 2.25 0 003.75 19.5h16.5A2.25 2.25 0 0022.5 17.25V8.67l-9.576 5.744a1.5 1.5 0 01-1.548 0L1.5 8.67z"
            />
            <path
              d="M22.5 6.908V6.75A2.25 2.25 0 0020.25 4.5H3.75A2.25 2.25 0 001.5 6.75v.158l10.125 6.075L22.5 6.908z"
            />
          </svg>

          Send Email
        </a>

        <p class="mt-3 text-sm text-gray-400">
          {{ bio.email }}
        </p>
      </div>
    </div>
  </main>
</template>
