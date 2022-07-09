<template>
    <div class="profile">
        <ProfileNav />
        <div class="profile__content">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ProfileNav from '@/components/global/ProfileLayout/ProfileNav.vue'
</script>

<style lang="sass" scoped>
@import '../../../styles/mixins'
@import '../../../styles/vars'

.profile
    margin-top: 25px
    width: 100%
    display: grid
    grid-template-columns: 0.1fr 1fr
    gap: 15px
    &__content
        background: #fff
        @include shadow
        border-radius: 10px
        padding: 10px
</style>