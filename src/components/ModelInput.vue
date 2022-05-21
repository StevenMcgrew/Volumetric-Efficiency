<script setup>

const props = defineProps({
    name: String,
    label: String,
})

</script>

<template>
    <div>
        <label :for="name">{{ label }}</label>
        <input :id="name" :name="name" required/>
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
}
</style>