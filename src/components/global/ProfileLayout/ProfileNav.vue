<template>
    <nav class="nav">
        <ul class="nav__list list"> 
            <li class="list__item item">
                <router-link class="item__link" :to="`/profile/${userID}`">
                    <UserIcon class="item__icon" />
                    <span>Profile</span>
                </router-link>
            </li>
            <li class="list__item item">
                <router-link class="item__link" :to="`/profile/${userID}/dialogs`">
                    <ToiletPaperIcon class="item__icon" />
                    <span>Dialogs</span>
                </router-link>
            </li>
            <li class="list__item item">
                <router-link class="item__link" :to="`/profile/${userID}/users`">
                    <UsersIcon class="item__icon" />
                    <span>Users</span>
                </router-link>
            </li>
            <li class="list__item item">
                <router-link class="item__link" :to="`/profile/${userID}/news`">
                    <NewsPaperIcon class="item__icon" />
                    <span>News</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import UserIcon from '@/components/ui/icons/UserIcon.vue'
import UsersIcon from '@/components/ui/icons/UsersIcon.vue'
import ToiletPaperIcon from '@/components/ui/icons/ToiletPaperIcon.vue'
import NewsPaperIcon from '@/components/ui/icons/NewsPaperIcon.vue'

import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

const { state } = useStore()

const userID = computed<number>(() => state.user.userID)

</script>

<style lang="sass" scoped>
@import '../../../styles/mixins'
@import '../../../styles/vars'

.nav
    background: #fff
    @include shadow
    height: 50vh
    border-radius: 10px
    overflow-x: hidden
    .list
        @include column(15px)
        max-width: 150px
        width: 100%
        
        .item
            width: 100%
            &:hover
                background: $main-grey
            &__link
                padding: 10px
                display: flex
                align-items: center
                gap: 10px
                span
                    color: $main-black

            &__icon
                width: 35px
                height: 35px
                fill: $main-black
</style>