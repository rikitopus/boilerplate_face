<script setup>
import Button from 'primevue/button'

import AppIcon from '@/components/ui/icon/AppIcon.vue'
import AppSpinner from '@/components/ui/AppSpinner.vue'

const props = defineProps({
    label: {
        type: String,
        required: false
    },
    severity: {
        type: String,
        required: false,
        default: 'primary',
        validator(value) {
            return [
                'primary',
                'secondary',
                'gray',
                'success',
                'danger',
                'warning',
                'info'
            ].includes(value)
        }
    },
    variant: {
        type: String,
        required: false,
        default: 'flat',
        validator(value) {
            return ['flat', 'outlined', 'text'].includes(value)
        }
    },
    size: {
        type: String,
        required: false,
        default: 'md',
        validator(value) {
            return ['sm', 'md', 'lg'].includes(value)
        }
    },
    rounded: {
        type: Boolean,
        required: false,
        default: false
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false
    },
    loading: {
        type: Boolean,
        required: false,
        default: false
    },
    iconLeft: {
        type: Object,
        required: false
    },
    iconRight: {
        type: Object,
        required: false
    }
})

defineOptions({
    inheritAttrs: false
})

const BUTTON_DEFAULT =
    'inline-flex items-center justify-center border-2 transition duration-150 ease-in-out gap-2 active:scale-95 outline-none focus:ring-3 focus:ring-offset-1'

const BUTTON_SIZES = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg'
}

const BUTTON_FOCUS_RING = {
    primary: 'focus:ring-primary-500/50',
    secondary: 'focus:ring-secondary-500/50',
    gray: 'focus:ring-gray-500/50',
    success: 'focus:ring-success-500/50',
    danger: 'focus:ring-danger-500/50',
    warning: 'focus:ring-warning-500/50',
    info: 'focus:ring-info-500/50'
}

const BUTTON_CLASSES = {
    flat: {
        primary: 'bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 border-primary-500 hover:border-primary-600 focus:border-primary-600 text-white',
        secondary: 'bg-secondary-500 hover:bg-secondary-400 focus:bg-secondary-400 border-secondary-500 hover:border-secondary-400 focus:border-secondary-400 text-black',
        gray: 'bg-gray-500 hover:bg-gray-600 focus:bg-gray-600 border-gray-500 hover:border-gray-600 focus:border-gray-600 text-white',
        success: 'bg-success-500 hover:bg-success-400 focus:bg-success-400 border-success-500 hover:border-success-400 focus:border-success-400 text-black',
        danger: 'bg-danger-500 hover:bg-danger-600 focus:bg-danger-600 border-danger-500 hover:border-danger-600 focus:border-danger-600 text-white',
        warning: 'bg-warning-500 hover:bg-warning-400 focus:bg-warning-400 border-warning-500 hover:border-warning-400 focus:border-warning-400 text-black',
        info: 'bg-info-500 hover:bg-info-600 focus:bg-info-600 border-info-500 hover:border-info-600 focus:border-info-600 text-white'
    },
    outlined: {
        primary: 'bg-transparent hover:bg-primary-600 focus:bg-primary-600 border-primary-500 hover:border-primary-600 focus:border-primary-600 text-primary-500 hover:text-white focus:text-white',
        secondary: 'bg-transparent hover:bg-secondary-400 focus:bg-secondary-400 border-secondary-500 hover:border-secondary-400 focus:border-secondary-400 text-secondary-500 hover:text-black focus:text-black',
        gray: 'bg-transparent hover:bg-gray-600 focus:bg-gray-600 border-gray-500 hover:border-gray-600 focus:border-gray-600 text-gray-500 hover:text-white focus:text-white',
        success: 'bg-transparent hover:bg-success-400 focus:bg-success-400 border-success-500 hover:border-success-400 focus:border-success-400 text-success-500 hover:text-black focus:text-black',
        danger: 'bg-transparent hover:bg-danger-600 focus:bg-danger-600 border-danger-500 hover:border-danger-600 focus:border-danger-600 text-danger-500 hover:text-white focus:text-white',
        warning: 'bg-transparent hover:bg-warning-400 focus:bg-warning-400 border-warning-500 hover:border-warning-400 focus:border-warning-400 text-warning-500 hover:text-black focus:text-black',
        info: 'bg-transparent hover:bg-info-600 focus:bg-info-600 border-info-500 hover:border-info-600 focus:border-info-600 text-info-500 hover:text-white focus:text-white'
    },
    text: {
        primary: 'bg-transparent hover:bg-primary-500/10 focus:bg-primary-500/10 border-transparent text-primary-500 hover:text-primary-600 focus:text-primary-600',
        secondary: 'bg-transparent hover:bg-secondary-500/10 focus:bg-secondary-500/10 border-transparent text-secondary-500 hover:text-secondary-600 focus:text-secondary-600',
        gray: 'bg-transparent hover:bg-gray-500/10 focus:bg-gray-500/10 border-transparent text-gray-500 hover:text-gray-600 focus:text-gray-600',
        success: 'bg-transparent hover:bg-success-500/10 focus:bg-success-500/10 border-transparent text-success-500 hover:text-success-600 focus:text-success-600',
        danger: 'bg-transparent hover:bg-danger-500/10 focus:bg-danger-500/10 border-transparent text-danger-500 hover:text-danger-600 focus:text-danger-600',
        warning: 'bg-transparent hover:bg-warning-500/10 focus:bg-warning-500/10 border-transparent text-warning-500 hover:text-warning-600 focus:text-warning-600',
        info: 'bg-transparent hover:bg-info-500/10 focus:bg-info-500/10 border-transparent text-info-500 hover:text-info-600 focus:text-info-600'
    }
}
</script>

<template>
    <Button
        v-bind="$attrs"
        :class="[
            BUTTON_DEFAULT,
            BUTTON_SIZES[size],
            BUTTON_CLASSES[variant][severity],
            BUTTON_FOCUS_RING[severity],
            {
                'rounded-full': rounded,
                'rounded-md': !rounded,
                'pointer-events-none opacity-60': disabled || loading,
            }
        ]"
        :disabled="disabled || loading"
    >
        <AppSpinner v-if="loading" class="size-4"/>
        <AppIcon v-if="iconLeft" :icon="iconLeft" />
        <span v-if="label">{{ label }}</span>
        <AppIcon v-if="iconRight" :icon="iconRight" />
    </Button>
</template>
