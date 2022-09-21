<script setup>

import RecordDetails from './RecordDetails.vue'
import { useSearchFormStore } from '../../stores/search-form'
import Loader from '../Loader.vue'
import { createToast, withProps } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

const searchStore = useSearchFormStore()

searchStore.fetchRecent()

function popupRecordData(e) {
    let i = e.currentTarget.dataset.index
    let data = searchStore.records[i]
    let toastOptions = {
        type: 'info',
        timeout: 20000,
        position: 'bottom-center',
        toastBackgroundColor: '#bad9ff',
    }
    createToast(withProps(RecordDetails, { record: data }), toastOptions)
}

</script>

<template>
    <div class="search-info-panel">
        <div class="search-info-header-container">
            <span class="search-info-header">Search results</span><span>:</span>
            <span class="search-info-text">{{ searchStore.searchInfoText }}</span>
        </div>
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
                <th class="last-column">Comments/Keywords</th>
            </tr>
            <tr v-for="(r, index) in searchStore.records" :id="r.id" :data-index="index" @click="popupRecordData">
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
.last-column {
    width: 100%;
}

.table-container {
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

.search-info-header-container {
    display: inline-block;
}

.search-info-header {
    text-decoration: underline;
}

.search-info-text {
    padding-left: 10rem;
    white-space: pre-wrap;
    font-family: Arial, sans-serif;
    font-size: 18rem;}

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

tr {
    cursor: pointer;
}

tr:hover {
    background-color: var(--record-hover-color);
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