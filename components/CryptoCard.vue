<template>
  <div
    class="bg-white p-5 rounded-xl shadow-lg hover: duration-200 flex justify-between items-center"
  >
    <div>
      <p class="text-gray-500 font-medium text-lg md:text-base">
        {{ crypto.name }}
      </p>
      <h3 class="text-2xl font-bold text-[#314667] py-1">
        ${{
          Number(crypto.priceUsd).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        }}
      </h3>
      <p
        :class="{
          'text-green-500': parseFloat(crypto.changePercent24Hr) > 0,
          'text-red-500': parseFloat(crypto.changePercent24Hr) < 0,
        }"
        class="text-lg md:text-base"
      >
        {{ parseFloat(crypto.changePercent24Hr).toFixed(2) }}%
      </p>
    </div>
    <div
      class="bg-gradient-to-tr from-pink-500 to-purple-500 p-3 rounded-lg flex items-center justify-center"
    >
      <img src="@/assets/logo/database.png" alt="Crypto Icon" class="w-8 h-8" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  crypto: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.bg-white {
  background-color: #ffffff;
}
</style>
