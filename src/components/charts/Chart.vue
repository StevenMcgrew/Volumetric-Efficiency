<script setup>

const props = defineProps({
    title: String,
})

</script>

<template>
    <div class="chart-container">
        <p>{{ title }}</p>
        <div class="chart">
        </div>
        <div class="scale-container">
            <div class="scale">
                <div>|</div>
                <div>|</div>
                <div>|</div>
                <div>|</div>
                <div>|</div>
                <div>0</div>
                <div>25</div>
                <div>50</div>
                <div>75</div>
                <div>100</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.chart-container {}

p {
    margin: 0;
    padding-left: 20rem;
}

.chart {
    width: 300rem;
    background-color: var(--light-gray);
    border: 1px solid var(--text-color);
    height: 50rem;
    margin: 0 auto;
}

.scale {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    line-height: 12rem;
}

.scale>div {
    display: inline-block;
    width: 20%;
    text-align: center;
}

.scale-container {
    width: 372rem;
}
</style>