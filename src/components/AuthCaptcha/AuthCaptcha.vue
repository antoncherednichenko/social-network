<template>
<div>
    <AppIcon :icon="['xmark']" size="50" />
    <AppModal :closeCallback="closeModal">
    </AppModal>
</div>
</template>

<script lang="ts" setup>

import AppModal from '@/components/ui/AppModal/AppModal.vue'
import AppIcon from '@/components/ui/AppIcon/AppIcon.vue'

import { useStore } from 'vuex'

const { dispatch, state } = useStore()

const closeModal = () => { 
    dispatch('dispatchObjectValue', { path: 'user.captcha.isCaptcha', value: false }) 
}
</script>

<style lang="sass" scoped>
</style>