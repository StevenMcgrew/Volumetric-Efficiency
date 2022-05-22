<script setup>

import Calculator from '../components/Calculator.vue'
import SaveForm from '../components/SaveForm.vue'
import SearchForm from '../components/SearchForm.vue'

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
            <section class="bottom">
                
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
    grid-template-rows: auto auto;
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
    padding-top: 10rem;
}
</style>
