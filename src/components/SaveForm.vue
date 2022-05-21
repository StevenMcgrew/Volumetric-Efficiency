<script setup>

import { useSaveFormStore } from '../stores/save-form'
import VehicleForm from './VehicleForm.vue'

const saveForm = useSaveFormStore()

function save(form) {
    saveForm.save(form)
}

</script>

<template>
    <div class="save-container">
        <div :class="[{ 'container-active': saveForm.isVisible }, 'accordian-container']">
            <button :class="[{ 'btn-active': saveForm.isVisible }, 'accordian-btn']"
                @click="saveForm.toggleVisibility($event)">{{ saveForm.isVisible ? 'Collapse' : 'Save Result' }}</button>
            <div class="accordian-panel">
                <VehicleForm :isSave="true" @on-submit="save"/>
            </div>
        </div>
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
    /* Unicode character for "plus" sign (+) */
    content: '\25BC';
    font-size: 13px;
    padding: 4rem 0rem 0rem 10rem;
}

.btn-active {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    background-color: var(--background-color);
    color: var(--primary-color);
    box-shadow: none;
}

.btn-active::after {
    /* Unicode character for "minus" sign (-) */
    content: "\25B2";
    box-shadow: none;
}

/* Hidden by default */
.accordian-panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
}
</style>