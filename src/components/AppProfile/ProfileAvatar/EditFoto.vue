<template>
    <label class="edit_foto">
        <input type="file">
    </label>
</template>

<script lang="ts" setup>
import { useStore } from '@/hooks/hooks'
import { computed } from '@vue/reactivity'
const store = useStore()

console.log(store.state.profile?.aboutMe)
// const avatarImg = computed<string | null>(() => {
//     return store.state.profile?.photos?.small || store.state.profile?.photos?.large
// })

</script>

<style lang="sass" scoped>
@import '../../../styles/mixins'
@import '../../../styles/vars'

.edit_foto

</style>