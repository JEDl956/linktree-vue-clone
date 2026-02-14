<template>
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    class= "relative group flex w-full items-center gap-4 rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-md shadow-gray-900/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/20 hover:border-green-600"
  >
    <!-- Icon Container -->
    <div
  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-700 text-green-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white group-hover:shadow-xl group-hover:shadow-green-500/20 "
>

      <!-- Feather flag icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        class="h-6 w-6 trancsion-transform duration-300 group-hover:rotate-6"
      >
        <path d="M4 22V4" />
        <path d="M4 4h14l-1.5 4L18 12H4" />
      </svg>
    </div>

    <!-- Text Content -->
    <div class="min-w-0 flex-1">
  <h3 class="font-display truncate font-semibold text-white">Link Title</h3>
  <p class="troncate text-sm text-gray-400">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  </p>
</div>
<!--Hover Glow Effect-->
<div class="one absolute inset-0  rounder-xl bg-linear-to-r from-green-500/0 via-green-500/10 to-green-500/0 transition-opacity group-hover:opacity-100" />
  </a>
</template>
