<script setup>

import { useCalculatorStore } from '@/stores/calculator.js'
const calculator = useCalculatorStore()

const props = defineProps({
    name: String,
    label: String,
    units: String,
    min: Number,
    max: Number,
    isLineBreak: {
        default: true,
        type: Boolean,
    }
})

</script>

<template>
    <label :for="name">{{ label }}</label>
    <input :id="name" :name="name" type="number" :min="min" :max="max" v-model="calculator[name]" step=".001"
        @input="calculator.result = null" required />
    <span>{{ units }}</span>
    <br :class="{ remove: !isLineBreak }">
</template>

<style scoped>
label {
    display: inline-block;
    width: 130rem;
    padding: 6rem 0rem;
}

input {
    width: 75rem;
    text-align: right;
    font-size: 14rem;
}

span {
    padding-left: 4rem;
}

.remove {
    display: none;
}

/* Remove arrow buttons from number input for Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Remove arrow buttons from number input for Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>