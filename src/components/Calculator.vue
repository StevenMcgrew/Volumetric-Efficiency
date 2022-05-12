<script setup>

</script>

<template>
    <div>
        <form id="calcForm">
            <label for="rpm">Engine Speed</label>
            <input id="rpm" name="rpm" type="number" /><span>RPM</span><br>

            <label for="maf">Mass Air Flow</label>
            <input id="maf" name="maf" type="number" />
            <label for="mafUnits" class="screen-reader-only">Air Flow Units of Measurement</label>
            <select name="mafUnits" id="mafUnits">
                <option value="g/s">g/s</option>
                <option value="kg/s">kg/s</option>
            </select><br>

            <label for="engSize">Engine Size</label>
            <input id="engSize" name="engSize" type="number" /><span>L</span><br>

            <label for="iat">Intake Air Temp</label>
            <input id="iat" name="iat" type="number" />
            <label for="iatUnits" class="screen-reader-only">Air Temperature Units of Measurement</label>
            <select name="iatUnits" id="iatUnits">
                <option value="F">°F</option>
                <option value="C">°C</option>
            </select><br>


            <label for="elevation">Elevation</label>
            <input id="elevation" name="elevation" type="number" />
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
    margin-left: 4rem;
    height: 30rem;
    width: 46rem;
}

span {
    padding-left: 4rem;
}
</style>