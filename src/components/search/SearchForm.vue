<script setup>

import { useSearchFormStore } from '../../stores/search-form'
import VehicleForm from '../vehicle/VehicleForm.vue'

const searchStore = useSearchFormStore()

function search(form) {
    searchStore.search(form)
}

</script>

<template>
    <div class="search-container">
        <h2>Search</h2>
        <VehicleForm :isSave="false" @on-submit="search" />
    </div>
</template>

<style scoped>

.search-container {
    max-width: 538rem;
}

h2 {
    margin: 7rem auto 4rem auto;
    width: fit-content;
}

@media only screen and (max-width: 913px) {
    .search-container {
        width: 300rem;
    }
}
</style>