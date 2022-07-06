<template>
    <div class="modal-back">
        <div class="modal">
            <div class="modal__header header">
                <div class="header__content">
                    <slot name="header" />
                </div>
                <div class="header__cross">
                    <CrossButton @click="closeModal" />
                </div>
            </div>
            <div class="modal__content">
                <slot name="content" />
            </div>
            <div class="modal__footer">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import CrossButton from '@/components/ui/CrossButton/CrossButton.vue'

import { defineProps } from 'vue'

interface IModalProps {
    closeCallback: () => void
}

const props = defineProps<IModalProps>()

const closeModal = () => {
    props.closeCallback()
}
</script>

<style lang="sass" scoped>
@import '../../../styles/mixins'
@import '../../../styles/vars'


.modal-back
    width: 100vw
    height: 100vh
    position: absolute
    top: 0
    left: 0
    &:before
        content: ''
        position: absolute
        top: 0
        left: 0
        z-index: 15
        width: 100vw
        height: 100vh
        background: $main-black
        opacity: 0.7 
.modal
    @include set-center
    background: #fff
    border-radius: 4px
    width: 65%
    height: 85vh
    z-index: 20
    overflow: hidden
    &__header, &__footer
        width: 100%
        padding: 15px 10px
        height: 70px
        background: $main-grey
    .header
        @include flex-between
        &__content
            width: 100%
        &__cross
            @include flex-center
    &__content
        width: 100%
        padding: 15px
        height: calc( 85vh - 140px )
        overflow-y: auto
    &__footer
        position: fixed
        bottom: 0
        left: 0
</style>