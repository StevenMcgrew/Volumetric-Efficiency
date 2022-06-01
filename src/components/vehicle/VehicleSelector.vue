<script setup>

const props = defineProps({
    id: String,
    name: String,
    label: String,
    choices: Array,
    modelValue: String,
})
 let emit = defineEmits(['update:modelValue'])

</script>

<template>
    <div>
        <label :for="id">{{ label }}</label>
        <select :name="name" :id="id" :value="modelValue" @change="emit('update:modelValue', $event.target.value)">
            <option v-for="choice in choices" :value="choice">{{ choice }}</option>
        </select>
    </div>
</template>

<style scoped>
label {
    display: inline-block;
    width: 70rem;
    padding: 6rem 0rem;
}

select {
    height: 30rem;
    width: 150rem;
}
</style>