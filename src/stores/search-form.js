import { defineStore } from 'pinia'

export const useSearchFormStore = defineStore({
    id: 'searchForm',
    state: () => ({
        
    }),
    getters: {

    },
    actions: {
        search(form) {
            console.log(form)
        },
    }
})