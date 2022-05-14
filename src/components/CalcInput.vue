<script setup>

let props = defineProps({
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
    <input :id="name" :name="name" type="number" :min="min" :max="max" />
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
</style>