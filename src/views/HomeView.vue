<template>
    <div v-if="!isAuth">
        <SignInForm class="signin" />
        <AuthCaptcha v-if="isCaptcha" />
    </div>
</template>

<script lang="ts" setup>
import SignInForm from '@/components/SignInForm/SignInForm.vue'
import AuthCaptcha from '@/components/AuthCaptcha/AuthCaptcha.vue'

import { onMounted, computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import router from '@/router';

const store = useStore()

const isCaptcha = computed<boolean>(() => store.state.user?.captcha?.isCaptcha)
const isAuth = computed<boolean>(() => store.state.user.isAuth || store.getters['user/isAuth'])
const userID = computed<number>(() => store.state.user.userID || store.getters['user/userID'])

onMounted(() => {
    localStorage.setItem('isAuth', JSON.stringify(false))
    localStorage.setItem('userID', JSON.stringify(null))
    localStorage.setItem('userLogin', JSON.stringify(null))
    
   store.dispatch('user/getMe')
        .then(() => {
            if(isAuth.value) {
                router.push(`/profile/${userID.value}/me`)
            }
        })
})
</script>

<style lang="sass" scoped>
@import '../styles/mixins.sass'

.signin
    @include set-center
</style>