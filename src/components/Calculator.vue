<script setup>

import CalcInput from './CalcInput.vue'
import UnitsSelector from './UnitsSelector.vue'
import { useCalculatorStore } from '../stores/calculator'
const calculator = useCalculatorStore()

function onSubmit() {
    calculator.calculateVE()
}

function onReset() {
    calculator.customReset()
}

</script>

<template>
    <div class="calc-form-container">
        <form id="calcForm" @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset">
            <CalcInput :name="'rpm'" :label="'Engine Speed'" :units="'RPM'" :min="1" :max="100000" />

            <CalcInput :name="'maf'" :label="'Mass Air Flow'" :min="1" :max="1000000" :isLineBreak="false" />
            <UnitsSelector :name="'mafUnits'" :label="'Air Flow Units of Measurement'" :choices="['g/s', 'kg/s']" />

            <CalcInput :name="'engSize'" :label="'Engine Size'" :units="'L'" :min="0.1" :max="30000.0" />

            <CalcInput :name="'iat'" :label="'Intake Air Temp'" :min="-200" :max="200" :isLineBreak="false" />
            <UnitsSelector :name="'iatUnits'" :label="'Air Temperature Units of Measurement'" :choices="['°F', '°C']" />

            <CalcInput :name="'elevation'" :label="'Elevation'" :min="-1500" :max="30000" :isLineBreak="false" />
            <UnitsSelector :name="'elevationUnits'" :label="'Elevation Units of Measurements'" :choices="['ft', 'm']" />

            <div class="btn-container">
                <button type="submit">Calculate</button>
                <button type="reset">Reset</button>
            </div>

            <div class="output-container">
                <span>Volumetric Efficiency</span>
                <output for="rpm maf engSize iat elevation">{{ calculator.ve }}</output>
                <span>%</span>
            </div>
        </form>
    </div>
</template>

<style scoped>
.calc-form-container {
    padding: 10rem;
}
form {
    min-width: 300rem;
    padding: 20rem;
    margin: 0;
    border-radius: 8rem;
    box-shadow: 2rem 2rem 6px 0px var(--shadow-color);
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