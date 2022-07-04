<template>
    <div class="modal">
        <div class="modal__header">
            <!-- <slot name="header" /> -->
            AAAAA
            <div><i class="fa-solid fa-xmark"></i></div>
        </div>
        <div class="modal__content">
            <slot name="content" />
        </div>
        <div class="modal__footer">
            <slot name="footer" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

interface IModalProps {
    closeCallback: () => void
}

const props = defineProps<IModalProps>()

</script>

<style lang="sass" scoped>
</style>