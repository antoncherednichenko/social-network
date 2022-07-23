<template>
    <div class="user-profile">
        <div class="user-profile__info">
            <div class="user-holder">
                <ProfileAvatar />
                <UserContacts v-if="isHaveSomeContacts" :contacts="contacts" />
            </div>
            <div class="holder">
                <LookingForAJob />
                <AboutMe v-if="aboutMe" :aboutMe="aboutMe" />
            </div>
        </div>
        <div class="user-profile__wall">

        </div>
    </div>
</template>

<script lang="ts" setup>
import ProfileAvatar from '@/components/AppProfile/ProfileAvatar/ProfileAvatar.vue'
import LookingForAJob from '@/components/AppProfile/LookingForAJob.vue'
import AboutMe from '@/components/AppProfile/AboutMe.vue'
import UserContacts from '@/components/AppProfile/UserContacts/UserContacts.vue'

import { useStore } from '@/hooks/hooks'
import { computed } from '@vue/reactivity'
import { TContacts } from '@/types/profileModuleTypes'

const store = useStore()

const contacts = computed<TContacts | null>(() => store.state.profile.contacts)
const aboutMe = computed<string | null>(() => store.state.profile.aboutMe)
const contactsList = computed<string[]>(() => Object.keys(contacts.value ?? {}))
const isHaveSomeContacts = computed<boolean>(() => contactsList.value.some(c => {
    if(contacts.value) {
        return contacts.value[c]
    } else {
        return false
    }
}))

</script>

<style lang="sass" scoped>
@import '../../styles/mixins'
@import '../../styles/vars'

.user-profile
    @include column(15px)
    
    &__info
        display: flex
        gap: 15px
        .holder
            width: 80%
            @include column(15px)
        .user-holder
            @include column(15px)
    &__wall
        @include tile            
</style>