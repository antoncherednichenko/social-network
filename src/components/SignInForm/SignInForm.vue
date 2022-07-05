<template>
    <div class="form">
        <AppInput 
            type="text" 
            :validator="validator"
            :value="login"
            placeholder="Login"
            validMessage="It's valid login"
            unvalidMessage="It's unvalid login"
            @binding="onLoginChange" 
        />
        <AppInput 
            type="password" 
            :validator="validator"
            :value="password"
            placeholder="Password"
            validMessage="It's valid password"
            unvalidMessage="It's unvalid password"
            @binding="onPasswordChange" 
        />
        <AppButton @click="signin" :disabled="!isValidFrom">Sign In</AppButton>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex';

import AppInput from '@/components/ui/AppInput/AppInput.vue'
import AppButton from '@/components/ui/AppButton/AppButton.vue'

const { dispatch, state } = useStore()

const login = computed<string>(() => state.user.login)
const password = computed<string>(() => state.user.password)
const isValidFrom = computed<boolean>(() => login.value.length >= 4 && password.value.length >= 4)

const onLoginChange = (value: string) => { 
    dispatch('dispatchObjectValue', { path: 'user.login', value }) 
}

const onPasswordChange = (value: string) => {
    dispatch('dispatchObjectValue', { path: 'user.password', value })
}

const validator = (value: string): boolean => value.length >= 4

const signin = () => {
    if(isValidFrom.value) {
        // dispatch('user/login', {
        //     login: login.value,
        //     password: password.value
        // })

        dispatch('user/getCaptcha')

        // dispatch('dispatchObjectValue', { path: 'user.captcha.isCaptcha', value: true })
    }
}


</script>

<style lang="sass" scoped>
@import '../../styles/mixins'

.form
    width: 100%
    max-width: 500px
    padding: 0 15px
    @include column(15px)
</style>