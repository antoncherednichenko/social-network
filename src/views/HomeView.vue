<template>
    <div>
        <SignInForm class="signin" />
        <AuthCaptcha v-if="isCaptcha" />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "@vue/runtime-core";
import { useStore } from "vuex";

import SignInForm from '@/components/SignInForm/SignInForm.vue'
import AuthCaptcha from '@/components/AuthCaptcha/AuthCaptcha.vue'

const { dispatch, state } = useStore()

const isCaptcha = computed<boolean>(() => state.user?.captcha?.isCaptcha)

onMounted(() => {
    dispatch('user/getMe')
})
</script>

<style lang="sass" scoped>
@import '../styles/mixins.sass'

.signin
    @include set-center
</style>