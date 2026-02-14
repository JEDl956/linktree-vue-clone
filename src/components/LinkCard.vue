<template>
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    class="flex w-full items-center gap-4 rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-md shadow-gray-900/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/20 hover:border-green-600"
  >
    <!-- Icon Container -->
    <div
      class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-700 text-green-400 transition-all duration-300 hover:bg-green-500 hover:text-white"
    >
      <!-- Feather flag icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6"
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
  </a>
</template>
