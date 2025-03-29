<script setup>
import { Link } from '@inertiajs/vue3'
import { computed } from 'vue'

import AppIcon from '@/components/ui/icon/AppIcon.vue'

const props = defineProps({
    href: {
        type: String,
        required: false
    },
    label: {
        type: String,
        required: true
    },
    icon: {
        type: Object,
        required: false
    },
    active: {
        type: Boolean,
        default: false,
        required: false
    }
})

const classes = computed(() =>
    props.active
        ? 'bg-gray-700 font-bold'
        : 'hover:bg-gray-800 font-normal'
)
</script>

<template>
    <Link
        :href="href"
        :class="[
            'flex w-full items-center rounded-xl px-3 py-2 text-start text-base text-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50',
            classes
        ]"
    >
        <AppIcon class="me-2" v-if="icon" :icon="icon" />
        <span class="w-full">
            {{ label }}
        </span>
    </Link>
</template>
