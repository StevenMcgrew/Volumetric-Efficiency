<script setup>

const props = defineProps({
    record: Object,
})

</script>

<template>
    <table>
        <tbody>
            <tr>
                <td>Engine speed</td>
                <td class="value-cells">{{ parseInt(record.rpm) }}</td>
                <td>RPM</td>
            </tr>
            <tr>
                <td>Mass Air Flow</td>
                <td class="value-cells">{{ Number.parseFloat(record.maf).toFixed(1) }}</td>
                <td>{{ record.maf_units }}</td>
            </tr>
            <tr>
                <td>Intake Air Temperature</td>
                <td class="value-cells">{{ parseInt(record.air_temp) }}</td>
                <td>{{ record.temp_units }}</td>
            </tr>
            <tr>
                <td>Elevation</td>
                <td class="value-cells">{{ parseInt(record.elevation) }}</td>
                <td>{{ record.elevation_units }}</td>
            </tr>
            <tr>
                <td>Volumetric Efficiency</td>
                <td class="value-cells">{{ Math.round(Number.parseFloat(record.ve)) }}</td>
                <td>%</td>
            </tr>
            <tr>
                <td>Condition</td>
                <td class="value-cells">{{ record.condition }}</td>
                <td></td>
            </tr>
            <tr>
                <td>Comments/Keywords</td>
                <td colspan="2" class="comments-cell">{{ record.comments }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.value-cells {
    text-align: right;
}

.comments-cell {
    text-align: left;
}

table {
    border-spacing: 0;
    font-family: arial, sans-serif;
    font-size: 14rem;
}

td {
    border-bottom: 1px solid;
    border-right: 1px solid;
    padding: 5px;
}

td:nth-of-type(1) {
    width: 160px;
    border-left: 1px solid;
}

tr:nth-child(1) td {
    border-top: 1px solid;
}
</style>