<script setup>

import Calculator from '../components/Calculator.vue'
import SaveForm from '../components/SaveForm.vue'

</script>

<template>
    <main>
        <section class="calculator">
            <Calculator />
        </section>
        <section class="save">
            <SaveForm />
        </section>
        <section class="search"></section>
        <section class="charts"></section>
        <section class="search-results"></section>
    </main>
</template>

<style scoped>
main {
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: minmax(300rem, 1fr) auto auto;
    grid-template-areas: "calculator search charts"
        "save search-results search-results";
    align-items: center;
    justify-items: center;
}

.calculator {
    grid-area: calculator;
}

.search {
    grid-area: search;
}

.save {
    grid-area: save;
}

.charts {
    grid-area: charts;
}

.search-results {
    grid-area: search-results;
}
</style>
