import { defineStore } from 'pinia'
import { useCalculatorStore } from '../stores/calculator'

export const useSaveFormStore = defineStore({
    id: 'saveForm',
    state: () => ({
        isVisible: false,
        year: String,
        make: String,
        model: String,
        engine: String,
        condition: String,
        comments: String,
    }),
    getters: {

    },
    actions: {
        toggleVisibility(e) {
            this.isVisible = !this.isVisible
            let panel = e.target.nextElementSibling
            if (this.isVisible) { panel.style.maxHeight = `${panel.scrollHeight}rem` }
            else { panel.style.maxHeight = null }
        },
        save() {
            const calculator = useCalculatorStore()
            // Put data in to a JSON object
            // Stringify JSON
            // Send to server
            // Handle response
        },
    }
})