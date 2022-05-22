<script setup>

</script>

<template>
    <header>
        <h1>Volumetric Efficiency</h1>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/legal">Legal</router-link>
        </nav>
    </header>
</template>

<style scoped>
header {
    padding: 0rem 15rem;
}

h1 {
    display: inline;
}

nav {
    float: right;
    text-transform: uppercase;
}

a {
    line-height: 53rem;
    padding: 0rem 20rem;
}

@media only screen and (max-width: 600px) {
    nav {
        display: none;
    }
}
</style>