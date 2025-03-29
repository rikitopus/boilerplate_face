<script setup>
defineProps({
    icon: {
        type: Object,
        required: true
    }
})
</script>

<template>
  <Component :is="icon" />
</template>
