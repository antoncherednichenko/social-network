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
.content
    margin-top: 25px
    overflow-y: auto
</style>
