<script setup>
defineProps({
    icon: {
        type: String,
        required: true
    }
})
</script>

<template>
    <span :class="['pi', icon]"></span>
</template>
