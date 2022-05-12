<script setup>

</script>

<template>
    <main>
        <section class="calculator"></section>
        <section class="save"></section>
        <section class="search"></section>
        <section class="charts"></section>
        <section class="search-results"></section>
    </main>
</template>

<style scoped>
main {
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: auto auto auto;
    grid-template-areas: "calculator search charts"
        "save search-results search-results";
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
