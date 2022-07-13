<template>
    <div class="job">
        <div class="job__status">
            <span>Looking for a job: </span>
            <CheckIcon class="check" v-if="lookingForAJob" />
            <CrossIcon class="cross" v-else />
        </div>
        <div v-if="lookingForAJobDescr" class="job__description">
            {{lookingForAJobDescr}}
        </div>
    </div>
</template>

<script lang="ts" setup>
import CheckIcon from '@/components/ui/icons/CheckIcon.vue'
import CrossIcon from '@/components/ui/icons/CrossIcon.vue'

import { computed } from '@vue/reactivity';
import { useStore } from 'vuex'

const store = useStore()

const lookingForAJob = computed<boolean>(() => store.state.profile?.lookingForAJob)
const lookingForAJobDescr = computed<string | null>(() => store.state.profile?.lookingForAJobDescription)
</script>

<style lang="sass" scoped>
@import '../../styles/mixins'
@import '../../styles/vars'

.job
    @include tile
    height: max-content
    &__status
        display: flex
        align-items: center
        span
            font-size: 20px
            font-weight: 600
            margin-right: 10px
        .cross, .check
            width: 25px
            height: 25px
        .cross
            fill: $main-red
        .check
            fill: $main-green
</style>