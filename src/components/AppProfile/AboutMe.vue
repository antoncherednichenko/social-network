<template>
    <div class="about-me">
        <h2 class="about-me__title">About me:</h2>
        <p class="about-me__descr" v-if="aboutMe">{{aboutMe}} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi similique consequuntur autem voluptate optio, hic vitae quis voluptatum quos dicta maiores voluptates, natus labore culpa, praesentium consectetur iusto molestiae omnis!</p>
    </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex'

const store = useStore()

const aboutMe = computed<string | null>(() => store.state.profile.aboutMe)

</script>

<style lang="sass" scoped>
@import '../../styles/mixins'
@import '../../styles/vars'

.about-me
    @include tile
    &__title
        font-size: 24px
        font-weight: 600
        text-decoration: underline
</style>