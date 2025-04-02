<script setup>
import AuthHeaderLayout from './auth/AuthHeaderLayout.vue';
import AuthFooterLayout from './auth/AuthFooterLayout.vue';
import AppHead from '@/components/layout/AppHead.vue'

import AuthBackground from '../../assets/images/bg-sample.jpg'

import { usePageStore } from '@/stores/page-store'

const pageStore = usePageStore()

defineProps({
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <AppHead :title="pageStore.title" />

    <div class="flex justify-center items-center lg:grid lg:grid-cols-3 w-full min-h-dvh p-5 lg:p-0">
        <div class="flex flex-col lg:justify-between bg-white relative z-10 w-full rounded-lg lg:rounded-none lg:h-full lg:w-auto py-4">
            <AuthHeaderLayout :page-title="pageStore.title" />

            <main class="lg:grow flex flex-col justify-center p-5 w-full max-w-[400px] self-center">
                <slot />
            </main>

            <AuthFooterLayout />
        </div>
        <div
            class="fixed top-0 left-0 block w-full h-dvh lg:relative lg:col-span-2 bg-cover bg-no-repeat bg-center"
            :style="{
                backgroundImage: `url(${AuthBackground})`
            }"
        ></div>
    </div>
</template>
