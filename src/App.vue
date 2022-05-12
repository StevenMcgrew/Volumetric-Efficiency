<script setup>

import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
    <Header />
    <RouterView />
    <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mukta+Malar&display=swap');

:root {
    --app-accent-color: #3b83b0;
    --dark-text-color: #3a3a3a;
    --light-gray-text-color: #767676;
    --text-contrast-color: #ffffff;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    font-size: 0.0625rem;
}

body {
    font-size: 16rem;
    font-family: 'Mukta Malar', sans-serif;
    color: var(--dark-text-color);
    background-color: #fefefe;
    min-height: 100vh;
    margin: 0;
}

select,
textarea,
button {
    font: inherit;
    color: inherit;
}

input {
    height: 32rem;
    color: inherit;
}

#app {
    min-height: 100vh;
}

a {
    text-decoration: none;
    color: var(--dark-text-color);
}
</style>
