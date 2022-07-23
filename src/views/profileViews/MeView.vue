<template>
    <AppProfile />
</template>

<script lang="ts" setup>
import AppProfile from '@/components/AppProfile/AppProfile.vue'

import { computed } from '@vue/reactivity'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const userID = computed(() => store.state.user.userID || store.getters['user/userID'])

onMounted(() => {
    store.dispatch('profile/GET_PROFILE_BY_ID', Number(userID.value))
})
</script>

<style lang="sass" scoped>
</style>