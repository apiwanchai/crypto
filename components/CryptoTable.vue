<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <div class="p-4 flex flex-col md:flex-row justify-between items-center">
      <h2 class="text-xl font-bold text-[#2D4060]">Cryptocurrencies</h2>
      <div class="flex space-x-2 mt-2 md:mt-0">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="w-16 md:w-24 py-2.5 px-4 text-sm rounded-lg bg-white border border-pink-600 text-pink-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ‹
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="w-16 md:w-24 py-2.5 px-4 text-sm rounded-lg bg-white border border-pink-600 text-pink-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ›
        </button>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full table-auto min-w-[600px] mb-5">
        <thead>
          <tr class="text-title text-sm uppercase">
            <th class="px-4 py-2 text-center">NO</th>
            <th class="px-4 py-2 text-center">NAME</th>
            <th class="px-4 py-2 text-center">SYMBOL</th>
            <th class="px-4 py-2 text-right">SUPPLY/MAX SUPPLY</th>
            <th class="px-4 py-2 text-center">USD</th>
            <th class="px-4 py-2 text-center">24 HR</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr
            v-for="(crypto, index) in cryptocurrencies"
            :key="crypto.symbol"
            class="bg-white text-data hover:bg-gray-50 transition-colors duration-200"
          >
            <td class="px-4 py-4 text-center">{{ (currentPage - 1) * 5 + index + 1 }}.</td>
            <td class="px-4 py-4 text-center">{{ crypto.name }}</td>
            <td class="px-4 py-4 text-center">{{ crypto.symbol }}</td>
            <td class="px-4 py-4 text-right">
              {{ parseFloat(crypto.supply).toLocaleString() }} /
              {{
                crypto.maxSupply
                  ? parseFloat(crypto.maxSupply).toLocaleString()
                  : "No Limit"
              }}
            </td>
            <td class="px-4 py-4 text-data text-center">
              {{ parseFloat(crypto.priceUsd).toFixed(2) }}
            </td>
            <td class="px-4 py-4 text-center">
              <span
                :class="
                  parseFloat(crypto.changePercent24Hr) > 0
                    ? 'text-green-500'
                    : 'text-red-500'
                "
              >
                {{
                  parseFloat(crypto.changePercent24Hr).toFixed(2) > 0
                    ? "+" + parseFloat(crypto.changePercent24Hr).toFixed(2)
                    : parseFloat(crypto.changePercent24Hr).toFixed(2)
                }}%
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  cryptocurrencies: {
    type: Array,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  nextPage: {
    type: Function,
    required: true,
  },
  prevPage: {
    type: Function,
    required: true,
  },
});
</script>

<style scoped>
.text-data {
  color: #7a8ba8;
}
.text-title {
  color: #a2aec0;
}
</style>
