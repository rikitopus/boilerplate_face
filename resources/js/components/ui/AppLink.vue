<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
    target: {
        type: String,
        required: false
    }
})
</script>

<template>
    <component
        :is="target === '_blank' ? 'a' : Link"
        :target="target"
        class="hover:underline focus:underline underline-offset-4 decoration-2 font-semibold text-primary-500 hover:text-primary-700"
    >
        <slot />
    </component>
</template>
