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
        result: '',
    }),
    getters: {

    },
    actions: {
        calculateVE() {
            try {
                let measuredMAF = this.convertMafIfNeeded(this.maf, this.mafUnits)
                let K = this.convertToKelvin(this.iat, this.iatUnits)
                let Pa = this.getPascalsViaElevation(this.elevation, this.elevationUnits)
                let gramsPerLiter = this.getGramsPerLiter(Pa, K)
                let theoreticalMAF = this.getTheoreticalMAF(this.engSize, gramsPerLiter, this.rpm)
                let VE = (measuredMAF / theoreticalMAF) * 100
                this.result = Math.round(VE) + '%'
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
            this.result = ''
        },
        convertMafIfNeeded(maf, units) {
            return units === 'kg/s' ? this.toGramsPerSecond(maf) : maf
        },
        toGramsPerSecond(kgPerSecond) {
            return kgPerSecond / 3.6
        },
        convertToKelvin(iat, units) {
            if (units === '°C') { iat = this.toFahrenheit(iat) }
            return (iat + 459.67) * 5 / 9
        },
        toFahrenheit(iat) {
            return (iat * 1.8) + 32
        },
        getPascalsViaElevation(elevation, units) {
            if (units === 'm') { elevation = this.toFeet(elevation) }
            let baroPressure = this.getBaroFromElevation(elevation)
            return 3386.39 * baroPressure
        },
        toFeet(elevation) {
            return elevation * 3.2808
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