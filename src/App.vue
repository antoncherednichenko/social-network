<template>
  <AppLayout>
    <router-view /> 
  </AppLayout>
</template>

<script lang="ts" setup>
import AppLayout from '@/components/global/layout/AppLayout.vue';
</script>

<style lang="sass">
@use './styles/reset.sass'
</style>
