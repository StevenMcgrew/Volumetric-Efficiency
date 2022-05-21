<script setup>

const props = defineProps({
    ids: Array,
})

</script>

<template>
    <fieldset>
        <legend>Condition:</legend>

        <input type="radio" :id="ids[0]" name="condition" value="Good">
        <label :for="ids[0]">Good</label>

        <input type="radio" :id="ids[1]" name="condition" value="Bad">
        <label :for="ids[1]">Bad</label>

        <input type="radio" :id="ids[2]" name="condition" value="Unsure">
        <label :for="ids[2]">Unsure</label>

    </fieldset>
</template>

<style scoped>
fieldset {
    border: 1rem solid #767676;
    margin: 0rem 0rem 5rem 0rem;
    border-radius: 2rem;
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
    color: #008900;
}

label:nth-of-type(2) {
    color: #e22020;
}

label:nth-of-type(3) {
    color: #bbbb21;
}
</style>