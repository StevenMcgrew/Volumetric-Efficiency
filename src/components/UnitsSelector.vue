<script setup>

let props = defineProps({
    name: String,
    label: String,
})

</script>

<template>
    <label :for="name">{{ label }}</label>
    <input :id="name" :name="name" type="number" :min="min" :max="max" />
    <span>{{ units }}</span>
    <br :class="{ remove: !isLineBreak }">
</template>

<style scoped>

</style>