<template>
    <div class="layout">
        <AppHeader />
        <div class="container content">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/global/AppHeader/AppHeader.vue';
</script>

<style lang="sass" scoped>
.layout
    width: 100%
    height: 100vh
    position: absolute
    top: 0
    left: 0
.content
    overflow-y: auto
    height: 100vh
    max-height: calc( 100vh - 65px )
</style>
