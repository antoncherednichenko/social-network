<template>
    <div class="user-profile">
        <ProfileAvatar />
    </div>
</template>

<script lang="ts" setup>
import ProfileAvatar from '@/components/AppProfile/ProfileAvatar.vue'

import { useStore } from 'vuex'

const store = useStore()

</script>

<style lang="sass" scoped>
</style>