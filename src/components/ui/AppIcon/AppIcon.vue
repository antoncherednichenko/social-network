<template>
    <font-awesome-icon :style="{ width: `${size}px`, height: `${size}px` }" :icon="props.icon" />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface IIconProps {
    icon: string[]
    size: string
}

const props = defineProps<IIconProps>()

</script>

<style>
</style>