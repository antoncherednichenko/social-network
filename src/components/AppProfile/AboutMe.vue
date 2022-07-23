<template>
    <div class="about-me">
        <h2 class="about-me__title">About me:</h2>
        <p class="about-me__descr" v-if="props.aboutMe">{{aboutMe}}</p>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

interface IAboutMeProps {
    aboutMe: string
}

const props = defineProps<IAboutMeProps>()

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