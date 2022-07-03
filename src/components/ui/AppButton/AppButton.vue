<template>
    <button :class="{disabled: props.disabled}" class="button"><slot /></button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

interface IButtonProps {
    disabled: boolean
}

const props = defineProps<IButtonProps>()
</script>

<style lang="sass" scoped>
@import '../../../styles/mixins'
@import '../../../styles/vars'

.button
    background: $main-grey
    width: 100%
    border-radius: 4px
    padding: 10px
    transition: box-shadow 0.3s
    box-shadow: -10px -10px 15px rgba(255,255,255,0.5), 10px 10px 15px rgba(70,70,70,0.12)
    font-size: 18px
    font-weight: 600
    letter-spacing: 1px
    &:hover
        box-shadow: -10px -10px 15px rgba(255,255,255,0.5), 10px 10px 15px rgba(70,70,70,0.15)
    &:active
        box-shadow: inset -10px -10px 15px rgba(255,255,255,0.5), inset 5px 5px 10px rgb(70 70 70 / 17%)
    &.disabled
        box-shadow: inset -10px -10px 15px rgba(255,255,255,0.5), inset 5px 5px 10px rgb(70 70 70 / 17%)
        opacity: 0.6
        cursor: default
        
</style>