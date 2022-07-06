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

const { dispatch, state, getters } = useStore()

const isCaptcha = computed<boolean>(() => state.user?.captcha?.isCaptcha)
const isAuth = computed<boolean>(() => getters['user/isAuth'])

onMounted(() => {
    if(!isAuth.value) {
        dispatch('user/getMe')
    }
})
</script>

<style lang="sass" scoped>
@import '../styles/mixins.sass'

.signin
    @include set-center
</style>