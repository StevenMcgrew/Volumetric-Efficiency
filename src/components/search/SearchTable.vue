<script setup>

import { useSearchFormStore } from '../../stores/search-form'

const search = useSearchFormStore()

search.fetchRecent()

</script>

<template>
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
            <tr v-for="r in search.records" :id="r._id">
                <td>{{ r._year }}</td>
                <td>{{ r._make }}</td>
                <td>{{ r._model }}</td>
                <td>{{ r._engine }}</td>
                <td :class="r._condition">{{ r._condition }}</td>
                <td>{{ `${Math.round(Number.parseFloat(r._ve))}%`}}</td>
                <td>{{ `${Number.parseFloat(r._maf).toFixed(1)}${r._mafunits}`}}</td>
                <td>{{ r._comments }}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.table-container {
    width: calc(100% - 20rem);
    overflow-x: scroll;
    margin: 10rem;
    border: 1px solid var(--table-border-color);
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