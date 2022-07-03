<template>
    <SignInForm class="signin" />
</template>

<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

import SignInForm from '@/components/SignInForm/SignInForm.vue'

const store = useStore()
onMounted(() => {
    store.dispatch('api/API', {
        method: 'GET',
        type: 'users'
    }).then(e => console.log(e, 'USERS')) 
})
</script>

<style lang="sass" scoped>
@import '../styles/mixins.sass'

.signin
    @include set-center
</style>