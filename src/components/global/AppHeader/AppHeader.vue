<template>
    <header class="header">
        <div class="container flex-container">
            <AppLogo />
            <div v-if="!isAuth" class="btns">
                <SignUpLink class="header-link" />
                <DefaultButton @click="getDemoAcc">Demo</DefaultButton>
            </div>
            <UserInfo v-if="isAuth" />    
        </div>
    </header>
</template>

<script lang="ts" setup>
import SignUpLink from '@/components/global/AppHeader/SignUpLink.vue'
import DefaultButton from '@/components/ui/DefaultButton/DefaultButton.vue'
import AppLogo from '@/components/global/AppHeader/AppLogo.vue'
import UserInfo from '@/components/global/AppHeader/UserInfo.vue'

import { useStore } from 'vuex';
import { rootConstants } from '@/store/storeConst';

import { computed } from '@vue/reactivity';

const store = useStore() 

const isAuth = computed<boolean>(() => store.state.user.isAuth || store.getters['user/isAuth'])

const getDemoAcc = () => {
    store.dispatch(rootConstants.DISPATCH_OBJECT_VALUE, { path: 'user.email', value: 'free@samuraijs.com' })
    store.dispatch(rootConstants.DISPATCH_OBJECT_VALUE, { path: 'user.password', value: 'free' })
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
    @include flex-between
    .header-link
        width: 150px
        margin-right: 15px
</style>