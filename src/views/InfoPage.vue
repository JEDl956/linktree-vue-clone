<script setup>
import { ref } from 'vue'

const bio = ref({
  name: "Jonathan E De Leon",
  avatar: "https://api.dicebear.com/9.x/identicon/svg?seed=Jonathan",
  about:
    "Computer Support Specialist in training with hands-on experience troubleshooting hardware, software, and network issues. Strong background in Windows environments, user support, and problem resolution.",
  skills: [
    "Hardware troubleshooting",
    "PC and laptop repair",
    "Windows installation and configuration",
    "macOS support",
    "Linux basics",
    "Network troubleshooting",
    "TCP/IP",
    "DNS",
    "DHCP",
    "Active Directory",
    "User account management",
    "Software installation and updates",
    "Driver installation",
    "Virus and malware removal",
    "System imaging and deployment",
    "Backup and recovery",
    "Printer and peripheral setup",
    "Remote support",
  ],
  email: "jdele218@stu.southtexascollege.edu",
  location: "Laredo, TX",
})
</script>

<template>
  <main class="flex min-h-screen flex-col items-center px-4 py-8 sm:py-12">
    <RouterLink
      to="/"
      class="my-8 self-start text-sm text-gray-400 underline-offset-4 transition-colors duration-200 hover:underline hover:text-green-400"
    >
      ← back to link1
    </RouterLink>

    <!-- Profile Card -->
    <div
      class="w-full max-w-lg rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-gray-900/50 sm:p-8"
    >
      <!-- Header -->
      <div class="mb-6 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <img
          :src="bio.avatar"
          :alt="bio.name"
          class="h-20 w-20 rounded-full border-2 border-green-400 bg-slate-900 object-cover"
        />

        <div>
          <h1 class="text-2xl font-bold text-white">{{ bio.name }}</h1>
          <p class="text-sm text-gray-300">{{ bio.location }}</p>
          <p class="mt-2 text-gray-200">{{ bio.about }}</p>
        </div>
      </div>

      <!-- Skills -->
      <h2 class="mb-3 text-sm font-semibold text-gray-200">Skills</h2>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="skill in bio.skills"
          :key="skill"
          class="rounded-full border border-gray-600 bg-gray-900 px-3 py-1 text-xs text-gray-200"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </main>
</template>
