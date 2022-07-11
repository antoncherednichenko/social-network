<template>
    <div class="avatar">
        <div class="avatar__img">
            <img class="img" v-if="avatarImg" :src="avatarImg" alt="user avatar">
            <UserIcon class="icon" v-else />
        </div>
        <div class="avatar__btn">
            <DefaultButton class="btn">Edit</DefaultButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import UserIcon from '@/components/ui/icons/UserIcon.vue'
import DefaultButton from '@/components/ui/DefaultButton/DefaultButton.vue'

import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

const avatarImg = computed(() => store.state.profile?.photos?.large || store.state.profile?.photos?.small)

const store = useStore()

</script>

<style lang="sass" scoped>
@import '../../styles/mixins'
@import '../../styles/vars'

.avatar
    padding: 15px
    background: #fff
    width: 250px
    @include flex-center
    flex-direction: column
    gap: 15px
    @include shadow
    border-radius: 10px
    &__img
        background: $main-grey
        width: 150px
        height: 150px
        @include flex-center
        padding: 15px
        border-radius: 50%
        
        .icon
            width: 75px
            height: 75px
            fill: $main-black
    &__btn
        width: 100%
        .btn
            display: block
            width: 100%
</style>