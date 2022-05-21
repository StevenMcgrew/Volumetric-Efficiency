<script setup>

const props = defineProps({
    name: String,
})

</script>

<template>
    <div>
        <label :for="name">Comments or Keywords:</label>
        <textarea :id="name" :name="name" rows="2"></textarea>
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