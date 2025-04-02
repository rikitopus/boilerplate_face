<script setup>
defineProps({
    message: {
        type: String,
        required: false
    },
    id: {
        type: String,
        required: false
    }
})
</script>

<template>
    <span v-if="message" :id="id" class="text-sm text-danger-500">
        {{ message }}
    </span>
</template>
