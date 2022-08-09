import { defineStore } from 'pinia'
import { url } from '../../config.js'
import { stringToKeywords } from '../../utils.js'
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import { jsonToSearchInfo } from '../../utils.js'


export const useSearchFormStore = defineStore({
    id: 'searchForm',
    state: () => ({
        records: [],
        searchInfoText: '',
        isLoading: false,
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
            this.searchInfoText = 'fetching records...'
            this.isLoading = true

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
                .then((data) => {
                    this.records = data
                    this.searchInfoText = `${this.records.length} records found for '${jsonToSearchInfo(form)}'`
                })
                .catch((error) => {
                    createToast(error.message, this.toastOptions)
                    this.searchInfoText = `Error,  ${error.message}`
                })
                .finally(this.isLoading = false)
        },

        fetchRecent() {
            this.searchInfoText = 'fetching records...'
            this.isLoading = true

            fetch(`${url.calculations}?limit=20`)
                .then((response) => { if (!response.ok) { return response.text().then(text => { throw new Error(text) }) }
                                      else { return response.json() } })
                .then((data) => {
                    this.records = data
                    this.searchInfoText = `20 most recent records`
                })
                .catch((error) => {
                    createToast(error.message, this.toastOptions)
                    this.searchInfoText = `Error,  ${error.message}`
                })
                .finally(this.isLoading = false)
        },
    }
})