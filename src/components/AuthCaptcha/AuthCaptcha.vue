<template>
    <div class="captcha">
        <AppModal @close-modal="closeModal">
            <template #header>
                <h2 class="captcha__header">Captcha</h2>
            </template>
            <template #content>
                <div class="captcha__body body">
                    <img class="body__img" v-if="imgUrl" :src="imgUrl" />
                    <AppInput
                        class="body__input"
                        type="text"
                        placeholder="Type text from image"
                        :value="captchaValue"
                        :validator="validator"
                        @binding="onCaptchaChange"
                    />
                    <div class="btns-holder">
                        <DefaultButton @click="sendCaptcha">Send captcha</DefaultButton>
                        <DefaultButton @click="updateCaptcha">Update</DefaultButton>
                    </div>
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
import { rootConstants } from '@/store/storeConst'

import { computed, ref } from '@vue/reactivity'

const store = useStore()

const captchaValue = ref<string>('')
const imgUrl = computed<string>(() => store.state.user.captcha.url)
const email = computed<string>(() => store.state.user.email)
const password = computed<string>(() => store.state.user.password)

const validator = (value: string) => value.length >= 4
const onCaptchaChange = (value: string) => { captchaValue.value = value }
const closeModal = () => { 
    store.dispatch(rootConstants.DISPATCH_OBJECT_VALUE, { path: 'user.captcha.isCaptcha', value: false }) 
    store.dispatch(rootConstants.DISPATCH_OBJECT_VALUE, { path: 'user.captcha.url', value: '' }) 
}
const updateCaptcha = () => { store.dispatch('user/GET_CAPTCHA') }
const sendCaptcha = () => { 
    store.dispatch('user/LOGIN', {
        email: email.value,
        password: password.value,
        captcha: captchaValue.value
    })
}
</script>

<style lang="sass" scoped>
@import '../../styles/mixins'
@import '../../styles/vars'
.captcha
    &__header
        font-size: 24px
        font-weight: 700
        text-decoration: underline
    &__body
        @include column(10px)
        max-width: 400px
        width: 100%
        margin: 0 auto
        .btns-holder
            display: flex
            gap: 15px
    .body
        &__img
            margin: 0 auto
        &__input
            border: 1px solid $main-grey 
</style>