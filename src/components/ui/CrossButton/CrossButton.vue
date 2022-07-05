<template>
    <button class="cross-btn">
        <CrossIcon class="icon-color"  />
    </button>
</template>

<script lang="ts" setup>
import CrossIcon from '@/components/ui/icons/CrossIcon.vue'
</script>

<style lang="sass" scoped>
@import '../../../styles/vars'
.cross-btn
    width: 35px
    height: 35px
    transition: transform 0.2s
    &:hover
        transform: scale(1.1)
.icon-color
    fill: $main-black
</style>