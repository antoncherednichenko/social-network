<template>
    <div>
        <transition name="label">
            <label v-show="label && isLabel" class="label">
                {{label}}
            </label>
        </transition>
        <input
            :class="{ 'bg-red': !isValid && inputValue, 'bg-green': isValid && inputValue }"
            class="input" 
            v-model="inputValue"  
            :type="type"
            :value="value"
            :placeholder="placeholder"
            @input="inputHandler"
            @focus="showLabel"
            @blur="hideLabel" 
        >
        <span v-if="validMessage && isValid && inputValue" class="valid">{{validMessage}}</span>
        <span v-if="unvalidMessage && !isValid && inputValue" class="unvalid">{{unvalidMessage}}</span>
    </div>
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
const emit = defineEmits<{ (e: 'binding', value: string): void }>()

const inputValue = ref<string>('')
const isValid = ref<boolean>(true)
const isLabel = ref<boolean>(false)

const inputHandler = () => {
    isValid.value = props.validator ? props.validator(inputValue.value) : true
    emit('binding', inputValue.value)
}
const showLabel = () => { isLabel.value = true }
const hideLabel = () => { isLabel.value = false }
</script>

<style lang="sass" scoped>
@import '../../../styles/vars'
@import '../../../styles/mixins'

.label
    font-size: 18px
    font-weight: 700
    opacity: 0.8
.input
    width: 100%
    border: none
    padding: 10px
    border-radius: 4px
    transition: filter 0.5s
    &:focus
        outline: none
        @include light-shadow
.valid, .unvalid
    display: inline-block
    font-size: 13px
.valid
    color: $main-green
.unvalid
    color: $main-red
.bg-red
    border: 1px solid $main-red
.bg-green
    border: 1px solid $main-green

.label-enter-active, .label-leave-active
  transition: opacity .5s
.label-enter-from, .label-leave-to
    opacity: 0
.label-enter-to, .label-leave-from
    opacity: 1
</style>