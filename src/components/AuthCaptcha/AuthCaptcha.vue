<template>
    <div class="captcha">
        <AppModal :closeCallback="closeModal">
            <template v-slot:header>
                <h2 class="captcha__header">Captcha</h2>
            </template>
            <template v-slot:content>
                <img v-if="imgUrl" :src="imgUrl" />
                <div class="captcha__body body">
                    <AppInput
                        type="text"
                        placeholder="Type text from image"
                        label="Captcha"
                        :value="captchaValue"
                        :validator="validator"
                        @binding="onCaptchaChange"
                    />
                    <DefaultButton>Send captcha</DefaultButton>
                </div>
            </template>
        </AppModal>
    </div>
</template>

<script lang="ts" setup>

import AppModal from '@/components/ui/AppModal/AppModal.vue'
import AppInput from '@/components/ui/AppInput/AppInput.vue'
import DefaultButton from '@/components/ui/DefaultButton/DefaultButton.vue'

import { useStore } from 'vuex'
import { computed, ref } from '@vue/reactivity'

const { dispatch, state } = useStore()

const captchaValue = ref<string>('')
const imgUrl = computed<string>(() => state.user.captcha.url)

const validator = (value: string) => value.length >= 4
const onCaptchaChange = (value: string) => { captchaValue.value = value }
const closeModal = () => { 
    dispatch('dispatchObjectValue', { path: 'user.captcha.isCaptcha', value: false }) 
    dispatch('dispatchObjectValue', { path: 'user.captcha.url', value: '' }) 
}
</script>

<style lang="sass" scoped>
</style>