<script setup>

import { ref } from 'vue'

const isVisible = ref(false)

</script>

<template>
    <header>
        <h1 @click="$router.push({ name: 'home'})">Volumetric Efficiency</h1>
        <nav class="ribbon-nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/legal">Terms</router-link>
        </nav>
        <button id="menuBtn" class="menu-btn" @click="isVisible = !isVisible" :class="{ menuvisible: isVisible }">
            <svg xmlns="http://www.w3.org/2000/svg" class="hamburger-svg" fill="currentColor" width="24"
                 height="24"
                 viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
            <menu v-if="isVisible">
                <nav class="menu-nav">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/legal">Terms</router-link>
                </nav>
            </menu>
        </button>
    </header>
</template>

<style scoped>
header {
    padding: 0rem 15rem;
}

h1 {
    display: inline;
}

h1:hover {
    cursor: pointer;
}

.menu-btn {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    padding: 12rem 15rem 13rem 15rem;
    box-shadow: none;
    background-color: var(--background-color);
    color: var(--text-color);
    border-radius: 0;
}

.hamburger-svg {
    float: right;
}

menu {
    padding: 0;
    margin: 30rem 0rem 0rem 0rem;
}

.menu-nav {
    display: flex;
    flex-direction: column;
}

.menu-btn:hover {
    box-shadow: 0rem 0rem 20rem 1px #cdcdcd;
}

.menuvisible {
    box-shadow: 0rem 0rem 20rem 1px #cdcdcd;
}

.ribbon-nav {
    float: right;
    text-transform: uppercase;
}

a {
    line-height: 53rem;
    padding: 0rem 20rem;
}

@media only screen and (max-width: 590px) {
    .ribbon-nav {
        display: none;
    }

    .menu-btn {
        display: block;
    }

    header {
        padding-right: 0;
    }
}
</style>