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
        async fetchRecent() {
            try {
                let response = await fetch(url.last100)
                if (response.ok) {
                    let json = await response.json()
                    this.records = json
                } else {
                    alert(`A problem occured when trying to fetch recent records. HTTP-Error:  ${response.status} ${response.statusText}`)
                }
            }
            catch (err) {
                alert(`A problem occured when trying to fetch recent records. Error:  ${err}`)
            }
        },
    }
})