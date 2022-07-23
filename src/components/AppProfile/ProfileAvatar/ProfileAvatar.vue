<template>
    <div class="avatar">
        <div class="avatar__img">
            <img class="img" v-if="avatarImg" :src="avatarImg" alt="user avatar">
            <UserIcon class="icon" v-else />
        </div>
        <span class="avatar__name">{{fullName}}</span>
        <div v-if="isMyProfile" class="avatar__btn">
            <DefaultButton @click="showModal" class="btn">Edit</DefaultButton>
        </div>
        <EditModal v-if="isModal" />
    </div>
</template>

<script lang="ts" setup>
import UserIcon from '@/components/ui/icons/UserIcon.vue'
import DefaultButton from '@/components/ui/DefaultButton/DefaultButton.vue'
import EditModal from '@/components/AppProfile/ProfileAvatar/EditModal.vue'

import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';

const store = useStore()
const router = useRoute()

const avatarImg = computed<string>(() => store.state.profile?.photos?.large || store.state.profile?.photos?.small)
const isMyProfile = computed<boolean>(() => {
    return Number(router.params.id) === Number(store.state.user.userID || localStorage.getItem('userID'))
})
const fullName = computed<string | null>(() => store.state.profile?.fullName)
const isModal = computed<boolean>(() => store.state.profile?.editModal?.isModal)

const showModal = () => {
    store.dispatch('dispatchObjectValue', { path: 'profile.editModal.isModal', value: true })
}

</script>

<style lang="sass" scoped>
@import '../../../styles/mixins'
@import '../../../styles/vars'

.avatar
    @include tile
    width: 250px
    @include flex-center
    flex-direction: column
    gap: 15px
    height: max-content
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
    &__name
        font-size: 20px
        font-weight: 600
        text-decoration: underline
</style>