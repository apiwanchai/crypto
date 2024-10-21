import { defineStore } from 'pinia';
import axios from 'axios';

export const useApiStore = defineStore('api', {
  state: () => ({
    assets: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchAssets(ids = '') {
      this.loading = true;
      try {
        const response = await axios.get('https://komgrip.co.th/coincap/assets', {
          params: ids ? { ids } : {},
        });

        if (!ids) {
          this.assets = response.data.data; 
        }
        return response.data.data; 
      } catch (err) {
        this.error = err;
        throw err;
      } finally {
        this.loading = false;
      }
    },
  },
});
