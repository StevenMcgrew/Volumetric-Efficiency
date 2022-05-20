import { defineStore } from 'pinia'

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
    }
})