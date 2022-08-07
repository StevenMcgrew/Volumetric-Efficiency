<script setup>

const props = defineProps({
    id: String,
    name: String,
    modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

</script>

<template>
    <div>
        <label :for="name">Comments or Keywords:</label>
        <textarea :id="id" :name="name" rows="3" :value="modelValue" @input="emit('update:modelValue', $event.target.value)"></textarea>
    </div>
</template>

<style scoped>
label {
    display: block;
}
textarea {
    width: 100%;
    resize: none;
}
</style>