<script setup>

import { useSearchFormStore } from '../../stores/search-form'
import VehicleForm from '../vehicle/VehicleForm.vue'

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
    max-width: 538rem;
}
@media only screen and (max-width: 895px) {
    .search-container {
        width: 300rem;
    }
}
</style>