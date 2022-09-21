<script setup>

const props = defineProps({
    id: String,
    name: String,
    label: String,
    modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

</script>

<template>
    <div>
        <label :for="id">{{ label }}</label>
        <input :id="id" :name="name" :value="modelValue" @input="emit('update:modelValue', $event.target.value)"/>
    </div>
</template>

<style scoped>
label {
    display: inline-block;
    width: 70rem;
    padding: 6rem 0rem;
}

input {
    width: 150rem;
    font-size: 14rem;
    padding-left: 4rem;
}
</style>