<script setup>
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
        <h1 class="text-6xl font-black text-gray-800">{{ pageTitle }}</h1>
    </header>
</template>
