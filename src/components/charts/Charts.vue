<script setup>

import Chart from './Chart.vue'

</script>

<template>
    <section id="chartsContainer" class="charts-container">
        <Chart title="VE chart (%)" :isVeChart="true" />
        <Chart title="MAF chart (g/s)" :isVeChart="false" />
        <div class="color-key-container">
            <span>Color key:</span>
            <span class="color-block good"></span>
            <span>Good</span>
            <span class="color-block bad"></span>
            <span>Bad</span>
            <span class="color-block unsure"></span>
            <span>Unsure</span>
            <span class="color-block current"></span>
            <span>Current</span>
        </div>
    </section>
</template>

<style scoped>
.charts-container {
    vertical-align: top;
    border: 1px solid var(--table-border-color);
    padding: 10rem 0rem;
    border-radius: 3rem;
    margin-top: 20rem;
    width: 372rem;
}

.color-key-container {
    text-align: center;
    padding-top: 5rem;
}

.color-block {
    margin: 0rem 2rem 0rem 10rem;
    display: inline-block;
    width: 10rem;
    height: 10rem;
    border: 1px solid black;
}

.good {
    background-color: var(--good-indicator-color)
}

.bad {
    background-color: var(--bad-indicator-color)
}

.unsure {
    background-color: var(--unsure-indicator-color)
}

.current {
    background-color: var(--current-indicator-color)
}
</style>