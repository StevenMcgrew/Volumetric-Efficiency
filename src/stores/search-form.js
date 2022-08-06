import { defineStore } from 'pinia'
import { url } from '../../config.js'
import { stringToKeywords } from '../../utils.js'

export const useSearchFormStore = defineStore({
    id: 'searchForm',
    state: () => ({
        records: [],
    }),
    getters: {
        
    },
    actions: {
        search(form) {
            let urlQuery = '?'

            let filters = []
            if (form.year) { filters.push(`year=${form.year}`) }
            if (form.make) { filters.push(`make=${form.make}`) }
            if (form.model) { filters.push(`model=${form.model}`) }
            if (form.engine) { filters.push(`engine=${form.engine}`) }
            if (form.condition) { filters.push(`condition=${form.condition}`) }
            if (form.comments) { filters.push(stringToKeywords(form.comments)) }
            if (filters.length) { urlQuery += filters.join('&')}

            fetch(url.calculations + urlQuery)
                .then((response) => {
                    if (!response.ok) { throw new Error(response.statusText) }
                    return response.json()
                })
                .then((data) => this.records = data)
                .catch((error) => alert(error))
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