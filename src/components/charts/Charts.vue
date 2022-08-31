<script setup>

import { useSearchFormStore } from '../../stores/search-form'
import Chart from './Chart.vue'

const searchStore = useSearchFormStore()

let records = searchStore.records
let veValues = records.map(r => Number(r.ve))
let mafValues = records.map(r => r.mafUnits === 'kg/h' ? r.maf / 3.6 : Number(r.maf))

</script>

<template>
    <section class="charts-container">
        <Chart title="VE chart (%)" :chartData="veValues" />
        <Chart title="MAF chart (g/s)" :chartData="mafValues" />
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