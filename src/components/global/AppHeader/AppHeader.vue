<template>
    <header class="header">
        <div class="container flex-container">
            <SignUpLink class="header-link" />
            <DefaultButton @click="getDemoAcc">Demo</DefaultButton>     
        </div>
    </header>
</template>

<script lang="ts" setup>
import SignUpLink from '@/components/global/AppHeader/SignUpLink.vue'
import DefaultButton from '@/components/ui/DefaultButton/DefaultButton.vue';

import { useStore } from 'vuex';

const store = useStore()

const getDemoAcc = () => {
    store.dispatch('dispatchObjectValue', { path: 'user.login', value: 'free@samuraijs.com' })
    store.dispatch('dispatchObjectValue', { path: 'user.password', value: 'free' })
}

</script>

<style lang="sass" scoped>
@import '../../../styles/mixins'

.header
    width: 100%
    @include shadow
    padding: 10px 0
    display: flex
    align-items: center
    height: 65px
    background: #fff
.flex-container
    display: flex
    justify-content: flex-end
    align-items: center
    .header-link
        width: 150px
        margin-right: 15px
</style>