<script setup>

import { useSearchFormStore } from '../../stores/search-form'

const search = useSearchFormStore()

search.fetchRecent()

</script>

<template>
    <div class="table-container">
        <table>
            <tr>
                <th>Year</th>
                <th>Make</th>
                <th>Model</th>
                <th>Eng.</th>
                <th>Condition</th>
                <th>VE</th>
                <th>MAF</th>
                <th>Comments/Keywords</th>
            </tr>
            <tr>
                <td>1999</td>
                <td>Ford</td>
                <td>Taurus</td>
                <td>3.0L</td>
                <td>Unsure</td>
                <td>91%</td>
                <td>152.3g/s</td>
                <td>No Comments</td>
            </tr>
            <tr>
                <td>2005</td>
                <td>BMW</td>
                <td>330i</td>
                <td>3.0L</td>
                <td>Good</td>
                <td>81%</td>
                <td>144.3g/s</td>
                <td>No Comments alkjfl asj flas jljaslkfj laks jflkasj flaskj flaksfj aslkj flkas jflkasj flkasdj fl
                </td>
            </tr>
            <tr>
                <td>2003</td>
                <td>Audi</td>
                <td>A8</td>
                <td>4.2L</td>
                <td>Bad</td>
                <td>68%</td>
                <td>174.2g/s</td>
                <td>No Comments</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.table-container {
    width: 100%;
    overflow-x: scroll;
    margin: 0rem 10rem;
}

table {
    border-collapse: collapse;
    border: 1px solid var(--table-border-color);
}

td,
th {
    text-align: left;
    padding: 8px;
}

th {
    background-color: var(--th-background-color);
    border: 1px solid var(--table-border-color);
}

td {
    white-space: pre;
    font-family: arial, sans-serif;
    font-size: 14rem;
}
</style>