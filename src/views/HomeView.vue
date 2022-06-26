<template>
    <h1>Hello</h1>
</template>

<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

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

</style>