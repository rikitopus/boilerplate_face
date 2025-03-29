<script setup>
import InputText from 'primevue/inputtext'
import AppLabel from './AppLabel.vue'
import AppFieldError from './AppFieldError.vue'

const props = defineProps({
    label: {
        type: String,
        required: false
    },
    id: {
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
    },
    error: {
        type: String,
        required: false
    }
})

defineOptions({
    inheritAttrs: false
})
</script>

<template>
    <AppLabel
        v-if="label"
        class="inline-block w-full"
        :label="label"
        :hidden-label="hiddenLabel"
        :for="id"
        :required="required"
    />
    <InputText
        v-bind="$attrs"
        :id="id"
        class="block w-full p-2 border border-gray-200 focus:border-primary-500 outline-none rounded-md"
        :required="required"
        :aria-describedby="error && id ? id + '_error' : null"
    />
    <AppFieldError :id="error && id ? id + '_error' : null" :message="error" />
</template>
