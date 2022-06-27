<template>
    <div class="form">
        <AppInput 
            type="text" 
            :validator="(value: string) => !!value"
            :value="login"
            @binding="onLoginChange" 
        />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import AppInput from '@/components/ui/AppInput/AppInput.vue'

const login = ref<string>('')
const onLoginChange = (value: string) => { login.value = value }
</script>

<style lang="sass" scoped>
.form
    width: 500px
</style>