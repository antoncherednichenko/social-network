<template>
    <div class="form">
        <AppInput 
            type="text" 
            :validator="validator"
            :value="login"
            label="Login"
            placeholder="Login"
            validMessage="It's valid login"
            unvalidMessage="It's unvalid login"
            @binding="onLoginChange" 
        />
        <AppInput 
            type="text" 
            :validator="validator"
            :value="password"
            label="Password"
            placeholder="Password"
            validMessage="It's valid password"
            unvalidMessage="It's unvalid password"
            @binding="onPasswordChange" 
        />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import AppInput from '@/components/ui/AppInput/AppInput.vue'
import { useStore } from 'vuex';

const store = useStore()

const login = ref<string>('')
const password = ref<string>('')
const onLoginChange = (value: string) => { login.value = value }
const onPasswordChange = (value: string) => { password.value = value }
const validator = (value: string): boolean => value.length >= 4

</script>

<style lang="sass" scoped>
@import '../../styles/mixins'

.form
    width: 100%
    max-width: 500px
    padding: 0 15px
    @include column(15px)
</style>