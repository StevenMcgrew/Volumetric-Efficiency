<script setup>

import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
    <Header />
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
    <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mukta+Malar&display=swap');

:root {
    --primary-color: #3781dd;
    --text-color: #3a3a3a;
    --background-color: #f2f2f2;
    --light-gray: #767676;
    --shadow-color: gray;
    --table-border-color: #8e8e8e;
    --th-background-color: #cecece;
    --chart-border-color: black;
    --good-indicator-color: #008900;
    --bad-indicator-color: #e22020;
    --unsure-indicator-color: #bbbb21;
    --current-indicator-color: white;
    --record-hover-color: #bad9ff;
    --card-color: #ffffff;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    -webkit-text-size-adjust: none;
    font-size: 1px;
    scroll-behavior: smooth;
}

body {
    font-size: 16rem;
    font-family: 'Mukta Malar', sans-serif;
    color: var(--text-color);
    background-color: var(--background-color);
    min-height: 100vh;
    margin: 0;
}

select,
textarea,
button {
    color: inherit;
    font-size: 14rem;
}

textarea {
    font-family: Arial;
}

button {
    font: inherit;
}

input {
    height: 32rem;
    color: inherit;
    font-size: 14rem;
    border: 1px solid var(--light-gray);
    border-radius: 3rem;
}

#app {
    min-height: 100vh;
}

a {
    text-decoration: none;
    color: var(--text-color);
}

button {
    outline: none !important;
    border-style: none;
    box-shadow: 1px 1px 7px -4px black;
    border-radius: 4rem;
    background-color: var(--primary-color);
    color: white;
    padding: 7px 15px 6px 15px;
    cursor: pointer;
    text-transform: uppercase;
}

button:active {
    transform: scale(.95);
}

.card {
    border-radius: 8rem;
    box-shadow: 2rem 2rem 6px 0px var(--shadow-color);
}

select {
    width: 100%;
    padding: 5rem 16rem 5rem 5rem;
    color: var(--text-color);
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: 1px solid var(--light-gray);
    border-radius: 3rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    word-wrap: normal;
    text-transform: none;
    margin: 0;
    font-size: 14rem;
    font-family: sans-serif;
}
</style>
