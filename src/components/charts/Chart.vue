<script setup>
import { useSearchFormStore } from '../../stores/search-form'
import { storeToRefs } from 'pinia'
import { watch, ref, computed } from 'vue'

const searchStore = useSearchFormStore()
const { records } = storeToRefs(searchStore)

const props = defineProps({
    title: String,
    isVeChart: Boolean,
})

let spacerWidth = 10

const grads = ref([])
const points = ref([])

const graduations = computed(() => grads.value)
const dataPoints = computed(() => points.value)

function setChartGraduations(array) {
    if (array.length) {
        let grad1 = array[0].val < spacerWidth ? 0 : array[0].val - spacerWidth

        let grad5 = array[array.length - 1].val + spacerWidth

        let incrementAmount = (grad5 - grad1) / 4

        let grad2 = grad1 + incrementAmount
        let grad3 = grad2 + incrementAmount
        let grad4 = grad3 + incrementAmount

        return [Math.round(grad1),
                Math.round(grad2),
                Math.round(grad3),
                Math.round(grad4),
                Math.round(grad5)]
    }
}

function setVeValues(records) {
    let vals = records.map(r => {
        return {
            condition: r.condition,
            val: Number(r.ve)
        }
    })
    return vals.sort((a, b) => a.val - b.val)
}

function setMafValues(records) {
    let vals = records.map(r => {
        let mafVal = r.mafUnits === 'kg/h' ?
            r.maf / 3.6 :
            Number(r.maf)
        return {
            condition: r.condition,
            val: mafVal
        }
    })
    return vals.sort((a, b) => a.val - b.val)
}

function setDataPoints(array) {
    let min = array[0].val < spacerWidth ? 0 : array[0].val - spacerWidth
    let max = array[array.length - 1].val + spacerWidth
    let range = max - min

    let pnts = array.map(obj => {
        let percentVal = ((obj.val - min) / range) * 100
        return { ...obj, val: percentVal }
    })
    return pnts
}

watch(records, () => {
    if (props.isVeChart === true) {
        let vals = setVeValues(records.value)
        let arr = setChartGraduations(vals)
        grads.value = arr
        let pnts = setDataPoints(vals)
        points.value = pnts
    }
    else if (props.isVeChart === false) {
        let vals = setMafValues(records.value)
        let arr = setChartGraduations(vals)
        grads.value = arr
        let pnts = setDataPoints(vals)
        points.value = pnts
    }
})

</script>

<template>
    <div class="chart-container">
        <p>{{ title }}</p>
        <div class="chart">
            <div v-for="point in dataPoints"
                        class="data-point"
                        :class="point.condition"
                        :style="{ left: point.val + '%' }">
            </div>
        </div>
        <div class="scale-container">
            <div class="scale">
                <div>|</div>
                <div>|</div>
                <div>|</div>
                <div>|</div>
                <div>|</div>
                <div v-for="grad in graduations">{{ grad }}</div>
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
    position: relative;
    width: 300rem;
    background-color: var(--light-gray);
    border: 1px solid var(--text-color);
    height: 50rem;
    margin: 0 auto;
}

.data-point {
    display: inline-block;
    position: absolute;
    width: 3rem;
    height: 100%;
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

.Good {
    background-color: var(--good-indicator-color);
}

.Bad {
    background-color: var(--bad-indicator-color);
}

.Unsure {
    background-color: var(--unsure-indicator-color);
}

</style>