<script setup>
import AppLogo from '@/components/AppLogo.vue'

defineProps({
    pageTitle: {
        type: String,
        default: 'Page Title',
        required: false
    }
})
</script>

<template>
    <header class="container mx-auto px-6 pb-4 pt-5">
        <AppLogo
            width="100"
            class="mx-auto mb-5"
        />
        <h1 class="text-2xl text-gray-800 text-center">{{ pageTitle }}</h1>
    </header>
</template>
