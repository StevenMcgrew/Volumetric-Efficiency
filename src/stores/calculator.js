import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore({
    id: 'calculator',
    state: () => ({
        rpm: null,
        maf: null,
        engSize: null,
        iat: null,
        elevation: null,
        mafUnits: 'g/s',
        iatUnits: '°F',
        elevationUnits: 'ft',
        result: null,
    }),
    getters: {
        maf_GS: (state) => state.mafUnits === 'kg/s' ? state.maf / 3.6 : state.maf,
        iat_F: (state) => state.iatUnits === '°C' ? (state.iat * 1.8) + 32 : state.iat,
        elevation_ft: (state) => state.elevationUnits === 'm' ? state.elevation * 3.2808 : state.elevation,
    },
    actions: {
        calculateVE() {
            try {
                let K = this.convertToKelvin(this.iat_F)
                let Pa = this.getPascalsViaElevation(this.elevation_ft)
                let gramsPerLiter = this.getGramsPerLiter(Pa, K)
                let theoreticalMAF = this.getTheoreticalMAF(this.engSize, gramsPerLiter, this.rpm)
                let VE = (this.maf_GS / theoreticalMAF) * 100
                this.result = Math.round(VE)
            }
            catch (err) {
                alert('An error occured. Please refresh the page to try again.\n\n' + err)
                console.error(err)
            }
        },
        customReset() {
            this.rpm = null
            this.maf = null
            this.engSize = null
            this.iat = null
            this.elevation = null
            this.result = null
        },
        convertToKelvin(iat) {
            return (iat + 459.67) * 5 / 9
        },
        getPascalsViaElevation(elevation) {
            let baroPressure = this.getBaroFromElevation(elevation)
            return 3386.39 * baroPressure
        },
        getBaroFromElevation(elevation) {
            if (elevation < 3000) { return 29.92 - (elevation * 0.00104) }
            else { return 29.92 - (elevation * 0.00101) }
        },
        getGramsPerLiter(Pa, K) {
            return Pa / (287.05 * K) // 287.05 is the gas constant for air
        },
        getTheoreticalMAF(engLiters, gramsPerLiter, rpm) {
            return (engLiters * gramsPerLiter * rpm * 0.5) / 60
        },
    }
})