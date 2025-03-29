<script setup>
const props = defineProps({
    label: {
        type: String,
        required: false
    },
    required: {
        type: Boolean,
        required: false,
        default: false
    },
    hiddenLabel: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<template>
    <label
        :class="[
            'text-sm font-medium text-gray-700',
            {
                'sr-only': hiddenLabel
            }
        ]"
    >
        {{ label }}
        <span
            v-if="required"
            class="text-danger-500"
        >
            <span aria-hidden="true"> *</span>
            <span class="sr-only">(campo obrigatório)</span>
        </span>
    </label>
</template>
