<template>
    <AppModal class="edit_modal" @close-modal="closeModal">
        <template #header>
            <h3 class="edit_modal__header">Edit your profile</h3>
        </template>

        <template #content>
            <div class="edit_modal__content">
                <EditFoto />
            </div>
        </template>
    </AppModal>
</template>

<script lang="ts" setup>
import AppModal from '@/components/ui/AppModal/AppModal.vue'
import EditFoto from '@/components/AppProfile/ProfileAvatar/EditFoto.vue'

import { useStore } from 'vuex';
import { rootConstants } from '@/store/storeConst';

const store = useStore()

const closeModal = () => {
    store.dispatch(rootConstants.DISPATCH_OBJECT_VALUE, { path: 'profile.editModal.isModal', value: false })
}
</script>

<style lang="sass" scoped>
@import '../../../styles/mixins'
@import '../../../styles/vars'

.edit_modal
    &__header
        font-size: 20px
        font-weight: 600

</style>