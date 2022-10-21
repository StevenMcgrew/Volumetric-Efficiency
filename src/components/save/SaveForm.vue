<script setup>
import { useSaveFormStore } from '../../stores/save-form'
import VehicleForm from '../vehicle/VehicleForm.vue'
const saveStore = useSaveFormStore()
function save(form) {
    saveStore.save(form)
}
</script>

<template>
    <div class="save-container">
        <div :class="[{ 'container-active': saveStore.isVisible }, 'accordian-container']">
            <button :class="[{ 'btn-active': saveStore.isVisible }, 'accordian-btn']"
                    @click="saveStore.toggleVisibility($event)">{{ saveStore.isVisible ? 'Collapse' : 'Save Result'}}
            </button>
            <div class="accordian-panel">
                <h2>Save</h2>
                <VehicleForm :isSave="true" @on-submit="save" />
            </div>
        </div>
    </div>
    <div class="how-to-container">
        <img src="/icons8-inquiry-48.png" alt="puzzled person">
        <a href="/Volumetric-Efficiency/about">How to use this app</a>
    </div>
</template>

<style scoped>


.save-container {
    padding: 10rem;
    width: 320rem;
}

.accordian-container {
    border-radius: 8rem;
}

.container-active {
    box-shadow: 2rem 2rem 6px 0px var(--shadow-color);
}

.accordian-btn {
    width: 100%;
    transition: 0.5s;
}

.accordian-btn::after {
    /* Unicode character */
    content: '\25BC';
    font-size: 13px;
    padding: 4rem 0rem 0rem 10rem;
}

.btn-active {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    background-color: var(--card-color);
    color: var(--primary-color);
    box-shadow: none;
}

.btn-active::after {
    /* Unicode character */
    content: "\25B2";
    box-shadow: none;
}

/* Hidden by default */
.accordian-panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
    background-color: var(--card-color);
    border-radius: 4rem;
}

h2 {
    margin: 0 auto 4rem auto;
    width: fit-content;
}

.how-to-container {
    display: flex;
    align-items: center;
    padding-top: 22px;
}

a {
    text-decoration: underline;
    color: var(--primary-color);
}

</style>