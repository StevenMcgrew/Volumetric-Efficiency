<script setup>

let props = defineProps({
    name: String,
    label: String,
    options: Array,
})

</script>

<template>
    <label :for="name" class="screen-reader-only">{{ label }}</label>
    <select :name="name" :id="name">
        <option v-for="option in options" :value="option.value">{{ option.text }}</option>
    </select>
    <br>
</template>

<style scoped>
.screen-reader-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

select {
    height: 30rem;
    width: 46rem;
}
</style>