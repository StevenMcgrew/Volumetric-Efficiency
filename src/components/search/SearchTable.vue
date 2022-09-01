<script setup>

import { useSearchFormStore } from '../../stores/search-form'
import Loader from '../Loader.vue'

const searchStore = useSearchFormStore()

searchStore.fetchRecent()

</script>

<template>
    <div class="search-info-panel">
        <span class="search-info-header">Search results</span><span>:</span>
        <span class="search-info-text">{{ searchStore.searchInfoText }}</span>
        <div class="loader-container" v-if="searchStore.isLoading">
            <Loader fill="var(--text-color)" width="30rem" height="30rem" />
        </div>
    </div>
    <div class="table-container">
        <table>
            <tr>
                <th>Year</th>
                <th>Make</th>
                <th>Model</th>
                <th>Eng.</th>
                <th>Condition</th>
                <th>VE</th>
                <th>MAF</th>
                <th>Comments/Keywords</th>
            </tr>
            <tr v-for="r in searchStore.records" :id="r.id">
                <td>{{ r.year }}</td>
                <td>{{ r.make }}</td>
                <td>{{ r.model }}</td>
                <td>{{ r.engine }}</td>
                <td :class="r.condition">{{ r.condition }}</td>
                <td>{{ `${Math.round(Number.parseFloat(r.ve))}%`}}</td>
                <td>{{ `${Number.parseFloat(r.maf).toFixed(1)}${r.maf_units}`}}</td>
                <td>{{ r.comments }}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>







.table-container {
    width: fit-content;
    overflow-x: scroll;
    margin: 10rem;
    border: 1px solid var(--table-border-color);
    min-height: 140rem;
}

.search-info-panel {
    display: flex;
    align-items: center;
    padding: 20rem 0rem 0rem 16rem;
    white-space: pre;
    font-size: 22rem;
}

.search-info-header {
    text-decoration: underline;
}

.search-info-text {
    padding-left: 10rem;
}

.loader-container {
    width: 30rem;
    height: 30rem;
}

table {
    border-collapse: collapse;
}

td,
th {
    text-align: left;
    padding: 8px;
}

th {
    background-color: var(--th-background-color);
    border-bottom: 1px solid var(--table-border-color);
    border-right: 1px solid var(--table-border-color);
}

td {
    white-space: pre;
    font-family: arial, sans-serif;
    font-size: 14rem;
}

td:nth-of-type(6),
td:nth-of-type(7) {
    text-align: right;
}

.Good {
    color: var(--good-indicator-color);
}

.Bad {
    color: var(--bad-indicator-color);
}

.Unsure {
    color: var(--unsure-indicator-color);
}

</style>