import { defineStore } from 'pinia'
import { url } from '../../web-addresses.js'

export const useSearchFormStore = defineStore({
    id: 'searchForm',
    state: () => ({
        records: [],
    }),
    getters: {
        
    },
    actions: {
        search(form) {
            console.log(form)
        },
        fetchRecent() {
            fetch(`${url.calculations}?limit=20`)
                .then((response) => { if (!response.ok) { throw new Error(response.statusText) }
                                      return response.json() })
                .then((data) => this.records = data)
                .catch((error) => alert(error))
        },
    }
})