import { defineStore } from 'pinia'
import { useCalculatorStore } from '../stores/calculator'
import { url } from '../../config'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

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
            const toastOptions = {
                type: 'danger',
                position: 'bottom-center',
                showIcon: true,
            }
            if (!calculator.rpm) { createToast('Engine Speed cannot be empty. Only comments is optional.', toastOptions); return; }
            if (!calculator.maf) { createToast('Mass Air Flow cannot be empty. Only comments is optional.', toastOptions); return; }
            if (!calculator.iat) { createToast('Intake Air Temp cannot be empty. Only comments is optional.', toastOptions); return; }
            if (!calculator.elevation) { createToast('Elevation cannot be empty. Only comments is optional.', toastOptions); return; }
            if (!calculator.ve) { createToast('Volumetric Efficiency cannot be empty. Only comments is optional.', toastOptions); return; }
            if (!form.year) { createToast('Year is required. Only comments is optional.', toastOptions); return; }
            if (!form.make) { createToast('Make is required. Only comments is optional.', toastOptions); return; }
            if (!form.model) { createToast('Model is required. Only comments is optional.', toastOptions); return; }
            if (!form.engine) { createToast('Engine is required. Only comments is optional.', toastOptions); return; }
            if (!form.condition) { createToast('Condition is required. Only comments is optional.', toastOptions); return; }

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
                .then((response) => { if (!response.ok) { return response.text().then(text => { throw new Error(text) }) }
                                      else { return response.json() }})
                .then((data) => console.log(data))
                .catch((error) => createToast(error.message, toastOptions))
        },
    }
})