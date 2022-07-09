<template>
    <div class="user">
        <UserIcon class="user__icon" />
        <span class="user__login">{{ login }}</span>
    </div>
</template>

<script lang="ts" setup>
import UserIcon from '@/components/ui/icons/UserIcon.vue'

import { useStore } from 'vuex'
import { computed } from '@vue/reactivity';

const { state } = useStore()

const login = computed<string>(() => state.user.login || state.user.email)

</script>

<style lang="sass" scoped>
@import '../../../styles/vars'
.user
    display: flex
    align-items: center
    gap: 10px
    &__icon
        width: 35px
        height: 35px
        fill: $main-green
    &__login
        font-size: 18px
        font-weight: 600
        text-decoration: underline
</style>