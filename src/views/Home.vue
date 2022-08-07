<script setup>

import Calculator from '../components/calculator/Calculator.vue'
import SaveForm from '../components/save/SaveForm.vue'
import SearchForm from '../components/search/SearchForm.vue'
import SearchTable from '../components/search/SearchTable.vue'
import Charts from '../components/charts/Charts.vue'

</script>

<template>
    <main>
        <section class="thin">
            <Calculator />
            <SaveForm />
        </section>
        <section class="wide card">
            <div class="comp-container">
                <SearchForm />
            </div>
            <div class="comp-container">
                <Charts />
            </div>
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
    padding-right: 12rem;
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
    height: max-content;
}

.comp-container {
    display: inline-block;
}

@media only screen and (max-width: 1260px) {
    .comp-container {
        display: flex;
        justify-content: center;
    }
}
</style>
