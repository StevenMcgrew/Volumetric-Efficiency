<script setup>

import Calculator from '../components/Calculator.vue'
import SaveForm from '../components/SaveForm.vue'
import SearchForm from '../components/SearchForm.vue'
import SearchTable from '../components/SearchTable.vue'

</script>

<template>
    <main>
        <section class="thin">
            <Calculator />
            <SaveForm />
        </section>
        <section class="wide card">
            <SearchForm />
            <SearchTable />
        </section>
    </main>
</template>

<style scoped>
main {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 340rem auto;
    grid-template-areas: "thin wide";
    justify-items: center;
}

.thin {
    grid-area: thin;
    display: flex;
    flex-direction: column;
    padding: 10rem;
    align-items: center;
}

.wide {
    grid-area: wide;
    justify-self: start;
    overflow-x: hidden;
    width: 100%;
    margin-top: 10rem;
}
</style>
