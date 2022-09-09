<script setup>
import { useSearchFormStore } from '../../stores/search-form'
import { useCalculatorStore } from '../../stores/calculator'
import { storeToRefs } from 'pinia'
import { watch, ref, computed } from 'vue'

const searchStore = useSearchFormStore()
const calcStore = useCalculatorStore()

const { records } = storeToRefs(searchStore)

const props = defineProps({
    title: String,
    isVeChart: Boolean,
})

let spacerWidth = 20

const grads = ref([])
const points = ref([])

const graduations = computed(() => grads.value)
const dataPoints = computed(() => points.value)

function setChartGraduations(array) {
    if (array.length) {
        let grad1 = array[0].val < spacerWidth ?
                    0 :
                    array[0].val - spacerWidth

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
        let mafVal = r.maf_units === 'kg/h' ?
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
    if (array.length) {
        let min = array[0].val < spacerWidth ? 0 : array[0].val - spacerWidth
        let max = array[array.length - 1].val + spacerWidth
        let range = max - min

        let current = null
        let pnts = array.map(obj => {
            let percentVal = ((obj.val - min) / range) * 100
            let newObj = { ...obj, val: percentVal }
            if (newObj.condition === 'Current') { current = newObj }
            return newObj
        })

        if (current) { pnts.push(current) }
        return pnts
    }
    return []
}

watch(records, () => {
    let _records = [...records.value]
    // If calculator has a current result, add it to _records
    if (calcStore.ve && calcStore.maf) {
        _records.push({
            maf: calcStore.maf,
            maf_units: calcStore.mafUnits,
            ve: calcStore.ve,
            condition: 'Current'
        })
    }
    // Update values for charts based on records
    if (props.isVeChart === true) {
        let vals = setVeValues(_records)
        let arr = setChartGraduations(vals)
        grads.value = arr
        let pnts = setDataPoints(vals)
        points.value = pnts
    }
    else if (props.isVeChart === false) {
        let vals = setMafValues(_records)
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
    background-color: var(--chart-border-color);
    border: 1px solid var(--chart-border-color);
    height: 50rem;
    margin: 0 auto;
    overflow: hidden;
}

.data-point {
    display: inline-block;
    position: absolute;
    width: 2rem;
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

.Current {
    background-color: var(--current-indicator-color);
}
</style>