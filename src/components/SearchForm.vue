<script setup>

import { useSearchFormStore } from '../stores/search-form'
import VehicleForm from './VehicleForm.vue'

const searchForm = useSearchFormStore()

function search(form) {
    searchForm.search(form)
}

</script>

<template>
    <div class="search-container">
        <VehicleForm :isSave="false" @on-submit="search" />
    </div>
</template>

<style scoped>
.search-container {
    padding: 10rem;
}
</style>