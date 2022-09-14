<script setup>

import CalcInput from './CalcInput.vue'
import UnitsSelector from './UnitsSelector.vue'
import { useCalculatorStore } from '@/stores/calculator'
const calcStore = useCalculatorStore()

function onSubmit() {
    calcStore.calculateVE()
}

function onReset() {
    calcStore.customReset()
}

calcStore.loadStateFromLocalStorage()

calcStore.$subscribe((mutation, state) => {
    localStorage.setItem('calculatorState', JSON.stringify(state))
})

</script>

<template>
    <form id="calcForm" class="card" @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset">
        <h2>Calculate</h2>
        <CalcInput name="rpm" label="Engine Speed" units="RPM" min="1" max="100000" />

        <CalcInput name="maf" label="Mass Air Flow" min="1" max="1000000" :isLineBreak="false" />
        <UnitsSelector name="mafUnits" label="Air Flow Units of Measurement" :choices="['g/s', 'kg/s']" />

        <CalcInput name="engSize" label="Engine Size" units="L" min="0.1" max="30000.0" />

        <CalcInput name="iat" label="Intake Air Temp" min="-200" max="200" :isLineBreak="false" />
        <UnitsSelector name="iatUnits" label="Air Temperature Units of Measurement" :choices="['°F', '°C']" />

        <CalcInput name="elevation" label="Elevation" min="-1500" max="30000" :isLineBreak="false" />
        <UnitsSelector name="elevationUnits" label="Elevation Units of Measurements" :choices="['ft', 'm']" />

        <div class="btn-container">
            <button type="submit">Calculate</button>
            <button type="reset">Reset</button>
        </div>

        <div class="output-container">
            <span>Volumetric Efficiency</span>
            <output for="rpm maf engSize iat elevation">{{ calcStore.ve }}</output>
            <span>%</span>
        </div>
    </form>
</template>

<style scoped>


form {
    min-width: 300rem;
    padding: 7rem 20rem 20rem 20rem;
}

h2 {
    width: fit-content;
    margin: 0 auto 5rem auto;
}

button {
    margin: 10rem 5rem 12rem 5rem;
    width: 110rem;
}

.btn-container {
    text-align: center;
}

.result {
    font-size: 18rem;
    font-family: sans-serif;
}

.output-container {
    padding-top: 8rem;
}

output {
    display: inline-block;
    vertical-align: middle;
    text-align: right;
    border: 1px solid var(--light-gray);
    border-radius: 3rem;
    font-family: sans-serif;
    font-size: 14rem;
    padding: 7rem;
    width: 75rem;
    height: 31rem;
    margin: -3rem 4rem 0rem 10rem;
}
</style>