import { defineStore } from 'pinia'
import { useCalculatorStore } from '../stores/calculator'

export const useSaveFormStore = defineStore({
    id: 'saveForm',
    state: () => ({
        isVisible: false,
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
        save(form) {
            const calculator = useCalculatorStore()
            console.log(calculator.rpm)
            console.log(calculator.ve)
            console.log(form)
            // Stringify JSON
            // Send to server
            // Handle response
        },
    }
})