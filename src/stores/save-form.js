import { defineStore } from 'pinia'
import { useCalculatorStore } from '../stores/calculator'
import { url } from '../../web-addresses'

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
            const record = {
                year: form.year,
                make: form.make,
                model: form.model,
                engine: form.engine,
                condition: form.condition,
                comments: form.comments,
                maf_units: calculator.mafUnits,
                temp_units: calculator.iatUnits,
                elevation_units: calculator.elevationUnits,
                rpm: calculator.rpm,
                maf: calculator.maf,
                air_temp: calculator.iat,
                elevation: calculator.elevation,
                ve: calculator.ve,
            }
            fetch(url.calculations, { method: 'POST',
                                      headers: { 'Content-Type': 'application/json' },
                                      body: JSON.stringify(record)})
                .then((response) => { if (!response.ok) { throw new Error(response.statusText) }
                                      return response.json()})
                .then((data) => console.log(data))
                .catch((error) => alert(error))
        },
    }
})