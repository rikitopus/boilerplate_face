<script setup>
import { Head } from '@inertiajs/vue3'

defineProps({
    title: {
        type: String,
        default: 'Page Title',
        required: false
    }
})
</script>

<template>
    <Head>
        <title>{{ title }}</title>
    </Head>
</template>
