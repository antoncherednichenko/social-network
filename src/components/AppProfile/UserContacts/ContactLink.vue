<template>
    <a class="contact-link" :href="link" target="_blank">
        <slot />
    </a>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface ILinkProps {
    link: string
}

const props = defineProps<ILinkProps>()
</script>

<style lang="sass" scoped>
</style>