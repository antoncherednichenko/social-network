<template>
    <div v-if="contacts" class="contacts">
        <h3 class="contacts__title"><b>Contacts:</b></h3>
        <ul class="contacts__list">
            <li v-for="(link, contact, index) in props.contacts" :key="index">
                <ContactLink v-if="link" :link="link">
                    {{contact}}
                </ContactLink>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import ContactLink from '@/components/AppProfile/UserContacts/ContactLink.vue'

import { defineProps } from 'vue';

import { TContacts } from '@/types/profileModuleTypes';

interface IContactsProps {
    contacts: TContacts | null
}

const props = defineProps<IContactsProps>()

</script>

<style lang="sass" scoped>
@import '../../../styles/mixins'
@import '../../../styles/vars'

.contacts
    @include tile
    width: 250px
    &__title
        font-size: 20px
        font-weight: 600
        text-decoration: underline
</style>