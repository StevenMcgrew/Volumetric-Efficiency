<script setup>

import Chart from './Chart.vue'

</script>

<template>
    <section class="charts-container">
        <Chart title="VE chart (%)" :isVeChart="true" />
        <Chart title="MAF chart (g/s)" :isVeChart="false" />
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
</style>