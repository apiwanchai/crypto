<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <div class="flex-1 p-4 sm:p-6">
      <nav aria-label="Breadcrumb" class="mb-4">
        <ol class="flex items-center space-x-2 overflow-x-auto">
          <li class="inline-flex items-center">
            <NuxtLink class="flex items-center text-sm dark:text-neutral-200">
              Pages
            </NuxtLink>
            <svg
              class="shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                stroke-linecap="round"
              ></path>
            </svg>
          </li>
          <li
            class="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
            aria-current="page"
          >
            Dashboard
          </li>
        </ol>
      </nav>

      <div
        class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 space-y-2 sm:space-y-0"
      >
        <div>
          <h2 class="text-xl text-[#2D4060] sm:text-2xl font-bold">
            Dashboard
          </h2>
        </div>
        <div class="flex gap-2">
          <img src="@/assets/logo/user.png" alt="Crypto Icon" class="w-5 h-5" />
          <p class="text-gray-600 text-sm sm:text-base">Phanuwit Hongsin</p>
        </div>
      </div>

      <div
        v-if="loadingCards || loadingTable"
        class="flex flex-col items-center py-10"
      >
        <div class="loader mb-4"></div>
        <p class="text-gray-500">Loading data...</p>
      </div>

      <div v-else>
        <div class="grid grid-cols-1 xl:grid-cols-4 gap-5 mb-6 sm:grid-cols-2 lg:grid-cols-2 gap-5 mb-6">
          <CryptoCard
            v-for="crypto in selectedCryptos"
            :key="crypto.symbol"
            :crypto="crypto"
          />
        </div>

        <CryptoTable
          :cryptocurrencies="paginatedData"
          :currentPage="currentPage"
          :totalPages="totalPages"
          :nextPage="nextPage"
          :prevPage="prevPage"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApiStore } from "@/stores/api";
import { storeToRefs } from "pinia";

const apiStore = useApiStore();
const { assets, loading: loadingTable } = storeToRefs(apiStore);

const selectedCryptos = ref([]);
const loadingCards = ref(true);
const currentPage = ref(1);
const itemsPerPage = 5;

const totalPages = computed(() =>
  Math.ceil(
    (assets.value?.data
      ? assets.value.data.length
      : Array.isArray(assets.value)
      ? assets.value.length
      : 0) / itemsPerPage
  )
);

const paginatedData = computed(() => {
  const data = Array.isArray(assets.value)
    ? assets.value
    : assets.value?.data || [];
  const start = (currentPage.value - 1) * itemsPerPage;
  return data.slice(start, start + itemsPerPage);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const fetchAllData = async () => {
  try {
    await apiStore.fetchAssets();
    const response = await apiStore.fetchAssets(
      "bitcoin,ethereum,solana,dogecoin"
    );
    selectedCryptos.value = response;
  } catch (err) {
    console.error("Error fetching", err);
  } finally {
    loadingCards.value = false;
    loadingTable.value = false;
  }
};

onMounted(() => {
  fetchAllData();
});


</script>

<style>
.bg-gray-100 {
  background-color: #f7fafc;
}

.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
