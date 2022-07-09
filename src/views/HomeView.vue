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

const { dispatch, state} = useStore()

const isCaptcha = computed<boolean>(() => state.user?.captcha?.isCaptcha)
const isAuth = computed<boolean>(() => state.user.isAuth)
const userID = computed<number>(() => state.user.userID)

onMounted(() => {
   if(!isAuth.value) {
     dispatch('user/getMe')
        .then(() => {
            if(isAuth.value) {
                router.push(`/profile/${userID.value}`)
            }
        })
   } else {
        router.push(`/profile/${userID.value}`)
   }
})
</script>

<style lang="sass" scoped>
@import '../styles/mixins.sass'

.signin
    @include set-center
</style>