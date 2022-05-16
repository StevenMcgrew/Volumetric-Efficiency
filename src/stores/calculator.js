import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore({
    id: 'calculator',
    state: () => ({
        rpm: 0,
        maf: 0,
        engSize: 0,
        iat: 0,
        elevation: 0,
        mafUnits: 'g/s',
        iatUnits: '°F',
        elevationUnits: 'ft',
    }),
    getters: {

    },
    actions: {
        calculateVE() {
            
        }
    }
})