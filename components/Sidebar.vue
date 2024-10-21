<template>
  <aside
    :class="{ block: isOpen, hidden: !isOpen, 'md:block': true }"
    class=" md:w-80 flex flex-col justify-between p-5 md:h-screen transition-transform duration-300"
  >
    <div class="p-6 border-b border-gray-200">
      <div class="flex items-center space-x-2">
        <img src="/assets/logo/logo.png" alt="Logo" class="h-8 w-8" />
        <h1 class="text-md font-bold text-gray-800">Komgrip Technologies</h1>
      </div>
    </div>

    <nav class="mt-6 p-3 flex-1">
      <ul class="space-y-2">
        <li>
          <a
            href="#"
            class="flex items-center p-3 bg-white rounded-lg shadow-md transition-all"
          >
            <div
              class="w-10 h-10 bg-pink-500 rounded-lg flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7h18M3 12h18M3 17h18"
                />
              </svg>
            </div>
            <span class="ml-4 text-[#2D4060] font-semibold">Dashboard</span>
          </a>
        </li>

        <li v-for="menu in menus" :key="menu.name">
          <a
            href="#"
            class="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-all"
          >
            <div
              class="w-10 h-10 bg-white shadow-md transition-all rounded-lg flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12h18m-6 6h6M3 6h6"
                />
              </svg>
            </div>
            <span class="ml-4 text-gray-400">{{ menu.name }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
const props = defineProps(["isOpen"]);

const menus = [{ name: "Menu 1" }, { name: "Menu 2" }, { name: "Menu 3" }];
</script>

<style scoped></style>
