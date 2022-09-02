<script setup>

const props = defineProps({
    ids: Array,
    modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

let storedChoice = ''
function radBtnClicked(e) {
    if (e.target.value === storedChoice) {
        e.target.checked = false
        storedChoice = ''
        emit('update:modelValue', '')
    }
    else {
        emit('update:modelValue', e.target.value)
        storedChoice = e.target.value
    }
}

</script>

<template>
    <fieldset>
        <legend>Condition:</legend>

        <input type="radio" :id="ids[0]" name="condition" value="Good" @click="radBtnClicked($event)">
        <label :for="ids[0]">Good</label>

        <input type="radio" :id="ids[1]" name="condition" value="Bad" @click="radBtnClicked($event)">
        <label :for="ids[1]">Bad</label>

        <input type="radio" :id="ids[2]" name="condition" value="Unsure" @click="radBtnClicked($event)">
        <label :for="ids[2]">Unsure</label>

    </fieldset>
</template>

<style scoped>

fieldset {
    border: 1rem solid #767676;
    margin: 0rem 0rem 5rem 0rem;
    border-radius: 2rem;
    padding-top: 0;
}

input {
    vertical-align: bottom;
    height: 24rem;
}

label {
    display: inline-block;
    padding: 0rem 18rem 0rem 2rem;
}

label:nth-of-type(1) {
    color: var(--good-indicator-color);
}

label:nth-of-type(2) {
    color: var(--bad-indicator-color);
}

label:nth-of-type(3) {
    color: var(--unsure-indicator-color);
}
</style>