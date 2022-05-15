<script setup>

import CalcInput from './CalcInput.vue'
import UnitsSelector from './UnitsSelector.vue'

</script>

<template>
    <div>
        <form id="calcForm">
            <CalcInput :name="'rpm'" :label="'Engine Speed'" :units="'RPM'" :min="0" :max="99999" />

            <CalcInput :name="'maf'" :label="'Mass Air Flow'" :min="0" :max="9999" :isLineBreak="false"/>
            <UnitsSelector :name="'mafUnits'" :label="'Air Flow Units of Measurement'"
                :options="[{ value: 'g/s', text: 'g/s' },
                           { value: 'kg/s', text: 'kg/s' }]" />

            <CalcInput :name="'engSize'" :label="'Engine Size'" :units="'L'" :min="0" :max="999" />

            <CalcInput :name="'iat'" :label="'Intake Air Temp'" :min="0" :max="200" :isLineBreak="false" />
            <UnitsSelector :name="'iatUnits'" :label="'Air Temperature Units of Measurement'"
                :options="[{ value: 'F', text: '°F' },
                           { value: 'C', text: '°C' }]" />

            <CalcInput :name="'elevation'" :label="'Elevation'" :min="-1500" :max="30000" :isLineBreak="false" />
            <UnitsSelector :name="'elevationUnits'" :label="'Elevation Units of Measurements'"
                :options="[{ value: 'ft', text: 'ft' },
                           { value: 'm', text: 'm' }]" />
            <div class="btn-container">
                <button type="button">Calculate</button>
                <button type="reset">Reset</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
form {
    width: max-content;
    padding: 20rem;
    margin: 0;
    border-radius: 8rem;
    box-shadow: 2rem 2rem 6px 0px grey;
}
button {
    margin: 10rem 10rem 0rem 10rem;
    width: 100rem;
}
.btn-container {
    text-align: center;
}
</style>