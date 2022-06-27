<template>
    <input
        class="input" 
        v-model="inputValue" 
        @input="inputHandler"  
        :type="type"
        :value="value"
    >
</template>

<script lang="ts" setup>
import { defineProps, ref, defineEmits } from 'vue'

interface IInputProps {
    type: string
    placeholder?: string
    label?: string
    value: string
    validMessage?: string
    unvalidMessage?: string
    validator?: (value: string) => boolean
}

const props = defineProps<IInputProps>()
const emit = defineEmits<{
    (e: 'binding', value: string)
}>()

const inputValue = ref<string>('')

const inputHandler = () => {
    if(props.validator) {
        props.validator(inputValue.value)
    }
    emit('binding', inputValue.value)
}
</script>

<style lang="sass" scoped>
.input
    width: 100%
    border: none
    padding: 10px
    border-radius: 4px
</style>