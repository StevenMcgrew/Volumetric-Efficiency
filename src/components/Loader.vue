<script setup>

const props = defineProps({
    fill: String,
    width: String,
    height: String,
})

</script>

<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             x="0px" y="0px"
             viewBox="0 0 30 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <circle transform="translate(8 0)" cx="0" cy="16" r="0">
                <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
                         keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
                         calcMode="spline" />
            </circle>
            <circle transform="translate(16 0)" cx="0" cy="16" r="0">
                <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
                         keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
                         calcMode="spline" />
            </circle>
            <circle transform="translate(24 0)" cx="0" cy="16" r="0">
                <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
                         keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
                         calcMode="spline" />
            </circle>
        </svg>
    </div>
</template>

<style scoped>
div {
    display: inline-block;
    fill: v-bind('props.fill');
    width: v-bind('props.width');
    height: v-bind('props.height');
}
</style>