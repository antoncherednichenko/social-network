<template>
    <div>
        <SignInForm class="signin" />
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

import SignInForm from '@/components/SignInForm/SignInForm.vue'

const store = useStore()
onMounted(() => {
    store.dispatch('api/API', {
        method: 'users?count=50',
        tyep: 'GET'
    })
})
</script>

<style lang="sass" scoped>
@import '../styles/mixins.sass'

.signin
    @include set-center
</style>