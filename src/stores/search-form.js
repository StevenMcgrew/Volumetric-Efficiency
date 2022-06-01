import { defineStore } from 'pinia'
import { url } from '../../web-addresses.js'

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
        async fetchRecent() {
            // let response = await fetch(url.last100)
            // if (response.ok) {
            //     let json = await response.json()
            //     console.log(json)
            // } else {
            //     alert("HTTP-Error: " + response.status);
            // }
        },
    }
})