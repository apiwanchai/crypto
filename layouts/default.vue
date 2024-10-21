<template>
  <div class="min-h-screen bg-gray-100 flex flex-col md:flex-row">
    <div class=" md:hidden p-4">
      <button
        @click="isOpen = !isOpen"
        class="flex items-center justify-center w-10 h-10 bg-pink-500 rounded-lg text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>

    <Sidebar :isOpen="isOpen" />

    <main class="flex-1 overflow-y-auto">
      <NuxtPage></NuxtPage>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "~/components/Sidebar.vue";

const isOpen = ref(false);
</script>

<style scoped></style>
