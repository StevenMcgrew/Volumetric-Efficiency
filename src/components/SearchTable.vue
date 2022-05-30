<script setup>

</script>

<template>
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
</template>

<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}

td {
    white-space: pre;
}
</style>