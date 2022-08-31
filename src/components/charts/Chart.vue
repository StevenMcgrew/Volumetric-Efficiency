<script setup>

const props = defineProps({
    title: String,
    chartData: Array,
})

let data = props.charData.sort((a, b) => a - b)
let grad1 = data[1]
let grad5 = data[data.length - 1]

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
                <div>{{ grad1 }}</div>
                <div>{{ grad2 }}</div>
                <div>{{ grad3 }}</div>
                <div>{{ grad4 }}</div>
                <div>{{ grad5 }}</div>
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