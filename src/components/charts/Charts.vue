<script setup>

import Chart from './Chart.vue'

</script>

<template>
    <section class="charts-container">
        <Chart title="VE chart (%)" />
        <Chart title="MAF chart (g/s)" />
    </section>
</template>

<style scoped>
.charts-container {
    display: inline-block;
    width: 300rem;
    vertical-align: top;
    border: 1px solid var(--table-border-color);
    padding: 20rem;
}
</style>