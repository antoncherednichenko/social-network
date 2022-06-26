<template>
    <div class="container">
        <h1>Hello</h1>
    </div>
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
</style>