<template>
    <router-link class="logo" :to="logoUrl">
        <DiagramIcon class="logo__icon" />
        <h1 class="logo__title">Jopa</h1>
    </router-link>
</template>

<script lang="ts" setup>
import DiagramIcon from '@/components/ui/icons/DiagramIcon.vue'

import { computed } from '@vue/reactivity'
import { useStore } from 'vuex';

const store = useStore()

const isAuth = computed<boolean>(() => store.state.user.isAuth || store.getters['user/isAuth'])
const userID = computed<number>(() => store.state.user.userID || store.getters['user/userID'])
const logoUrl = computed<string>(() => isAuth.value ? `/profile/${userID.value}/me` : '/')
</script>

<style lang="sass" scoped>
@import '../../../styles/mixins'
@import '../../../styles/vars'

.logo
    display: flex
    align-items: center
    gap: 10px
    &:active
        margin-top: 1px
    &__title
        font-size: 25px
        font-weight: 700
        text-decoration: underline
        color: $main-black
    &__icon
        width: 35px
        height: 35px
        fill: $main-green
</style>