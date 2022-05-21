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
        ve: null,
    }),
    getters: {
        maf_GS: (state) => state.mafUnits === 'kg/s' ? state.maf / 3.6 : state.maf,
        iat_F: (state) => state.iatUnits === '°C' ? (state.iat * 1.8) + 32 : state.iat,
        elevation_ft: (state) => state.elevationUnits === 'm' ? state.elevation * 3.2808 : state.elevation,
    },
    actions: {
        calculateVE() {
            try {
                const K = this.convertToKelvin(this.iat_F)
                const Pa = this.getPascalsViaElevation(this.elevation_ft)
                const gramsPerLiter = this.getGramsPerLiter(Pa, K)
                const theoreticalMAF = this.getTheoreticalMAF(this.engSize, gramsPerLiter, this.rpm)
                const VE = (this.maf_GS / theoreticalMAF) * 100
                this.ve = Math.round(VE)
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
            this.ve = null
        },
        convertToKelvin(iat) {
            return (iat + 459.67) * 5 / 9
        },
        getPascalsViaElevation(elevation) {
            const baroPressure = this.getBaroFromElevation(elevation)
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