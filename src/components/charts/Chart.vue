<script setup>

const props = defineProps({
    title: String,
})

</script>

<template>
    <div class="chart-container">
        <p>{{ title }}</p>
        <div class="chart-area">
        </div>
        
    </div>
</template>

<style scoped>
.chart-container {

}
p {
    margin: 0;
}
.chart-area {
    background-color: var(--text-color);
    border: 1px solid var(--table-border-color);
    height: 50rem;
}
</style>