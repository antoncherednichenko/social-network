<template>
    <div class="user-profile">
        <div class="user-profile__info">
            <ProfileAvatar />
            <div class="holder">
                <LookingForAJob />
                <AboutMe />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ProfileAvatar from '@/components/AppProfile/ProfileAvatar.vue'
import LookingForAJob from '@/components/AppProfile/LookingForAJob.vue'
import AboutMe from '@/components/AppProfile/AboutMe.vue'

import { useStore } from 'vuex'

const store = useStore()

</script>

<style lang="sass" scoped>
@import '../../styles/mixins'
@import '../../styles/vars'

.user-profile
    &__info
        display: flex
        gap: 15px
        .holder
            width: 80%
            @include column(15px)
</style>