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
    border-radius: 8rem;
    box-shadow: 2rem 2rem 6px 0px var(--shadow-color);
}
@media only screen and (max-width: 895px) {
    .search-container {
        width: 300rem;
    }
}
</style>