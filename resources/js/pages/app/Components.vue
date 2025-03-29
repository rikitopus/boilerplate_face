<script setup>
import { PhBugBeetle } from '@phosphor-icons/vue'

import AppButton from '@/components/ui/button/AppButton.vue';
import AppInput from '@/components/ui/form/AppInput.vue';

import { usePageStore } from '@/stores/page-store'

const pageStore = usePageStore()

pageStore.title = 'Componentes'
</script>

<template>
    <div class="flex-col flex gap-2">
        <div class="flex gap-2">
            <AppButton label="Primary" class="w-full" :icon-left="PhBugBeetle" loading />
            <AppButton label="Secondary" severity="secondary" />
            <AppButton label="Gray" severity="gray" />
            <AppButton label="Success" severity="success" />
            <AppButton label="Danger" severity="danger" />
            <AppButton label="Warning" severity="warning" />
            <AppButton label="Info" severity="info" />
        </div>
        <div class="flex gap-2">
            <AppButton label="Primary" severity="primary" variant="outlined" :icon-left="PhBugBeetle" />
            <AppButton label="Secondary" severity="secondary" variant="outlined" />
            <AppButton label="Gray" severity="gray" variant="outlined" />
            <AppButton label="Success" severity="success" variant="outlined" />
            <AppButton label="Danger" severity="danger" variant="outlined" />
            <AppButton label="Warning" severity="warning" variant="outlined" />
            <AppButton label="Info" severity="info" variant="outlined" />
        </div>
        <div class="flex gap-2">
            <AppButton label="Primary" severity="primary" variant="text" :icon-left="PhBugBeetle"/>
            <AppButton label="Secondary" severity="secondary" variant="text" />
            <AppButton label="Gray" severity="gray" variant="text" />
            <AppButton label="Success" severity="success" variant="text" />
            <AppButton label="Danger" severity="danger" variant="text" />
            <AppButton label="Warning" severity="warning" variant="text" />
            <AppButton label="Info" severity="info" variant="text" />
        </div>
        <div class="flex gap-2 items-center">
            <AppButton label="Small" size="sm" :icon-left="PhBugBeetle" is-loading />
            <AppButton label="Medium" size="md" :icon-left="PhBugBeetle" />
            <AppButton label="Large" size="lg" :icon-left="PhBugBeetle" />
        </div>
    </div>
    <div class="flex flex-col gap-2">
        <div class="block">
            <AppInput id="teste" label="teste" required />
        </div>
    </div>
</template>
