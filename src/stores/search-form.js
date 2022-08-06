import { defineStore } from 'pinia'
import { url } from '../../config.js'
import { stringToKeywords } from '../../utils.js'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'


export const useSearchFormStore = defineStore({
    id: 'searchForm',
    state: () => ({
        records: [],
        toastOptions: {
            type: 'danger',
            timeout: 10000,
            position: 'bottom-center',
            showIcon: true,
        }
    }),
    getters: {
        
    },
    actions: {
        search(form) {
            let urlQuery = '?'

            let filters = []
            if (form.year) { filters.push(`year=${encodeURIComponent(form.year)}`) }
            if (form.make) { filters.push(`make=${encodeURIComponent(form.make)}`) }
            if (form.model) { filters.push(`model=${encodeURIComponent(form.model)}`) }
            if (form.engine) { filters.push(`engine=${encodeURIComponent(form.engine)}`) }
            if (form.condition) { filters.push(`condition=${encodeURIComponent(form.condition)}`) }
            if (form.comments) { filters.push(stringToKeywords(form.comments)) }
            if (filters.length) { urlQuery += filters.join('&')}

            fetch(url.calculations + urlQuery)
                .then((response) => { if (!response.ok) { return response.text().then(text => { throw new Error(text) }) }
                                      else { return response.json() } })
                .then((data) => this.records = data)
                .catch((error) => createToast(error.message, this.toastOptions))
        },

        fetchRecent() {
            fetch(`${url.calculations}?limit=20`)
                .then((response) => { if (!response.ok) { return response.text().then(text => { throw new Error(text) }) }
                                      else { return response.json() } })
                .then((data) => this.records = data)
                .catch((error) => createToast(error.message, this.toastOptions))
        },
    }
})