<template>
    <button class="button"><slot /></button>
</template>

<style lang="sass" scoped>
@import '../../../styles/mixins'

.button
    @include default-button
</style>