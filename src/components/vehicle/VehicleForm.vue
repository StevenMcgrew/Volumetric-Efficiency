<script setup>

import VehicleSelector from './VehicleSelector.vue'
import ModelInput from './ModelInput.vue'
import ConditionRadBtns from './ConditionRadBtns.vue'
import CommentsTextarea from './CommentsTextarea.vue'

const props = defineProps({
    isSave: Boolean,
})
const emit = defineEmits(['on-submit'])
const submitText = (() => props.isSave ? 'save' : 'search')()
const form = {
    year: '',
    make: '',
    model: '',
    engine: '',
    condition: '',
    comments: '',
}

function currentYear() {
    let date = new Date()
    return date.getFullYear()
}

function createYearOptions(min, max) {
    let years = []
    for (let i = max; i >= min; i--) {
        years[years.length] = i
    }
    return years
}

const carMakes = ["Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley",
    "BMW", "Bugatti", "Buick", "Cadillac", "Chevrolet", "Chrysler",
    "Citroen", "Daewoo", "Daihatsu", "Dodge", "Eagle", "Ferrari",
    "Fiat", "Ford", "Freightliner", "Geo", "GMC", "Honda", "Hummer",
    "Hyundai", "Infiniti", "Isuzu", "Jaguar", "Jeep", "Kia", "Lamborghini",
    "Land Rover", "Lexus", "Lincoln", "Lotus", "Maserati", "Maybach",
    "Mazda", "Mercedes-Benz", "Mercury", "MINI", "Mitsubishi", "Nissan",
    "Oldsmobile", "Opel", "Plymouth", "Pontiac", "Porsche", "Ram",
    "Renault", "Rolls Royce", "Rover", "Saab", "Saturn", "Scion", "Seat",
    "Skoda", "Smart", "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo"];

function createEngineOptions(min, max) {
    let engineSizes = []
    for (let i = min; i <= max; i = i + 0.1) {
        let option = (i.toFixed(1)) + 'L';
        engineSizes[engineSizes.length] = option
    }
    return engineSizes
}

</script>

<template>
    <form @submit.prevent.stop="emit('on-submit', form)">
        <div class="form-section vehicle">
            <VehicleSelector :id="`${submitText}Year`" :name="'year'" :label="'Year'"
                             :choices="createYearOptions(1900, currentYear() + 2)" v-model="form.year" />

            <VehicleSelector :id="`${submitText}Year`" :name="'make'" :label="'Make'"
                             :choices="carMakes" v-model="form.make" />

            <ModelInput :id="`${submitText}Year`" :name="'model'" :label="'Model'" v-model="form.model" />

            <VehicleSelector :id="`${submitText}Year`" :name="'engine'" :label="'Engine'"
                             :choices="createEngineOptions(0.1, 9.0)" v-model="form.engine" />
        </div>
        <div class="form-section">
            <ConditionRadBtns :ids="[`${submitText}Good`, `${submitText}Bad`, `${submitText}Unsure`]"
                              v-model="form.condition" />

            <CommentsTextarea :id="`${submitText}Year`" :name="'saveComments'" v-model="form.comments" />
        </div>
        <div class="submit-container">
            <button type="submit">{{ submitText }}</button>
            <button type="reset">Reset</button>
        </div>
    </form>
</template>

<style scoped>
form {
    min-width: 300rem;
    padding: 20rem;
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