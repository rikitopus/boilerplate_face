<script setup>
defineProps({
    title: {
        type: String,
        default: ''
    },
    message: {
        type: String,
        default: ''
    }
});
</script>

<template>
    <div v-show="message">
        <p class="text-sm text-red-600 dark:text-red-500">
            {{ message }}
        </p>
    </div>
</template>
