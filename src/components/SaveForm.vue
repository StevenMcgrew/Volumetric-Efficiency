<script setup>

import { useSaveFormStore } from '../stores/save-form'
import VehicleSelector from './VehicleSelector.vue'
import ModelInput from './ModelInput.vue'
import ConditionRadBtns from './ConditionRadBtns.vue'
import CommentsTextarea from './CommentsTextarea.vue';

const saveForm = useSaveFormStore()

</script>

<template>
    <div class="save-container">
        <div :class="[{ 'container-active': saveForm.isVisible }, 'accordian-container']">
            <button :class="[{ 'btn-active': saveForm.isVisible }, 'accordian-btn']"
                @click="saveForm.toggleVisibility($event)">{{ saveForm.isVisible ? 'Collapse' : 'Save Result'
                }}</button>
            <div class="accordian-panel">
                <form action="" method="post">
                    <div class="form-section vehicle">
                        <VehicleSelector :name="'year'" :label="'Year'" />
                        <VehicleSelector :name="'make'" :label="'Make'" />
                        <ModelInput :name="'model'" :label="'Model'" />
                        <VehicleSelector :name="'engine'" :label="'Engine'" />
                    </div>
                    <div class="form-section">
                        <ConditionRadBtns :ids="['saveGood', 'saveBad', 'saveUnsure']" />
                        <CommentsTextarea :name="'saveComments'" />
                    </div>
                    <div class="submit-container">
                        <button>Save</button>
                        <button>Reset</button>
                    </div>
                </form>
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

form {
    min-width: 300rem;
    padding: 0rem 20rem 20rem 20rem;
    margin: 0;
}

.form-section {
    display: inline-block;
}

.vehicle {
    padding: 9rem 20rem 5rem 0rem;
    vertical-align: top;
}

.submit-container {
    text-align: center;
}

.submit-container>button {
    margin: 10rem 5rem 0rem 5rem;
    width: 110rem;
}
</style>