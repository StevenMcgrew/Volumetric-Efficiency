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
        <section class="wide">
            <section class="top">
                <SearchForm />
            </section>
            <section class="bottom card">
                <SearchTable />
            </section>
        </section>
    </main>
</template>

<style scoped>
main {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: minmax(300rem, auto) 1fr;
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
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas: "top"
        "bottom";
    grid-gap: 10rem;
    padding-top: 10rem;
    justify-self: start;
}

.top {
    grid-area: top;
}

.bottom {
    grid-area: bottom;
    margin: 10rem 0rem 20rem 0rem;
    overflow-x: scroll;
    height: max-content;
}
</style>
