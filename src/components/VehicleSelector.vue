<script setup>

const props = defineProps({
    name: String,
    label: String,
    choices: Array,
})

</script>

<template>
    <div>
        <label :for="name">{{ label }}</label>
        <select :name="name" :id="name">
            <option v-for="choice in choices" :value="choice">{{ choice }}</option>
        </select>
    </div>
</template>

<style scoped>
label {
    display: inline-block;
    width: 130rem;
    padding: 6rem 0rem;
}
select {
    height: 30rem;
    width: 50rem;
}
</style>