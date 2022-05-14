<script setup>

import CalcInput from './CalcInput.vue'

</script>

<template>
    <div>
        <form id="calcForm">
            <CalcInput :name="'rpm'" :label="'Engine Speed'" :units="'RPM'" :min="0" :max="99999" />
            <CalcInput :name="'maf'" :label="'Mass Air Flow'" :min="0" :max="9999" :isLineBreak="false"/>
            <label for="mafUnits" class="screen-reader-only">Air Flow Units of Measurement</label>
            <select name="mafUnits" id="mafUnits">
                <option value="g/s">g/s</option>
                <option value="kg/s">kg/s</option>
            </select><br>
            <CalcInput :name="'engSize'" :label="'Engine Size'" :units="'L'" :min="0" :max="999" />
            <CalcInput :name="'iat'" :label="'Intake Air Temp'" :min="0" :max="200" :isLineBreak="false" />
            <label for="iatUnits" class="screen-reader-only">Air Temperature Units of Measurement</label>
            <select name="iatUnits" id="iatUnits">
                <option value="F">°F</option>
                <option value="C">°C</option>
            </select><br>
            <CalcInput :name="'elevation'" :label="'Elevation'" :min="-1500" :max="30000" :isLineBreak="false" />
            <label for="elevationUnits" class="screen-reader-only">Elevation Units of Measurements</label>
            <select name="elevationUnits" id="elevationUnits">
                <option value="ft">ft</option>
                <option value="m">m</option>
            </select><br>
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

.screen-reader-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

label {
    display: inline-block;
    width: 130rem;
    padding: 6rem 0rem;
}

input {
    width: 75rem;
    text-align: right;
    font-size: 14rem;
}

select {
    height: 30rem;
    width: 46rem;
}

span {
    padding-left: 4rem;
}
</style>