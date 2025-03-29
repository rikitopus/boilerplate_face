import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePageStore = defineStore('page', () => {
    const title = ref('')

    return {
        title
    }
})
